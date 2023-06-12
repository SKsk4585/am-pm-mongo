import express, { NextFunction, Request, Response, Router, request } from "express"
import productsLogic from "../5-logics/products-logic"
import { ProductModel } from "../4-models/product-model"

const router = express.Router()

//get all product

router.get("/product", async (request:Request, respons:Response, next:NextFunction) =>{
    try {
        const product = await productsLogic.getAllProduct()
        respons.json(product)
        
    } 
    catch (err) {
        next(err)        
    }
})

//get-all-category
router.get("/category", async (request:Request, respons:Response, next:NextFunction) =>{
    try {
        const category = await productsLogic.getAllCategoty()
        respons.json(category)
        
    } 
    catch (err) {
        next(err)        
    }
})
//add product
router.post("/product", async (request:Request, respons:Response, next:NextFunction) =>{
    try {
        const product = new ProductModel(request.body)
        const newProduct = await productsLogic.addProduct(product)
        respons.json(newProduct)
        
    } 
    catch (err) {
        next(err)        
    }
})

//get product by category
router.get("/products/:categoryId", async (request:Request, respons:Response, next:NextFunction) =>{
    try {
        const categoryId = request.params.categoryId
        const product = await productsLogic.getProductByCategory(categoryId)
        respons.json(product)
        
    } 
    catch (err) {
        next(err)        
    }
})




export default router