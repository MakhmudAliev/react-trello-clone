const Card = require("../models/Card");

// @desc    Get all cards
// @route   GET /api/v1/cards
// @access  Public
exports.getCards = async (req, res, next) => {
  try {
    const cards = await Card.find();

    return res.status(200).json({
      success: true,
      count: cards.length,
      data: cards,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc    Add card
// @route   POST /api/v1/cards
// @access  Public
exports.addCard = async (req, res, next) => {
  try {
    const { title, listId } = req.body;

    const card = await Card.create(req.body);

    return res.status(201).json({
      success: true,
      data: card,
    });
  } catch (error) {
    console.log("server card add fail", error.message);

    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc    Edit card
// @route   POST /api/v1/cards/:id
// @access  Public
exports.editCard = async (req, res, next) => {
  try {
    const card = await Card.findById(req.params.id);

    if (!card) {
      return res.status(404).json({
        success: false,
        error: "No card found",
      });
    }
    // NOT FINISHED
    await card.update(req.params);
  } catch (error) {
    console.log("edit card error", error.message);
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

// @desc    Delete card
// @route   GET /api/v1/cards/:id
// @access  Public
exports.deleteCard = async (req, res, next) => {
  try {
    const card = await Card.findById(req.params.id);
    console.log("req.params", req.params);
    if (!card) {
      return res.status(404).json({
        success: false,
        error: "No card found",
      });
    }

    await card.remove();

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
