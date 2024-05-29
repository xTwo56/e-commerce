
import GiftCard from "../models/GiftCard"

exports.editGiftCard = async (req, res) => {
  try {
    const { _id } = req.body;
    const body = req.body;

    const giftCard = await GiftCard.findOne({ _id });

    if (!giftCard) {
      res.status(404).json({
        msg: "Giftcard not found!"
      })
      return;
    }

    const updatedGiftCard = await GiftCard.update(body)
    res.status(200).json({
      msg: "Giftcard updated"
    })
    return updatedGiftCard;
  }
  catch (err) {
    res.status(500).json({
      msg: "an error occurred"
    })
    console.log("ERROR:\n" + err)
  }
}

