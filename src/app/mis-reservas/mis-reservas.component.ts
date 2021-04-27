import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Routes, Router,RouterModule,ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.scss']
})
export class MisReservasComponent implements OnInit {



  constructor(private router: Router, private route: ActivatedRoute,public global:GlobalService,private _snackBar: MatSnackBar) { }
  valoraciones:Array<number>=[];

  ngOnInit(): void {
    if(this.global.sesion==-1){
      this.router.navigate(['/home']); 
    }
  }


  public canc_reserva(j:number){

    var dia;
    var hora =this.global.usuarios[this.global.sesion].reservas[j].hora;

    for(var i=0; i<this.global.anuncios[this.global.usuarios[this.global.sesion].reservas[j].id].horarios.length;i++){
      if(this.global.anuncios[this.global.usuarios[this.global.sesion].reservas[j].id].horarios[i][0]==this.global.usuarios[this.global.sesion].reservas[j].dia){

        dia=this.global.anuncios[this.global.usuarios[this.global.sesion].reservas[j].id].horarios[i][0];
        this.global.anuncios[this.global.usuarios[this.global.sesion].reservas[j].id].horarios[i].splice(0,1);

        this.global.anuncios[this.global.usuarios[this.global.sesion].reservas[j].id].horarios[i].push(this.global.usuarios[this.global.sesion].reservas[j].hora);
        this.global.anuncios[this.global.usuarios[this.global.sesion].reservas[j].id].horarios[i].sort();
        this.global.anuncios[this.global.usuarios[this.global.sesion].reservas[j].id].horarios[i].unshift(dia);

      }
    }

    this.global.usuarios[this.global.sesion].reservas.splice(j,1);
    this._snackBar.open("La reserva del día: "+dia+ " a las " +hora+ " se ha cancelado con éxito" , "Cerrar");
    

  }

  public showHamb(){

    if(document.getElementById("copia")!.style.display=="none"||document.getElementById("copia")!.style.display==""){
      document.getElementById("copia")!.style.display="flex";
    }

    else{
      document.getElementById("copia")!.style.display="none";
    }
  }

  public valorar(x:number,j:number){
    if(this.valoraciones[j]<=5 && this.valoraciones[j]>=0){
      this._snackBar.open("Valoración guardada", "Cerrar");
      this.global.anuncios[x].valoraciones.push(this.valoraciones[j]);
    }
    else{
      this._snackBar.open("Inserte un número del 0 al 5", "Cerrar");
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

}
