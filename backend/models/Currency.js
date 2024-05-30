import mongoose from "./mongoose"

const Currency = mongoose.Schema({

  name: {
    type: Stirng,
    required: true
  },

  symbol: {
    type: Stirng,
    required: true
  },

  displayPosition: {
    type: Stirng,
    enum: ["left", "right", "top", "bottom"],
    required: true,
  },

  exchangeRateAndFee: {
    type: Number,
    required: true
  },

  ishidden: {
    type: Boolean,
    default: false
  },

  thousandSeperator: {
    type: Char,
    enum: [",", ".", " "],
    default: ",",
    trim: true
  },

  decimalSeperator: {
    type: String,
    enum: [",", ".", " "],
    default: ".",
    trim: true
  },

  actions: {
    type: String,
    enum: ["update", "remove"],
    required: true,
    trim: true
  },

  checkoutCurrency: {
    type: Boolean,
    default: true
  },

  default: {
    type: Boolean,
    default: false
  }

})

module.exports = mongoose.model("Curreny", Currency)
