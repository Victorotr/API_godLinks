// Controllers ↓

const { newOffer } = require("./newOffer");
const { allOffers } = require("./alloffers");
const { offerByID } = require("./offerByID");
const { modifyOffer } = require("./modifyOffer");
const { deleteOffer } = require("./deleteOffer");
const { voteOffer } = require("./voteOffer");

// Exports ↓

module.exports = {
  newOffer,
  allOffers,
  offerByID,
  modifyOffer,
  deleteOffer,
  voteOffer,
};