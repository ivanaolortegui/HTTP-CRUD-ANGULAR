import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { UsuarioService } from '../../services/usuario.service';
import { apiUser } from '../../interface/api-user';


@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.css"]
})
export class UsuarioComponent implements OnInit {
 
  user: apiUser;

  constructor(private route: ActivatedRoute, private userService: UsuarioService) {}

  ngOnInit() {
    // Obteniendo id de la ruta
    const id = this.route.snapshot.paramMap.get("id");
  // Obteniendo detalles del usuario
    this.userService.getUser(id).subscribe(resp => this.user =resp['data']);       
  }
}
