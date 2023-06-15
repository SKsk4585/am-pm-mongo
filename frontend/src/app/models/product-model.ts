export class productModel{
   public _id: string 
   public name: string
   public production: Date
   public expire: Date
   public categoryId: string
   public price: Number
   public categories: {
    _id: string,
    categoryname: string
   }
}

export class CatygoryModel{
   public _id: string 
   public categoryName:string
}