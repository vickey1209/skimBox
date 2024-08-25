const { query } = require("express");
const Product = require("../models/productModel")

exports.createProduct = async (productData)=>{
    const product = new Product (productData);

    return await product.save()

}

exports.getAllProducts = async (query)=>{
    const {sort, orderBy ,page =1 ,  limit=3} = query;
    const filter = company ? {company} :{}
    const sortOrder = sort ? [sort] : orderBy === Desc ? -1 : 1 ;

    const products = await Product.find(filter)
                                  .sort(sortOrder)
                                  .limit(parseInt(limit))


 return product


}
// updating, and deleting
exports.update = async(id , productData)=>{
   return await Product.findByIdAndUpdate(id, productData, {new: true} );
}

exports.delete = async(id)=>{
   return await Product.findByIdAndDelete(id);
}