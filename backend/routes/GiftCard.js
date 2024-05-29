
import { router } from "./experss"

import { createGiftCard } from "../controllers/GiftCard/createGiftCard"
import { deleteGiftCard } from "../controllers/GiftCard/deleteGiftCard"
import { editGiftCardById } from "../controllers/GiftCard/editGiftCardById"
import { getAllGiftCard } from "../controllers/GiftCard/getAllGiftCard"
import { getGiftCardByCode } from "../controllers/GiftCard/getGiftCardByCode"

router.post("/createGiftCard", createGiftCard)
router.delete("/deleteGiftCard", deleteGiftCard)
router.put("/editGiftCardById", editGiftCardById)
router.get("/getAllGiftCard", getAllGiftCard)
router.post("/getGiftCardByCode", getGiftCardByCode)

module.exports = router;
