const Column = require("../models/Column");

// @desc    Get all columns
// @route   GET /api/v1/columns
// @access  Public
exports.getColumns = async (req, res, next) => {
  try {
    const columns = await Column.find();

    return res.status(200).json({
      success: true,
      count: columns.length,
      data: columns,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc    Add column
// @route   POST /api/v1/columns
// @access  Public
exports.addColumn = async (req, res, next) => {
  try {
    const { title } = req.body;

    const column = await Column.create(req.body);

    return res.status(201).json({
      success: true,
      data: column,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc    Delete column
// @route   GET /api/v1/columns/:id
// @access  Public
exports.deleteColumn = async (req, res, next) => {
  try {
    const column = await Column.findById(req.params.id);

    if (!column) {
      return res.status(404).json({
        success: false,
        error: "No Column found",
      });
    }

    await column.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};
