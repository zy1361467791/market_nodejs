const Product = require("../model/product");
const config = require("../config");

/**
 * 根据id判断商品是否存在
 * @param id
 * @returns {Promise<void>}
 */
async function isProductExist(id) {
    const result = Product.findOne({_id:id});
    if (!result){
        throw new Error("商品不存在")
    }
}

/**
 * 增加一个商品
 * @param product
 * @returns {Promise<*>}
 */
async function addProduct(product) {
    product.date=Date.now()
    return await Product.create(product)
}

/**
 * 根据id删除某个商品
 * @param id
 * @returns {Promise<void>}
 */
async function delProduct(id) {

}




module.exports={

}