import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-envio',
  templateUrl: './formulario-envio.component.html',
  styleUrls: ['./formulario-envio.component.css']
})
export class FormularioEnvioComponent implements OnInit {
  
  formulario: FormGroup = new FormGroup({});
  
  ngOnInit() {
    this.formulario = new FormGroup({
      correo: new FormControl(''),
      correos_exclusivos: new FormControl(''),
      datos: new FormGroup({
        nombre: new FormControl(''),
        apellido: new FormControl(''),
        pais: new FormControl(''),
        departamento: new FormControl(''),
        ciudad: new FormControl(''),
        direccion: new FormControl('')
      }),
      facturacion: new FormGroup({
        cedula: new FormControl(''),
        telefono: new FormControl('')
      })
    });
  }
  
  enviarFormulario(): void {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
    }
  }
}
