import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioEnvioComponent } from './pages/formulario-envio/formulario-envio.component';
import { ValidacionCarritoComponent } from './pages/validacion-carrito/validacion-carrito.component';

const routes: Routes = [
  {path: "formulario-envio", component: FormularioEnvioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
