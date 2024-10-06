const express = require("express");
const {
  getAllColleges,
  updateCollege,
  createCollege,
  deleteCollege,
  getCollegeById,
} = require("../controller/collegeController");
const router = express.Router();

router.post("/Add", createCollege);
router.get("/GetAll", getAllColleges);
router.put("/Update", updateCollege);
router.delete("/Delete/:id", deleteCollege);
router.get("/Get/:id", getCollegeById);
router.get("/", (req, res) => {
  res.send("College Route is working..");
});

module.exports = router;
