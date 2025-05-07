import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'Laptop', price: 1200, description: 'Un potente laptop per sviluppatori.' },
    { name: 'Smartphone', price: 800, description: 'Uno smartphone di ultima generazione.' },
    { name: 'Auricolari', price: 100, description: 'Auricolari bluetooth con riduzione del rumore.' },
    { name: 'Monitor', price: 300, description: 'Monitor 4K da 27 pollici.' },
    { name: 'Mouse', price: 50, description: 'Mouse wireless ergonomico.' }
  ];

  selectedProduct?: Product;

  newProduct: Product = { name: '', price: 0, description: '' };

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  deleteProduct(index: number) {
    const deletedProduct = this.products[index];
    this.products.splice(index, 1);
    if (this.selectedProduct === deletedProduct) {
      this.selectedProduct = undefined;
    }
  }
  addProduct() {
    if (
      this.newProduct.name.trim() &&
      this.newProduct.description.trim() &&
      this.newProduct.price > 0
    ) {
      this.products.push({ ...this.newProduct });
      this.newProduct = { name: '', price: 0, description: '' };
    }
  }
}