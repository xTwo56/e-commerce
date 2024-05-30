
import { Currency } from "../../models/Currency"

exports.createCurrency = async (req, res) => {
  try {
    const body = req.body;
    const name = body.name;
    const existingCurreny = await Currency.findOne({ name })

    if (!existingCurreny) {
      const newCurrency = await Currency.create(body)
      res.status(200).json({
        msg: "new currency added"
      })
      return newCurrency;
    }

    res.status(409).json({
      msg: "currency already exists"
    })
    return;
  }
  catch (err) {
    res.status(500).json({
      msg: "ERROR:\n"
    })
    console.log("ERROR:\n" + err)
    return;
  }
}
