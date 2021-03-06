import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";


import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  form: FormGroup;
  userCreated: any;
  
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    
    this.form = new FormGroup({
      nombre: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidopat: new FormControl('', Validators.required),
      apellidomat: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ]),
      fchnac: new FormControl('', Validators.required),
      fchingreso: new FormControl('', Validators.required)
    });
  }

  useInputValues() {
    if (this.form.valid) {
      return this.usuarioService.createUser(this.form.value).subscribe(arg => {
        this.userCreated = arg;
        this.form.reset();
      });
    }
  }
}
