import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class GlobalService {

  constructor() { }
  
  public sesion = -1; 

  public datos_globales: Array<Contacto>= [
    new Contacto(0, "Ricardo Martin Manso",  "609117799", "ricardma@inf.uc3m.es","Trabajo", "Si","","",""),
    new Contacto(1, "Manolo el del Bombo",  "609667799", "manolo@inf.uc3m.es","Personal", "No","","","")
   
  ];

  public usuarios: Array<Usuario>= [
    new Usuario(0, "user",  "user", "user", [new Reservas(0,"30/4","17:00", -1)])
   
  ];

  public anuncios: Array<Anuncio>= [
    new Anuncio(0, "../assets/anuncio1.jpg","Ocio y Deporte Canal es una empresa participada por Canal de Isabel II, que ha sido creada para la gestión de las instalaciones deportivas sitas en el Tercer depósito de Canal de Isabel II." ,"Ocio y Deporte Canal",  "Pádel", "Av. de Filipinas, s/n, 28003 Madrid","Madrid", [["30/4","10:00","11:00","14:30","20:00"],["1/5","09:30","12:00","14:00","19:00"],["2/5","08:00","09:00","13:00","15:00"]],10,["Acceso minusvalidos","Vestuario","Pago en el sitio"],[],"918 58 78 00"),
    new Anuncio(1, "../assets/anuncio2.jpg","La Masó Sport Club, ofrecemos actividades deportivas, sociales y familiares en Mirasierra.\n Un club donde podrás disfrutar de nuestro restaurante, gimnasio, pistas de pádel, celebrando todo tipo de eventos… todo esto en un sitio exclusivo y único!", "La Masó Sports Club",  "Pádel", "Av. de Miraflores, s/n, 28035 Madrid","Madrid", [["30/4","10:00","11:00","14:30","22:00"],["1/5","09:30","12:00","14:00","19:00"],["2/5","08:00","09:00","16:30","18:00"]],12,["Vestuario","Pago en el sitio"],[],"918 58 78 00"),
    new Anuncio(2, "../assets/anuncio3.jpg","El Real Club de la Puerta de Hierro es un club deportivo y social de Madrid, cercano al monumento que le da nombre, fundado el 5 de mayo de 1895.1​ Fue el primer club de golf de la capital y los terrenos sobre los que se asienta fueron cedidos por Alfonso XIII, a principios del siglo XX. La admisión de nuevos socios, se encuentra en suspenso desde hace más de 30 años pudiendo tan solo incorporarse a él los hijos de los socios preexistentes. Este club es, desde hace más de un siglo, lugar de encuentro de la aristocracia y de las élites económicas tradicionales y mantiene correspondencia con otras entidades de similares características en diversos países. La presidencia de honor del club es ostentada por S.M. el Rey.\n    ", "Club Puerta de Hierro",  "Golf", "Av. de Miraflores, s/n, 28035 Madrid","Madrid" ,[["30/4","10:00","11:00","14:30","23:30"],["1/5","09:30","12:00","14:00","19:00"],["2/5","08:00","09:00","13:00","18:00"]],30,["Vestuario","Pago en el sitio"],[],"918 58 78 00"),
    new Anuncio(3, "../assets/anuncio4.jpg","Ciudad de la Raqueta es un moderno centro deportivo situado en Madrid, en el barrio de Montecarmelo. Inaugurado en noviembre de 2009, sus 39 pistas de tenis y pádel, de las cuales 20 son cubiertas, lo convierten en el complejo deportivo europeo con mayor número de pistas de este tipo. Posee un estadio central de tenis y otro de pádel destinados a las competiciones del más alto nivel.", "Ciudad de la Raqueta",  "Tenis", "Av. de Miraflores, s/n, 28035 Madrid","Madrid", [["30/4","10:00","11:00","14:30","17:15"],["1/5","09:30","12:00","14:00","19:00"],["2/5","08:00","15:00","16:30","18:00"]],5,["Cancelacion de reserva","Parking","Instalaciones cubiertas"],[],"918 58 78 00"),
    new Anuncio(4, "../assets/anuncio5.jpg","La Ciudad Deportiva Club Santo Domingo nace en 1971, al amparo de la Parroquia de Santo Domingo de Ourense y bajo la iniciativa de su párroco D. Emilio Lorenzo, con la intención de ofertar a los miembros de la citada parroquia un lugar de ocio, deporte y actividades sociales.\nDificultades de pago y el costoso mantenimiento fueron las causas que animaron a un grupo de 500 socios iniciar el proceso de compra. El 29 de Diciembre de 1976 se constituyó una comisión que se hizo cargo durante los tres años siguientes de gestionar el pago de las deudas y la refundación del club, desligándolo tanto de la jerarquía eclesiástica como de la Delegación de Educación y Deportes. En el año 1980 se dio por liquidada la deuda, y desde entonces el Club Santo Domingo es una Asociación deportiva y recreativa propiedad de sus socios.", "Club Santo Domingo",  "Natación", "A Derrasa s/n, 32792 O Pereiro de Aguiar, Province of Ourense","Ourense", [["30/4","10:00","11:00","14:30","20:15"],["1/5","09:30","12:00","14:00","19:00"],["2/5","13:00","15:00","16:30","18:00"]],2,["Cancelación de reserva","Parking","Instalaciones cubiertas","Acceso minusválidos"],[],"918 58 78 00")

   
  ];
    
}


class Anuncio{
  id:number;
  foto:string;
  descripcion:string;
  nombre:string;
  deporte:string;
  direccion:string;
  ciudad:string;
  horarios:Array<Array<string>>;
  precio:number;
  etiquetas:Array<string>;
  valoraciones:Array<number>;
  telefono:string;
  constructor(id:number,foto:string,descrpcion:string,nombre: string, deporte: string,direccion: string,ciudad:string,horarios:Array<Array<string>>,precio:number,etiquetas:Array<string>,valoraciones:Array<number>,telefono:string){
    this.id = id;
    this.nombre=nombre;
    this.deporte=deporte;
    this.direccion=direccion;
    this.precio=precio;
    this.horarios=horarios;
    this.etiquetas=etiquetas
    this.valoraciones=valoraciones;
    this.foto=foto;
    this.descripcion=descrpcion;
    this.ciudad=ciudad;
    this.telefono=telefono;

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









class Contacto{
  id: number;
  nombre:string;
  telefono: string;
  email:string;
  tipo:string;
  habitual: string;
  direccion: string;
  empresa: string;
  cargo: string;
  constructor(id:number,nombre: string, telefono: string, email: string, tipo: string, habitual: string,direccion: string,empresa: string,cargo: string){
    this.id = id;
    this.nombre=nombre;
    this.telefono=telefono;
    this.email=email;
    this.tipo=tipo;
    this.habitual=habitual;
    this.direccion=direccion;
    this.empresa=empresa;
    this.cargo=cargo;


  }
    
}
