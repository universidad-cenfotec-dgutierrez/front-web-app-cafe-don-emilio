export interface Tour {
    nombre: string;
    hora: string;
    duracionHoras: number;
    guia: string;
  }
  
  export interface Entrada {
    tipo: string;
    descripcion: string;
    precio: number;
    cantidad: number;
  }
  
  export interface Servicio {
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number;
  }
  
  export interface Reservation {
    fecha: string; // Formato ISO 8601
    idioma: string;
    correoUsuario: string;
    tour: Tour;
    entradas: Entrada[]; // Cambiado a un array de Entrada
    servicios: Servicio[];
  }
  