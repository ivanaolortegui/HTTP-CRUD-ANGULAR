import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from '../interface/user';


@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  private api = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}

  createUser(user: User) {
    return this.http.post(this.api, user)
  }

}
