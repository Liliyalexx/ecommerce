
 import  { HttpClient }  from  '@angular/common/http';
 import  { Injectable }  from  '@angular/core';
 import  { Observable }  from  'rxjs';
 import  { Product, Tag }  from  '../modal/Modal';

 @Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  addTagToProduct(idProduct: number, idTag: number): Observable<Tag> {
    return this.http.post<Tag>(`http://localhost:8282/api/addTagToProduct/${idProduct}/${idTag}`, idTag);
  }

  editTag(tag: Tag, id: number): Observable<Tag> {
    return this.http.put<Tag>(`http://localhost:8282/api/editTag/${id}`, tag);
  }

 addTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(`http://localhost:8282/api/addTag/`, tag);
  }

  findTagById(id: number): Observable<Tag> {
     return this.http.get<Tag>(`http://localhost:8282/api/findTagById/${id}`);
   }

  deleteTag(id: number): Observable<Tag> {
     return this.http.delete<Tag>(`http://localhost:8282/api/deleteTag/${id}`);
   }

   findTagsForProduct(idProduct: number): Observable<Tag[]> {
     return this.http.get<Tag[]>(`http://localhost:8282/api/findTagsForProduct/${idProduct}`);
   }

   findAllTags(): Observable<any[]> {
     return this.http.get<any[]>(`http://localhost:8282/api/findAllTags/`);
   }

   findByName(name: string): Observable<Product> {
     return this.http.get<Product>(`http://localhost:8282/api/findByName/${name}`);
   }

  deleteProductFromTag(idProduct: number, idTag: number): Observable<Product> {
     return this.http.delete<Product>(`http://localhost:8282/api/deleteProductFromTag/${idProduct}/${idTag}`);
   }

  findAllTagByName(name: number): Observable<Tag> {
     return this.http.get<Tag>(`http://localhost:8282/api/findAllTagByName/${name}`);
   }

  findProductsForTag(idTag: number): Observable<Product[]> {
     return this.http.get<Product[]>(`http://localhost:8282/api/findProductsForTag/${idTag}`);
   }

}
