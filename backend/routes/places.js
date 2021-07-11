const express = require("express");
const router = express.Router();
const authorization = require("../middleware/auth")
const placesController = require("../controllers/places");
router.get("/", placesController.allPlace);
router.get("/:id", placesController.getplacesById);
router.get("/user/:id", placesController.getPlaceByUserId);
router.post("/",authorization, placesController.createPlace);
router.delete("/:id",authorization, placesController.deletePlace);
router.patch("/:id",authorization, placesController.updatePlace);

module.exports = router;
