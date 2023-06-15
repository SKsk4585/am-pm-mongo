import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatygoryModel, productModel } from 'src/app/models/product-model';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  public categorys: CatygoryModel[]
  public newProduct = new productModel()

  public constructor(private productService: ProductsService, private router:Router){}
  async ngOnInit(): Promise<void> {
    try {
      this.categorys = await this.productService.getAllCategories()
      this.router.navigateByUrl("/products")
      
    } 
    catch (err) {
      console.log (err)
      
    }    
  }

  public async send(): Promise<void>{
    try {
      await this.productService.addNewProduct(this.newProduct)
      alert ("The product was successfully added")
            
    } catch (err) {
      console.log (err)
    }
  }

}
