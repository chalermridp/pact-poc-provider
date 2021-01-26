import { Injectable } from '@nestjs/common';
import { ProductsModel } from './products.model';

@Injectable()
export class ProductsService {
  private allProducts: ProductsModel[] = [
    new ProductsModel('1', '111', 'water', 30, true),
    new ProductsModel('2', '222', 'shoes', 40, false),
  ];

  getAll(): ProductsModel[] {
    return this.allProducts;
  }

  getById(id: string): ProductsModel {
    const product = this.allProducts.find((value) => value.id === id);
    if (!product) {
      throw new Error('product not found');
    }
    return product;
  }
}
