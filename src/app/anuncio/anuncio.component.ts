import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Routes, Router,RouterModule,ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.scss']
})
export class AnuncioComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,public global:GlobalService,private _snackBar: MatSnackBar) { }
  dia=""
  hora=""
  id=-1;
  ngOnInit(): void {
    if(this.global.sesion==-1){
      this.router.navigate(['/home']);
    }
    this.route.paramMap.subscribe(params=>{
      this.id=Number(params.get('id'));
     
      });



      
  }


public seleccion_hora(i:number,j:number){
  for(var x=0;x<document.getElementsByClassName("hora").length;x++){
    document.getElementsByClassName("hora")[x].setAttribute("class","mat-focus-indicator hora mat-raised-button mat-button-base");
  }

  var cont=0;
  for(var z=0;z<i;z++){
    for(var w=1;w<this.global.anuncios[this.id].horarios[z].length;w++){
      cont=cont+1;
    }
  }
  this.dia=this.global.anuncios[this.id].horarios[i][0];
  
  this.hora=document.getElementsByClassName("hora")[(cont+j-1)].getElementsByTagName("span")[0].innerHTML;
  

  document.getElementsByClassName("hora")[(cont+j-1)].setAttribute("class","mat-focus-indicator hora mat-raised-button mat-button-base mat-primary");

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
  public media(){
    var media=0;
    if(this.global.anuncios[this.id].valoraciones.length==0){
      return "Sin valoraciones"
    }
    for(var i=0;i<this.global.anuncios[this.id].valoraciones.length;i++){
      media=media+this.global.anuncios[this.id].valoraciones[i];
    }

    return media/this.global.anuncios[this.id].valoraciones.length;
  }

  public reserva(){
    
    if(this.dia =="" && this.hora==""){
      this._snackBar.open("Por favor selecciona una hora", "Cerrar");
      return;
    } 

    this._snackBar.open("Reserva completada con éxito", "Cerrar");
    this.global.usuarios[this.global.sesion].reservas.push(new Reservas(this.id,this.dia,this.hora,-1,));
    for(var i=0;i<this.global.anuncios[this.id].horarios.length;i++){
      if(this.dia==this.global.anuncios[this.id].horarios[i][0]){
        for(var j=0;j<this.global.anuncios[this.id].horarios[i].length;j++){
          if(this.hora==this.global.anuncios[this.id].horarios[i][j]){
            this.global.anuncios[this.id].horarios[i].splice(j,1);
          }
        }
      }
    }


  }

}
class Reservas{
  id:number;
  dia:string;
  hora:string;
  valoracion:number;
  constructor(id:number,dia: string, hora: string,valoracion:number){
    this.id = id;
    this.dia=dia;
    this.hora=hora;
    this.valoracion=valoracion;

  }
}