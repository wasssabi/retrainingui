import { Pipe, PipeTransform } from '@angular/core';
import { Field, FieldTypeEnum } from '../../field';

@Pipe({
  name: 'FieldFilterPipe'
})

export class FieldFilterPipe implements PipeTransform {
  transform(fields: Field[], filterTypes: FieldTypeEnum[]): Field[] {
    return fields.filter(item => filterTypes.includes(item.fieldType));
  }
}
