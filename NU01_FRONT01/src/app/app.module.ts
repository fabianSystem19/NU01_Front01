import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioEnvioComponent } from './formulario-envio/formulario-envio.component';
import { ValidacionCarritoComponent } from './pages/validacion-carrito/validacion-carrito.component';
import { FormularioPagosComponent } from './pages/formulario-pagos/formulario-pagos.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioEnvioComponent,
    ValidacionCarritoComponent,
    FormularioPagosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
