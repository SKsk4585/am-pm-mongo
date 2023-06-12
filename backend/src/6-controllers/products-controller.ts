import express, { NextFunction, Request, Response, Router, request } from "express"
import productsLogic from "../5-logics/products-logic"

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

export default router