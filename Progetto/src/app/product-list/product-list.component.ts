import { Component } from '@angular/core';
import { Product } from '../product.model'; // Importiamo l'interfaccia per il tipo Product

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // Array di prodotti iniziali
  products: Product[] = [
    { name: 'Prodotto 1', price: 100, description: 'Descrizione prodotto 1' },
    { name: 'Prodotto 2', price: 200, description: 'Descrizione prodotto 2' },
    { name: 'Prodotto 3', price: 150, description: 'Descrizione prodotto 3' },
    { name: 'Prodotto 4', price: 50, description: 'Descrizione prodotto 4' },
    { name: 'Prodotto 5', price: 300, description: 'Descrizione prodotto 5' }
  ];

  selectedProduct: Product | null = null;

  // Funzione per selezionare un prodotto
  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  // Funzione per eliminare un prodotto dalla lista
  deleteProduct(index: number): void {
    this.products.splice(index, 1);
  }
}
