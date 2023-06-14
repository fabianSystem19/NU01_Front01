import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ReactiveFormsModule } from '@angular/forms';


//Componentes principales/estándar
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


//Componentes del carrito
import { ValidacionCarritoComponent } from './pages/validacion-carrito/validacion-carrito.component';
import { FormularioPagosComponent } from './pages/formulario-pagos/formulario-pagos.component';
import { FormularioEnvioComponent } from './pages/formulario-envio/formulario-envio.component';



@NgModule({
  declarations: [
    AppComponent,

//Componentes principales/estándar

    HeaderComponent,
    FooterComponent,

//Componentes del carrito

    ValidacionCarritoComponent,
    FormularioPagosComponent,
    FormularioEnvioComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
