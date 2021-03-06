const express = require('express');
const CardsRouter = express.Router();
const { getCards, addCard, deleteCard, editCard } = require('../controllers/cards');

CardsRouter.route('/').get(getCards).post(addCard);

CardsRouter.route('/:id').delete(deleteCard).post(editCard);

module.exports = CardsRouter;
