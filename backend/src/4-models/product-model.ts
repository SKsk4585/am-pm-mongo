import mongoose from "mongoose";
import { CategoryModel } from "./category-model";
//1 interface
export interface IProductModel extends mongoose.Document{
    name:string
    prduction:Date
    expire:Date
    categoryId:mongoose.Schema.Types.ObjectId
    price:Number
}

//2 schema
export const ProductSchema = new mongoose.Schema<IProductModel>({
    name:{
        type:String,
        required:[true, "name is required"],
        minlength:[2, "name must be at least 2 tharacters"],
        maxlength:[15, "name must be only 15 tharacters"]
    }, 

    prduction:{
        type:Date,
        required:[true, "production date is required"],
    },
    
    expire:{
        type:Date,
        required:[true, "expire date is required"],
    },

    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
     
    },

    price:{
        type:Number,
        required: [true, "price is required"],
        nim:[0, "price can't be negative"],
        max:[2000, "price can't be more than 2000$"],

     
    }
},{
    versionKey:false,
    toJSON:{virtuals:true},
    id:false
})

ProductSchema.virtual("categories", {
    ref: CategoryModel,
    localField:"categoryId",
    foreignField: "_id",
    justOne: true

})

//3 model
 export const ProductModel = mongoose.model<IProductModel>("ProductModel", ProductSchema, "products")