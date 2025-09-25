const express = require("express");
const categoryController = require("../controllers/categoryController");

const router = express.Router();

// READ
router.get("/getAllCategories", categoryController.getAllCategories);
// get by id
router.get("/getCategoryById/:id", categoryController.getCategoryById);

// CREATE
router.post("/createCategory", categoryController.createCategory);

// UPDATE
router.put("/updateCategory/:id", categoryController.updateCategory);

// DELETE
router.delete("/deleteCategory/:id", categoryController.deleteCategory);

module.exports = router;