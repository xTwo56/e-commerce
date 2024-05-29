import mongoose from "./mongoose"

const GiftCard = new mongoose.Schema({

  code: {
    type: String,
    unique: true,
    required: true,
  },

  order: {
    type: String,
    required: true,
  },

  balance: {
    type: Number,
    required: true,
  },

  redeem: {
    type: String,
    default: null,
  },

  expiryOn: {
    type: Schema.Types.Mixed,
    required: true,
    validate: {
      validator: function(value) {
        return value == "unlimited" || value instanceof Date;
      },
      message: 'Expiry date must be a valid date or "unlimited"'
    }
  },

  recepient: {
    type: String,
    required: function() {
      return this.recepientRequired
    },
  },

  enable: {
    type: Boolean,
    default: true
  },

  codePattern: {
    type: String
  },

  email: {
    type: {
      notification: {
        type: Boolean,
        default: true
      },
      events: {
        onDelivery: {
          type: Boolean,
          default: true
        },
        onUse: {
          type: Boolean,
          default: true
        }
      }
    },
    required: true
  },

  codePattern: {
    type: String,
    default: null
  },

  recepientRequired: {
    type: Boolean,
    required: true
  }

})

module.exports = mongoose.model("Giftcard", GiftCard)


