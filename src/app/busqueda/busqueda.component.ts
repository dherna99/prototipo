import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Routes, Router,RouterModule,ActivatedRoute } from '@angular/router';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Madrid', 'Malaga', 'Ourense'];
  filteredOptions: Observable<string[]> | undefined;
  deportes=["Golf","Natación","Pádel","Tenis"]

  ciudad="";  
  deporte=""
  dia:Date= new Date("");
  hora="";
  busqueda_a=0;
  acceso_minus=false;
  cancel_res=false;
  vestuario=false;
  parking=false;
  pago_sitio=false;
  inst_cub=false;
  claves="";

  filtro=true;
  ciudad_b="";  
  deporte_b=""
  dia_b:Date= new Date("");
  hora_b="";
  busqueda_a_b=0;
  acceso_minus_b=false;
  cancel_res_b=false;
  vestuario_b=false;
  parking_b=false;
  pago_sitio_b=false;
  inst_cub_b=false;
  claves_b="";


  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  

  



  constructor(private router: Router, private route: ActivatedRoute,public global:GlobalService) { }



  ngOnInit(): void {
    if(this.global.sesion==-1){
      this.router.navigate(['/home']);
    }
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }



  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  public showHamb(){

    if(document.getElementById("copia")!.style.display=="none"||document.getElementById("copia")!.style.display==""){
      document.getElementById("copia")!.style.display="flex";
    }

    else{
      document.getElementById("copia")!.style.display="none";
    }
  }


  public home(){
    this.router.navigate(['/home']);
    
  }
  public busqueda_link(){
    this.router.navigate(['/busqueda']);
  }
  public mis_reservas_link(){
    this.router.navigate(['/mis-reservas']);
  }

  public cerrar_sesion_link(){
    this.global.sesion=-1;
    this.router.navigate(['/home']);
  }

  
  public busqueda_avanzada(){
    if(this.busqueda_a==0){
      this.busqueda_a=1;
    }
    else if(this.busqueda_a==1){
      this.busqueda_a=0;
    }
  }

  public buscar(){
    this.ciudad_b=this.ciudad;  
    this.deporte_b=this.deporte;
    this.dia_b=this.dia;
    this.hora_b=this.hora;
    this.busqueda_a_b=this.busqueda_a;
    this.acceso_minus_b=this.acceso_minus;
    this.cancel_res_b=this.cancel_res;
    this.vestuario_b=this.vestuario;
    this.parking_b=this.parking;
    this.pago_sitio_b=this.pago_sitio;
    this.inst_cub_b=this.inst_cub;
    this.claves_b=this.claves;
  }

  public busqueda(i:number){
    var buscar = true;
    if(this.ciudad_b !=this.global.anuncios[i].ciudad && this.ciudad_b!=""){
      buscar=false;
    }
    var dia_mes = this.dia_b.getDate()+"/"+(Number(this.dia_b.getMonth())+1);
    var comp=false;
    for(var j=0;j<this.global.anuncios[i].horarios.length;j++){
      if(dia_mes==this.global.anuncios[i].horarios[j][0]){
        comp=true;
      }
    }
    if(comp==false&&dia_mes!="NaN/NaN") buscar=false;

    if(this.deporte_b !=this.global.anuncios[i].deporte && this.deporte_b!=""){
      buscar=false;
    }
    comp=false;
    for(var j=0;j<this.global.anuncios[i].horarios.length;j++){
      for(var z=0;z<this.global.anuncios[i].horarios[j].length;z++)
        if(this.hora_b==this.global.anuncios[i].horarios[j][z]){
          comp=true;
        }
    }
    if(comp==false&&this.hora_b!="") buscar=false;
    
    if(this.acceso_minus_b==true && !this.global.anuncios[i].etiquetas.includes("Acceso minusválidos")){
      buscar=false;
    }
    if(this.pago_sitio_b==true && !this.global.anuncios[i].etiquetas.includes("Pago en el sitio")){
      buscar=false;
    }
    if(this.parking_b==true && !this.global.anuncios[i].etiquetas.includes("Parking")){
      buscar=false;
    }
    if(this.vestuario_b==true && !this.global.anuncios[i].etiquetas.includes("Vestuario")){
      buscar=false;
    }
    if(this.pago_sitio_b==true && !this.global.anuncios[i].etiquetas.includes("Pago en el sitio")){
      buscar=false;
    }
    if(this.inst_cub_b==true && !this.global.anuncios[i].etiquetas.includes("Instalaciones cubiertas")){
      buscar=false;
    }
    if(this.claves_b!=""&&!this.global.anuncios[i].descripcion.toLowerCase().includes(this.claves_b)){
      buscar=false;
    }


    return buscar;
  }

  public media(x:number){
    var media=0;
    if(this.global.anuncios[x].valoraciones.length==0){
      return "Sin valoraciones"
    }
    for(var i=0;i<this.global.anuncios[x].valoraciones.length;i++){
      media=media+(Number(this.global.anuncios[x].valoraciones[i]));
    }

    return media/this.global.anuncios[x].valoraciones.length;
  }


  public anuncio_link(i:number){
    this.router.navigate(['/anuncio',i]);
  }



}
