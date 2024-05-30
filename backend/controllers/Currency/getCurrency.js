
import { Currency } from "../../models/Currency"

exports.getCurrency = async (req, res) => {
  try {
    const name = req.body.name;

    const currency = await Currency.findOne({ name });

    if (!currency) {
      res.status(404).json({
        msg: "currency not found"
      })
      return;
    }

    res.status(200).json({
      msg: "currency fetched successfully"
    })
    return currency;
  }
  catch (err) {
    res.status(500).json({
      msg: "error occurred"
    })
    return;
  }
}
