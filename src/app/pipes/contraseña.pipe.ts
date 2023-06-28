import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class ContraseñaPipe implements PipeTransform {

  transform(value: string, activar: boolean = false ): string {

    return ( activar ) ? '*'.repeat( value.length ) : value ;

  }

}
