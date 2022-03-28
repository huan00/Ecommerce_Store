const {Brand} = require('../models')

const getBrands = async (req, res)=> {
  try{
    const brands = await Brand.find()
    res.json(brands)
  }catch(e){
    return res.status(500).json({e.message})
  }

}

module.exports = {
  getBrands
}