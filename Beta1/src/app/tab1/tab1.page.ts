import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  apellido=""
  nombre=""
  email=""
  contrasenia=""
  telefono=""


  constructor( private router:Router ) {}

  enviar(){
    console.log(this.apellido)
    console.log(this.nombre)
    console.log(this.email)
    console.log(this.contrasenia)
    console.log(this.telefono)
    
    this.apellido=""
    this.nombre=""
    this.email=""
    this.contrasenia=""
    this.telefono=""
  }

  borrar(){
    this.apellido=""
    this.nombre=""
    this.email=""
    this.contrasenia=""
    this.telefono=""
  }

  info(){
    this.router.navigateByUrl("info")
  }

}