const Categories = require('../models/categoryModel')

// GET ALL
const getAllBrands = async(req, res) => {
        try {
            const brands = await Brands.findAll()
            res.status(200).send({brands:brands, succcess:true})
        } catch (error) {
            res.status(500).send({msg:'server error'})
        }


};

// GET BY ID
function getBrandById (req, res) {
    const ID = req.params.ID;
   try {
            
        } catch (error) {
            res.status(500).send({msg:'server error'})
        }
};

// CREATE
async function createBrand (req, res) {
    try {
          const newBrand = await Brand.create(req.body)
          if ( newBrand ) {res.status(200).send({msg:"brand created succesfffully", success:true})
          }else{
            res.status(400).send({msg:"error while creatuinng brand", success:false})
        }
        } catch (error) {
            res.status(500).send({msg:'server error'})
        }
}

// UPDATE
function updateBrand (req, res) {
    const ID = req.params.ID;
   try {
            
        } catch (error) {
            res.status(500).send({msg:'server error'})
        }
}

// DELETE
function deleteBrand(req, res)  {
    const ID  = req.params.ID;
    try {
            
        } catch (error) {
            res.status(500).send({msg:'server error'})
        }
}

module.exports = {
    getAllBrands,
    getBrandById,
    createBrand,
    updateBrand,
    deleteBrand
}