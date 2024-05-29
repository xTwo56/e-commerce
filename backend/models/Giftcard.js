import mongoose from "./mongoose"

const GiftCardSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },

  code: {
    type: String,
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
    required: true,
  },

  enable: {
    type: String,
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
  }
})

module.exports = mongoose.model("Giftcard", GiftCardSchema)


