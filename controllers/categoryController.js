const Categories = require('../models/categoryModel')

// GET ALL
const getAllCategories = async(req, res) => {
        try {
            const categories = await Category.findAll()
            res.status(200).send({categories:categories, succcess:true})
        } catch (error) {
            res.status(500).send({msg:'server error'})
        }
};

// GET BY ID
function getCategoryById (req, res) {
    const ID = req.params.ID;
   try {
            
        } catch (error) {
            res.status(500).send({msg:'server error'})
        }
};

// CREATE
async function createCategory (req, res) {
    try {
          const newCategory = await Category.create(req.body)
          if (newCategory) {res.status(200).send({msg:"category created succesfffully", success:true})
          }else{
            res.status(400).send({msg:"error while creatuinng categor", success:false})
        }
        } catch (error) {
            res.status(500).send({msg:'server error'})
        }
}

// UPDATE
function updateCategory (req, res) {
    const ID = req.params.ID;
   try {
            
        } catch (error) {
            res.status(500).send({msg:'server error'})
        }
}

// DELETE
function deleteCategory(req, res)  {
    const ID  = req.params.ID;
    try {
                 
        } catch (error) {
            res.status(500).send({msg:'server error'})
        }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}