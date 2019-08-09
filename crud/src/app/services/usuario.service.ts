import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from '../interface/user';
import { Url } from 'url';


@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  private api : any = `https://reqres.in/api/users`;
  constructor(private http: HttpClient) {}

   getUsers(){
    return this.http.get(this.api)
  } 
  createUser(user: User) {
    return this.http.post(this.api, user)
  }
  updateUser(user ){
    return this.http.put(`${this.api/user.id}`, user)
  }

}
