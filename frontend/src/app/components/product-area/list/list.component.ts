import { Component, OnInit } from '@angular/core';
import { CatygoryModel, productModel } from 'src/app/models/product-model';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  public products: productModel[]
  public categories: CatygoryModel[]
  public categoryId: string
  public constructor(private productService: ProductsService) {}

  async ngOnInit(): Promise <void>{
    try {
      this.products = await this.productService.getAllProduct() 
      this.categories = await this.productService.getAllCategories()     
    } 
    catch (err) {
      console.log(err)      
    }    
  }

public async getProductByCategory(): Promise<void>{
  try {
    if(!this.categoryId) this.products = await this.productService.getAllProduct()
    this.products = await this.productService.getProductsByCaterory(this.categoryId)
  } 
  catch (error) {
    
  }
}

public async deleteProduct(_id:string): Promise<void>{
  try {
    if(!window.confirm("are yuo sure")) return
    await this.productService.deleteProduct(_id)
    this.products = this.products.filter(p=>p._id !== _id)
  } 
  catch (error) {
    
  }
}



}
