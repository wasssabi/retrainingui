import { Pipe, PipeTransform } from '@angular/core';
import { Field } from 'src/app/field';

@Pipe({
  name: 'fieldSearch'
})
export class FieldSearchPipe implements PipeTransform {
  transform(fields: Field[], search: string = ''): Field[] {
    if (!search.trim()){
      return fields;
    }

    return fields.filter(field => {
      return field.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

  }

}
