export interface MangaData {
  ultimoVolumen?: number;
  ultimoCapitulo?: number;
  contentRating?: string;
  fechaCreacion?: string;
  fechaActualizacion?: string;
  titulo?: string;
  genero?: string;
  estado?: string;
  descripcion?: any;
}
export interface personal {
  artista?: string;
  autor?: string;
  imagen?: string;
}

export class TrueManga {
  id?: number;

  Datos: MangaData;

  Personal: personal;

  Tags?: Array<Object>;

  tipo?: string;

  apiID: string;

  // eslint-disable-next-line max-len
  constructor(
    Datos: MangaData,
    Personal: personal,
    tags: Array<Object>,
    tipo: string,
    ApiID: string,
    id?: number
  ) {
    this.id = id;
    this.Datos = Datos;
    this.Personal = Personal;
    this.Tags = tags;
    this.tipo = tipo;
    this.apiID = ApiID;
  }
}
