import { CategoryModel, ICategotyModel } from "../4-models/category-model";
import { IProductModel, ProductModel } from "../4-models/product-model";

function getAllProduct():Promise<IProductModel[]>{
    return ProductModel.find().exec()
}
function getAllCategoty():Promise<ICategotyModel[]>{
    return CategoryModel.find().exec()
}

// function addProduct

export default{
    getAllProduct,
    getAllCategoty
}