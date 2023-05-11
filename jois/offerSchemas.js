// Require ↓

const Joi = require("joi");

// Jois ↓

const newOfferJoi = Joi.object().keys({
  url: Joi.string().max(280).required(),
  title: Joi.string().max(60).required(),
  descrip: Joi.string().max(280),
  price: Joi.number().positive().precision(2),
  offer_price: Joi.number().positive().precision(2),
  plataform: Joi.string().max(60),
  offer_expiry: Joi.date(),
});

module.exports = { newOfferJoi };
