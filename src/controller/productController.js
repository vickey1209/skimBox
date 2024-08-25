const productService = require("../services/productservice")

exports.createProduct = async (req, res)=>{
    try {
        const product = await productService.createProduct(req.body)
        res.status(201), json(product);
    } catch (error) {
        res.status(400).json({error})
    }
}