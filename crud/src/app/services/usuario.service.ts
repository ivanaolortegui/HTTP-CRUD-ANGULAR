import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../interface/user";
import { Url } from "url";

@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  private api: any = `https://reqres.in/api/users`;
  constructor(private http: HttpClient) {}
  //Agregando a la cabecera Content-Type
  headers = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  });
  getUsers() {
    return this.http.get(`${this.api}?page=1`);
  }
  getUser(id:any) {
    return this.http.get(`${this.api/id}`);
  }
  createUser(user: User) {
    return this.http.post(this.api, {
                                      headers: this.headers,
                                      nombre: user.nombre,
                                      apellidopat: user.apellidopat,
                                      apellidomat: user.apellidomat,
                                      email: user.apellidomat,
                                      fchnac: user.apellidomat,
                                      fchingreso: user.apellidomat
    });
  }
  updateUser(user: { id: number }) {
    return this.http.put(`${this.api / user.id}`, user);
  }
}
