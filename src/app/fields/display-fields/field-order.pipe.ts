import { Pipe, PipeTransform } from "@angular/core";
import { Field } from '../../field';
import { compareStringsAsc, compareDatesAsc } from 'src/utils/sortComparators';

@Pipe({
  name: 'fieldOrderByPipe'
})

export class fieldOrderByPipe implements PipeTransform {
  transform(fields: Field[], isByName: boolean, isByDate: boolean): Field[] {
    const result = fields.slice();
    if (isByName) {
      result.sort((a,b) => compareStringsAsc(a.name, b.name));
    }
    if (isByDate) {
      result.sort((a,b) => compareDatesAsc(a.created, b.created));
    }
    return result;
  }
}