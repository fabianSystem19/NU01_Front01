import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioEnvioComponent } from './pages/formulario-envio/formulario-envio.component';
import { ValidacionCarritoComponent } from './pages/validacion-carrito/validacion-carrito.component';
import { FormularioPagosComponent } from './pages/formulario-pagos/formulario-pagos.component';


const routes: Routes = [
  {path: "formulario-envio", component: FormularioEnvioComponent},
  {path: "carrito", component: ValidacionCarritoComponent},
  {path: "pago", component: FormularioPagosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
