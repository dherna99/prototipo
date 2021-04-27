import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Routes, Router,RouterModule,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filtro = "";
  num_cont=-1;
  selectedTipo="";
  Tipos = ["","Personal", "Trabajo"];
  usuario="";
  psw="";
  usuario_r="";
  psw_r="";
  correo_r="";
  reg=0;
  constructor(private router: Router, private route: ActivatedRoute,public global:GlobalService) { }

  ngOnInit(): void {
    this.num_cont = this.global.datos_globales.length;
    if(this.global.sesion==-1){
      this.usuario="";
      this.psw="";
      this.usuario_r="";
      this.psw_r="";
      this.correo_r="";
      this.reg=0;
    }
    else{
      this.reg=2;
    }
    
  
  }



  public showHamb(){

    if(document.getElementById("copia")!.style.display=="none"||document.getElementById("copia")!.style.display==""){
      document.getElementById("copia")!.style.display="flex";
    }

    else{
      document.getElementById("copia")!.style.display="none";
    }
  }

  

  public inicioSesion(){
      for(let i=0;i<this.global.usuarios.length;i++){
        if(this.usuario==this.global.usuarios[i].usuario && this.psw==this.global.usuarios[i].contr){
          this.global.sesion=this.global.usuarios[i].id;
          this.reg=2;
        }
      }

  }

  public show_registro(){
    this.reg=1;

  }

  public registro(){
    this.global.usuarios.push(new Usuario(this.global.usuarios.length,this.usuario_r,this.correo_r,this.psw_r,[]));
    this.reg=0;
  }

  public cancel_registro(){

    this.reg=0;
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
    this.usuario="";
    this.psw="";
    this.usuario_r="";
    this.psw_r="";
    this.correo_r="";
    this.reg=0;
    this.router.navigate(['/home']);
  }
   
  
}
class Usuario{
  id: number;
  usuario:string;
  email:string;
  contr:string;
  reservas:Array<Reservas>;
  constructor(id:number,usuario: string, email: string, contr: string,reservas:Array<Reservas>){
    this.id = id;
    this.usuario=usuario;
    this.contr=contr;
    this.email=email;
    this.reservas=reservas;
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
