const express = require("express");
const router = express.Router();
const Team = require("../models/Team");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const teamAuth = require("../middleware/teamAuth");
const sendEmail = require("../utils/sendEmail");
const ExcelJS = require("exceljs");


/* ======================================================
   REGISTER
====================================================== */

router.post("/register", async (req, res) => {

  try {

    const {
      teamName,
      leader,
      members,
      department,
      year,
      domain,
      problemTitle,
      abstract
    } = req.body;

    if (!leader.password)
      return res.status(400).json({ message: "Password required" });

    /* Check duplicate registration */

    const existing = await Team.findOne({
      $or: [
        { "leader.regNo": leader.regNo },
        { "members.regNo": leader.regNo }
      ]
    });

    if (existing)
      return res.status(400).json({ message: "Leader already registered" });

    /* Hash password */

    leader.password = await bcrypt.hash(leader.password, 10);

    /* Generate Team ID */

    const lastTeam = await Team.findOne().sort({ teamId: -1 });
    const teamId = lastTeam ? lastTeam.teamId + 1 : 1;

    const team = new Team({
      teamId,
      teamName,
      leader,
      members,
      department,
      year,
      domain,
      problemTitle,
      abstract,
      status: "Pending"
    });

    await team.save();

    /* Send email */

    const emails = [
      leader.email,
      ...members.filter(m => m.email).map(m => m.email)
    ];

    try {

      await sendEmail(
        emails,
        "Protothon 2026 | Registration Confirmed",
        `
        <h2>Protothon 2026</h2>

        <p>Hello Team ${teamName},</p>

        <p>Your registration has been successfully completed.</p>

        <p><b>Team ID:</b> ${teamId}</p>
        <p><b>Domain:</b> ${domain}</p>
        <p><b>Problem Statement:</b> ${problemTitle}</p>

        <p>
        Login here:
        https://protothon-2026.vercel.app/#home
        </p>

        <p>
        Best Regards<br/>
        Protothon 2026 Organizing Team
        </p>
        `
      );

    } catch (err) {

      console.log("Email failed:", err);

    }

    res.json({
      message: "Registered Successfully",
      teamId
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Registration failed"
    });

  }

});


/* ======================================================
   LOGIN (Leader Only)
====================================================== */

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const team = await Team.findOne({ "leader.email": email });

    if (!team)
      return res.status(404).json({ message: "Not registered" });

    const valid = await bcrypt.compare(password, team.leader.password);

    if (!valid)
      return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign(
      { teamId: team._id },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    res.json({
      token,
      teamName: team.teamName,
      teamId: team.teamId
    });

  } catch (err) {

    res.status(500).json({
      message: "Server error"
    });

  }

});


/* ======================================================
   DASHBOARD
====================================================== */

router.get("/dashboard", teamAuth, async (req, res) => {

  try {

    const team = await Team.findById(req.team.teamId)
      .select("-leader.password");

    res.json(team);

  } catch (err) {

    res.status(500).json({ message: "Server error" });

  }

});


/* ======================================================
   UPDATE ABSTRACT
====================================================== */

router.put("/update-abstract", teamAuth, async (req, res) => {

  try {

    const deadline = new Date("2026-03-18T23:59:59");

    if (new Date() > deadline)
      return res.status(403).json({ message: "Editing closed" });

    const updated = await Team.findByIdAndUpdate(
      req.team.teamId,
      { abstract: req.body.abstract },
      { new: true }
    ).select("-leader.password");

    res.json(updated);

  } catch {

    res.status(500).json({
      message: "Update failed"
    });

  }

});


/* ======================================================
   GET ALL TEAMS (ADMIN)
====================================================== */

router.get("/teams", async (req, res) => {

  try {

    const teams = await Team.find().select("-leader.password");

    res.json(teams);

  } catch {

    res.status(500).json({
      message: "Failed to fetch"
    });

  }

});


/* ======================================================
   UPDATE STATUS
====================================================== */

router.put("/status/:id", async (req, res) => {

  try {

    const updated = await Team.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(updated);

  } catch {

    res.status(500).json({
      message: "Status update failed"
    });

  }

});


/* ======================================================
   EXPORT EXCEL
====================================================== */

router.get("/export", async (req, res) => {

  try {

    const teams = await Team.find().select("-leader.password");

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Teams");

    worksheet.columns = [
      { header: "Team ID", key: "teamId", width: 10 },
      { header: "Team Name", key: "teamName", width: 25 },
      { header: "Domain", key: "domain", width: 20 },
      { header: "Problem Title", key: "problemTitle", width: 30 },
      { header: "Status", key: "status", width: 15 }
    ];

    teams.forEach(team => {

      worksheet.addRow({
        teamId: team.teamId,
        teamName: team.teamName,
        domain: team.domain,
        problemTitle: team.problemTitle,
        status: team.status
      });

    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=protothon_teams.xlsx"
    );

    await workbook.xlsx.write(res);

    res.end();

  } catch {

    res.status(500).json({
      message: "Export failed"
    });

  }

});


module.exports = router;
