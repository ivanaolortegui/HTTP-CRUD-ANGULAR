import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsuarioComponent } from "./components/usuario/usuario.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";

const routes: Routes = [
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'usuarios'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
