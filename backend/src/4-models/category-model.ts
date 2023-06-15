import mongoose from "mongoose";

//1 interface
export interface ICategotyModel extends mongoose.Document{
    categoryName:string
}

//2 schema
export const CategorySchema = new mongoose.Schema<ICategotyModel>({
    categoryName:{
        type:String,
        required:[true, "name is required"],
        minlength:[2, "name must be at least 2 tharacters"],
        maxlength:[15, "name must be only 15 tharacters"]
    }
})

//3 model
 export const CategoryModel = mongoose.model<ICategotyModel>("CategoryModel", CategorySchema, "categories")