import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interface/user';

@Component({
  selector: 'app-usuario-actualizado',
  templateUrl: './usuario-actualizado.component.html',
  styleUrls: ['./usuario-actualizado.component.css']
})
export class UsuarioActualizadoComponent implements OnInit {
  
  @Input() user:User; 

  constructor() { }

  ngOnInit() {
  }

}
