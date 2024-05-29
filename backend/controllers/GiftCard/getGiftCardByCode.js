
import { GiftCard } from "../models/GiftCard"

exports.getGiftCardByCode = async (req, res) => {

  try {
    const { code } = req.body;
    const response = await GiftCard.findOne({ code })

    console.log(response);

    if (!response) {
      res.json({
        msg: "Invalid Code!"
      })
      return;
    }
    res.status(200).json({
      response,
    })
    return response;
  } catch (err) {
    console.log("ERROR:\n" + err)
    res.status(500).json({
      msg: "error occured"
    })
  }

}
