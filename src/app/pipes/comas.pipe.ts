import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comas'
})
export class ComasPipe implements PipeTransform {

  transform(cadena): any {
    cadena = cadena.split(',')
    return cadena;
  }

}
