import { CategoryModel, ICategotyModel } from "../4-models/category-model";
import { ResouceNotFoundErrorModel, ValidateErrorModel } from "../4-models/errorModel";
import { IProductModel, ProductModel } from "../4-models/product-model";

function getAllProduct():Promise<IProductModel[]>{
    return ProductModel.find().exec()
}
function getAllCategoty():Promise<ICategotyModel[]>{
    return CategoryModel.find().exec()
}

function addProduct(product:IProductModel): Promise<IProductModel>{
    const errors = product.validateSync()
    if (errors) throw new ValidateErrorModel (errors.message)
    return product.save()
}

function getProductByCategory(categoryId:string): Promise<IProductModel[]>{
    return ProductModel.find({ categoryId }).populate("categories").exec();
}

async function deleteProduct(_id: string): Promise<void> {
    const deleteProduct = await ProductModel.findByIdAndDelete(_id)
    if (!deleteProduct) throw new ResouceNotFoundErrorModel(_id)
}

export default{
    getAllProduct,
    getAllCategoty,
    addProduct,
    getProductByCategory,
    deleteProduct
}