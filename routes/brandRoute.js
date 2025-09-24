const express = require("express");
const brandController = require("../controllers/brandController");

const router = express.Router();

// READ
router.get("/getAllBrands", brandController.getAllBrands);


router.get("/getBrandById/:id", brandController.getBrandById);

// CREATE
router.post("/createBrand", brandController.createBrand);

// UPDATE
router.put("/updateBrand/:id", brandController.updateBrand);

// DELETE
router.delete("/deleteBrand/:id", brandController.deleteBrand);

module.exports = router;