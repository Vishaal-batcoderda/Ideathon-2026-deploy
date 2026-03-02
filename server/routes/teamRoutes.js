const express = require("express");
const router = express.Router();
const Team = require("../models/Team");


// ✅ REGISTER TEAM WITH PDF
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

    // 🔥 1️⃣ Check duplicate regNo (leader)
    const leaderExists = await Team.findOne({
      $or: [
        { "leader.regNo": leader.regNo },
        { "members.regNo": leader.regNo }
      ]
    });

    if (leaderExists) {
      return res.status(400).json({
        message: "Leader is already registered in another team."
      });
    }

    // 🔥 2️⃣ Check duplicate regNo (members)
    for (let member of members) {

      const memberExists = await Team.findOne({
        $or: [
          { "leader.regNo": member.regNo },
          { "members.regNo": member.regNo }
        ]
      });

      if (memberExists) {
        return res.status(400).json({
          message: `Member with Reg No ${member.regNo} is already in another team.`
        });
      }
    }

    // 🔥 3️⃣ Prevent leader also inside members
    const duplicateInsideTeam = members.find(
      m => m.regNo === leader.regNo
    );

    if (duplicateInsideTeam) {
      return res.status(400).json({
        message: "Leader cannot also be a team member."
      });
    }

    // ✅ Save team
    const team = new Team({
      teamName,
      leader,
      members,
      department,
      year,
      domain,
      problemTitle,
      abstract
    });

    await team.save();

    res.json({ message: "Registered Successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});


// ✅ GET TEAMS
router.get("/teams", async (req, res) => {
  const teams = await Team.find();
  res.json(teams);
});


// ✅ UPDATE STATUS
router.put("/team/:id", async (req, res) => {
  const updated = await Team.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(updated);
});

const ExcelJS = require("exceljs");

router.get("/export", async (req, res) => {

  const teams = await Team.find();

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Teams");

  worksheet.columns = [
    { header: "Team Name", key: "teamName", width: 25 },
    { header: "Leader", key: "leaderName", width: 25 },
    { header: "Email", key: "email", width: 30 },
    { header: "Department", key: "department", width: 20 },
    { header: "Year", key: "year", width: 10 },
    { header: "Status", key: "status", width: 15 },
  ];

  teams.forEach(team => {
    worksheet.addRow(team);
  });

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );

  res.setHeader(
    "Content-Disposition",
    "attachment; filename=teams.xlsx"
  );

  await workbook.xlsx.write(res);
  res.end();
});

module.exports = router;