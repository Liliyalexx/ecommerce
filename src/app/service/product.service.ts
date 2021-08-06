
 import  { HttpClient }  from  '@angular/common/http';
 import  { Injectable }  from  '@angular/core';
 import  { Observable }  from  'rxjs';
 import  { Product }  from  '../modal/Modal';

 @Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProductToCategory(product: Product, idCategory: number): Observable<Product> {
    return this.http.post<Product>(`http://localhost:8282/api/addProductToCategory/${idCategory}`, product);
  }

  editProduct(product: Product, id: number): Observable<Product> {
    return this.http.post<Product>(`http://localhost:8282/api/editProduct/${id}`, product);
  }

  findProductById(id: number): Observable<Product> {
     return this.http.get<Product>(`http://localhost:8282/api/findProductById/${id}`);
   }

  deleteProduct(id: number): Observable<Product> {
     return this.http.delete<Product>(`http://localhost:8282/api/deleteProduct/${id}`);
   }

   findProductsForCategory(idCategory: number): Observable<Product[]> {
     return this.http.get<Product[]>(`http://localhost:8282/api/findProductsForCategory/${idCategory}`);
   }

   findAllProducts(): Observable<Product[]> {
     return this.http.get<Product[]>(`http://localhost:8282/api/findAllProducts/`);
   }

   findByName(name: string): Observable<Product> {
     return this.http.get<Product>(`http://localhost:8282/api/findByName/${name}`);
   }

  deleteProductFromTag(idProduct: number, idTag: number): Observable<Product> {
     return this.http.delete<Product>(`http://localhost:8282/api/deleteProductFromTag/${idProduct}/${idTag}`);
   }

}
