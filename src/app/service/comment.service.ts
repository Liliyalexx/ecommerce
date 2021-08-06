
 import  { HttpClient }  from  '@angular/common/http';
 import  { Injectable }  from  '@angular/core';
 import  { Observable }  from  'rxjs';
 import  { Comment }  from  '../modal/Modal';

 @Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  addCommentToProduct(comment: Comment, idProduct: number): Observable<Comment> {
    return this.http.post<Comment>(`http://localhost:8282/api/addCommentToProduct/${idProduct}`, comment);
  }

  editComment(comment: Comment, id: number): Observable<Comment> {
    return this.http.post<Comment>(`http://localhost:8282/api/editComment/${id}`, comment);
  }

  findCommentById(id: number): Observable<Comment> {
     return this.http.get<Comment>(`http://localhost:8282/api/findCommentById/${id}`);
   }

  deleteComment(id: number): Observable<Comment> {
     return this.http.delete<Comment>(`http://localhost:8282/api/deleteComment/${id}`);
   }

   findCommentsForProduct(idProduct: number): Observable<Comment[]> {
     return this.http.get<Comment[]>(`http://localhost:8282/api/findCommentsForProduct/${idProduct}`);
   }

   findAllComments(): Observable<Comment[]> {
     return this.http.get<Comment[]>(`http://localhost:8282/api/findAllComments/`);
   }

}
