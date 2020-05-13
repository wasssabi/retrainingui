import { Pipe, PipeTransform } from "@angular/core";
import { Field, FieldTypeEnum } from '../../field';

@Pipe({
  name: 'fieldFilterPipe'
})

export class FieldFilterPipe implements PipeTransform {
  transform(fields: Field[], types: FieldTypeEnum[]): Field[] {
    return fields.filter(item => types.includes(item.type));
  }
}
