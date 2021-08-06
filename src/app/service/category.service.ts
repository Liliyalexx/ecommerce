
 import  { HttpClient }  from  '@angular/common/http';
 import  { Injectable }  from  '@angular/core';
 import  { Observable }  from  'rxjs';
 import  { Category }  from  '../modal/Modal';

 @Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategoryToUser(category: Category, idUser: number): Observable<Category> {
    return this.http.post<any>(`http://localhost:8282/api/addCategoryToUser/${idUser}`, category);
  }

  editCategory(category: Category, id: number): Observable<Category> {
    return this.http.post<Category>(`http://localhost:8282/api/editCategory/${id}`, category);
  }

  findCategoryById(id: number): Observable<Category> {
     return this.http.get<Category>(`http://localhost:8282/api/findCategoryById/${id}`);
   }

  deleteCategory(id: number): Observable<Category> {
     return this.http.delete<Category>(`http://localhost:8282/api/deleteCategory/${id}`);
   }

   findCategoriesForUser(idUser: number): Observable<Category[]> {
     return this.http.get<Category[]>(`http://localhost:8282/api/findCategoriesForUser/${idUser}`);
   }

   findAllCategories(): Observable<Category[]> {
     return this.http.get<Category[]>(`http://localhost:8282/api/findAllCategories/`);
   }

}
