
import { Currency } from "../../models/Currency"

exports.deleteCurrency = async (req, res) => {

  try {
    const name = req.body.name;

    const { acknowledged, deleteCount } = await Currency.deleteOne({ name });

    if (acknowledged && deleteCount) {
      res.status(200).json({
        msg: "currency successfully deleted"
      })
      return true;
    }

    res.status(404).json({
      msg: "currency not found"
    })
    return false;
  }
  catch (err) {
    res.status(500).json({
      msg: "error occurred"
    })
    console.log("ERROR:\n" + err)
    return false;
  }
}
