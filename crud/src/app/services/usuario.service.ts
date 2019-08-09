import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../interface/user";


@Injectable({
  providedIn: "root"
})
export class UsuarioService {

  private api: string= `https://reqres.in/api/users`;
  
  constructor(private http: HttpClient) {}
  //Agregando a la cabecera Content-Type
  headers = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  });

  // Obtener todos los usuarios
  getUsers() {
    return this.http.get(`${this.api}?page=1`);
  }
  //Obtener un usuario por id
  getUser(id: string) {
    return this.http.get(`${this.api}/${id}`);
  }
  // Crear nuevo usuario
  createUser(user: User) {
    const body = user
    return this.http.post(this.api, { headers: this.headers, ...body});
  }
  // Editar un usuario
  updateUser(user: User) {
    const body = user
    return this.http.put(`${this.api}/${user.id}`, {headers: this.headers, ...body});
  }
}
