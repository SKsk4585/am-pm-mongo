import { CategoryModel, ICategotyModel } from "../4-models/category-model";
import { ValidateErrorModel } from "../4-models/errorModel";
import { IProductModel, ProductModel } from "../4-models/product-model";

function getAllProduct():Promise<IProductModel[]>{
    return ProductModel.find().exec()
}
function getAllCategoty():Promise<ICategotyModel[]>{
    return CategoryModel.find().exec()
}

function addProduct(product:IProductModel):Promise<IProductModel>{
    const errors = product.validateSync()
    if (errors) throw new ValidateErrorModel (errors.message)
    return product.save()
}

export default{
    getAllProduct,
    getAllCategoty,
    addProduct
}