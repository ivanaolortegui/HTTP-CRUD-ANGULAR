import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsuarioComponent } from "./components/usuario/usuario.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { AgregarComponent } from "./components/agregar/agregar.component";
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  {
    path: 'usuarios',
    children: [{ path: 'usuario', component: AgregarComponent }]
  },
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: 'editar/:id', component: EditarUsuarioComponent },
  { path: "**", pathMatch: 'full', redirectTo: 'usuarios' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
