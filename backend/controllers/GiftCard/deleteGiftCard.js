
import GiftCard from "../models/GiftCard"

exprots.deleteGiftCardById = async (req, res) => {

  try {
    const { _id } = req.body;

    const giftcard = await GiftCard.findOne({ _id });
    if (!giftcard) {
      res.status(404).json({
        msg: "giftcard doesn't exist"
      })
      return
    }
    const { acknowledged } = await GiftCard.deleteOne({ _id });
    res.status(200).json({
      msg: "Gift card deleted successfully"
    })
    return acknowledged;
  }
  catch (err) {
    res.status(500).jso({
      msg: "error occurred"
    })
  }
}
