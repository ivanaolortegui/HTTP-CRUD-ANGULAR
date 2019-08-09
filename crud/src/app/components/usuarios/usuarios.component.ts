import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
users : any;
  constructor(private usuarioService : UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsers().subscribe(resp => {
      this.users=resp['data'];
    console.log(resp);
    }
      )
  }

}
