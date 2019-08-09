import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { UsuarioService } from "../../services/usuario.service";
import { apiUser } from "../../interface/api-user";


@Component({
  selector: "app-editar-usuario",
  templateUrl: "./editar-usuario.component.html",
  styleUrls: ["./editar-usuario.component.css"]
})
export class EditarUsuarioComponent implements OnInit {

  form: FormGroup;
  user: apiUser;
  userCreated: Object;
  

  constructor( private usuarioService: UsuarioService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.usuarioService.getUser(id).subscribe(resp => {
      this.user = {...resp['data']};
      //Validando formulario reactivo
      this.form = new FormGroup({
        id:new FormControl(this.user.id, Validators.required),
        nombre: new FormControl(this.user.first_name, [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellidopat: new FormControl(this.user.last_name, Validators.required),
        apellidomat: new FormControl('', Validators.required),
        email: new FormControl(this.user.email, [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
        ]),
        fchnac: new FormControl("", Validators.required),
        fchingreso: new FormControl("", Validators.required)
      });
    });
  }

  useInputValues() {
    //Enviando los valores de los inputs del formulario
    if (this.form.valid) {
      return this.usuarioService.updateUser(this.form.value).subscribe(arg => {
        this.userCreated = arg;
        this.form.reset();
      });
    }
  }
}
