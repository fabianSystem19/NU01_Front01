import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioEnvioComponent } from './formulario-envio/formulario-envio.component';
import { ValidacionCarritoComponent } from './pages/validacion-carrito/validacion-carrito.component';
import { FormularioPagosComponent } from './pages/formulario-pagos/formulario-pagos.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioEnvioComponent,
    ValidacionCarritoComponent,
    FormularioPagosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
