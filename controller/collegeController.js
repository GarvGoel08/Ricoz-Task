const { catchAsyncError } = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const College = require("../models/college");

// Create college from Input sent in body
exports.createCollege = catchAsyncError(async (req, res, next) => {
  const { name, address, phone, email } = req.body;
  if (!name || !address || !phone || !email) {
    return next(new ErrorHandler("Please fill all the fields", 400));
  }
  const college = await College.create({ name, address, phone, email });
  res.status(201).json({
    success: true,
    data: college,
  });
});

// Get All Colleges from DB
exports.getAllColleges = catchAsyncError(async (req, res, next) => {
  const colleges = await College.find();
  res.status(200).json({
    success: true,
    data: colleges,
  });
});

// Get College by ID
exports.getCollegeById = catchAsyncError(async (req, res, next) => {
  const college = await College.findById(req.params.id);
  if (!college) {
    return next(new ErrorHandler("College not found", 404));
  }
  res.status(200).json({
    success: true,
    data: college,
  });
});

// Update College by ID
exports.updateCollege = catchAsyncError(async (req, res, next) => {
  let college = await College.findById(req.body.id);
  if (!college) {
    return next(new ErrorHandler("College not found", 404));
  }
  college = await College.findByIdAndUpdate(req.body.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    data: college,
  });
});

// Delete College by ID
exports.deleteCollege = catchAsyncError(async (req, res, next) => {
  const college = await College.findById(req.params.id);
  if (!college) {
    return next(new ErrorHandler("College not found", 404));
  }
  await college.deleteOne();
  res.status(200).json({
    success: true,
    data: {},
  });
});
