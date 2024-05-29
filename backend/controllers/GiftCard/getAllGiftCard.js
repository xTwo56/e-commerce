
import { GiftCard } from "../models/GiftCard"


exports.getAllGiftCard = async (req, res) => {
  try {
    let giftCard = await GiftCard.find({});
    res.json(giftCard);
    return giftCard;
  }
  catch (error) {
    console.log("ERROR:\n", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });

  }
}
