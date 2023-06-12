import { IProductModel, ProductModel } from "../4-models/product-model";

function getAllProduct():Promise<IProductModel[]>{
    return ProductModel.find().exec()
}

export default{
    getAllProduct
}