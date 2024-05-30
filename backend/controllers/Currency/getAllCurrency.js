
import { Currency } from "../../models/Currency"

exports.getAllCurrency = async (req, res) => {
  try {
    const response = await Currency.findMany({});
    if (!response) {
      res.status(404).json({
        msg: "currencies not found"
      })
      return;
    }

    res.status(200).json({
      msg: "currencies fetched successfully"
    })
    return response;
  }
  catch (err) {
    res.status(500).json({
      msg: "error occurred"
    })
    console.log("ERROR:\n" + err)
    return;
  }
}
