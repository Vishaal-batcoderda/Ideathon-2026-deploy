const Team = require("../models/Team");

/* ================= DASHBOARD ================= */

exports.getTeamDashboard = async (req, res) => {

  const team = await Team.findById(
    req.team.teamId
  ).select("-leader.password");

  res.json(team);

};
