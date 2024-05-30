
import { Currency } from "../../models/Currency"

exports.updateCurrecy = async (req, res) => {
  try {
    const body = req.body;
    const name = body.name;

    const existingCurrency = await Currency.findOne({ name });

    if (!existingCurrency) {
      res.status(409).json({
        msg: "Currency not found"
      })
      return;
    }

    const updatedCurrency = await Currency.update(body);
    res.status(200).json({
      msg: "currency updated successfully"
    })
    return updatedCurrency;
  } catch (err) {
    res.status(500).json({
      msg: "error occurred"
    })
    console.log("ERROR:\n" + err)
  }
}

