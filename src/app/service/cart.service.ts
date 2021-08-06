
 import  { HttpClient }  from  '@angular/common/http';
 import  { Injectable }  from  '@angular/core';
 import  { Observable }  from  'rxjs';
 import  { Cart }  from  '../modal/Modal';

const NAME_KEY = 'NAME';

 @Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addCartToUser(cart: Cart, idUser: number): Observable<Cart> {
    return this.http.post<any>(`http://localhost:8282/api/addCartToUser/${idUser}`, cart);
  }
  removeFromCart(idCart: number, idUser: number): Observable<Cart> {
     return this.http.delete<Cart>(`http://localhost:8282/api/removeFromCart/${idCart}/${idUser}`);
   }

  findCartById(id: number): Observable<Cart> {
     return this.http.get<Cart>(`http://localhost:8282/api/findCartById/${id}`);
   }

  deleteCart(id: number): Observable<Cart> {
     return this.http.delete<Cart>(`http://localhost:8282/api/deleteCart/${id}`);
   }

   findCartsForUser(idUser: number): Observable<Cart[]> {
     return this.http.get<Cart[]>(`http://localhost:8282/api/findCartsForUser/${idUser}`);
   }

  findByCartName(name: string): Observable<Cart> {
     return this.http.get<Cart>(`http://localhost:8282/api/findByCartName/${name}`);
   }

 saveCartName(name: string) {
    window.sessionStorage.removeItem( NAME_KEY);
    window.sessionStorage.setItem( NAME_KEY, name);
  }

  getCartName(name: string) {
   return sessionStorage.getItem( NAME_KEY);
  }

}
