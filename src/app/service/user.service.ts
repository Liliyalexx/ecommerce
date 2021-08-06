
 import  { HttpClient }  from  '@angular/common/http';
 import  { Injectable }  from  '@angular/core';
 import  { Observable }  from  'rxjs';
 import  { User }  from  '../modal/Modal';

const USERNAME_KEY = 'USERNAME';

 @Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:8282/api/addUser`, user);
  }

  editUser(user: User, idUser: number): Observable<User> {
    return this.http.post<User>(`http://localhost:8282/api/editUser/${idUser}`, user);
  }

  findUserById(id: number): Observable<User> {
     return this.http.get<User>(`http://localhost:8282/api/findUserById/${id}`);
   }

  deleteUser(id: number): Observable<User> {
     return this.http.delete<User>(`http://localhost:8282/api/deleteUser/${id}`);
   }

   findAllUsers(): Observable<User[]> {
     return this.http.get<User[]>(`http://localhost:8282/api/findAllUsers/`);
   }

  findByUsername(name: string): Observable<User> {
     return this.http.get<User>(`http://localhost:8282/api/findByUsername/${name}`);
   }

 saveUsername(username: string) {
    window.sessionStorage.removeItem( USERNAME_KEY);
    window.sessionStorage.setItem( USERNAME_KEY, username);
  }

  getUsername() {
   window.sessionStorage.getItem(USERNAME_KEY);
  }
   signOut() {
    window.sessionStorage.clear();
  }

}
