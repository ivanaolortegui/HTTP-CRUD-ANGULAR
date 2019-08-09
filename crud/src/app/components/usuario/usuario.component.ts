import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { UsuarioService } from '../../services/usuario.service';
import { User } from '../../interface/user';


@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.css"]
})
export class UsuarioComponent implements OnInit {
  form: FormGroup;
  user: User;
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private userService: UsuarioService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
   
      this.userService.getUser(id).subscribe(resp => this.user =resp['data']);
      console.log(id);
  
     
  
    
    this.form = new FormGroup({
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidopat: new FormControl("", Validators.required),
      apellidomat: new FormControl("", Validators.required),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ]),
      fchnac: new FormControl("", Validators.required),
      fchingreso: new FormControl("", Validators.required)
    });
  }

}
