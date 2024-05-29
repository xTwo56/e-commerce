
import GiftCard from "../models/GiftCard"
import { getGiftCardByCode } from "./getGiftCardByCode"

exports.createGiftCard = async (req, res) => {
  try {
    const { code } = req.body;
    const body = req.body;

    const existingCard = await getGiftCardByCode({ code })

    if (!existingCard) {
      const giftCard = await GiftCard.create(body);
      res.status(200).json({
        msg: "GiftCard created"
      })
      return giftCard;
    }

    res.status(403).json({
      msg: "GiftCard already exists"
    })
    return;
  }
  catch (err) {
    console.log("ERROR:\n" + err)
    res.status(411).json({
      msg: "an error occured"
    })
  }
}
