import { Injectable } from '@angular/core';
import { CatygoryModel, productModel } from '../models/product-model';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../utils/config';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  public async getAllProduct(): Promise<productModel[]>{
    const ovservable = this.http.get<productModel[]>(appConfig.productsUrl)
    const products = await firstValueFrom(ovservable)
    return products
  }

  public async getAllCategories(): Promise<CatygoryModel[]>{
    const ovservable = this.http.get<CatygoryModel[]>(appConfig.categotysUrl)
    const categories = await firstValueFrom(ovservable)
    return categories
  }


  public async getProductsByCaterory(categoryId: string): Promise<productModel[]>{
    const ovservable = this.http.get<productModel[]>(appConfig.productsUrl + categoryId)
    const products = await firstValueFrom(ovservable)
    return products
  }
  
  public async addNewProduct(product: productModel): Promise <productModel>{
    const ovservable = this.http.post<productModel>(appConfig.productsUrl, product)
    const newProduct = firstValueFrom(ovservable)
    return newProduct
  }

  public async deleteProduct(_id: string): Promise <void> {
    const ovservable = this.http.delete<void>(appConfig.productsUrl + _id)
    await firstValueFrom(ovservable)
  } 
}

