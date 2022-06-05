import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(list: any[], args?: string): any[] {
    if (!args) return list;
    return list.filter((manga) => {
      if (manga.Datos.titulo)
        return manga.Datos.titulo.toLowerCase().includes(args.toLowerCase());
    });
  }
}
