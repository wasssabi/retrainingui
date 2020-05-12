import { Pipe, PipeTransform } from '@angular/core';
import { Form } from '../../form';

import { compareStringsAsc, compareDatesAsc } from 'src/utils/sortComparators';

@Pipe({
  name: 'formOrderByPipe'
})
export class FormOrderByPipe implements PipeTransform {
  transform(forms: Form[], isByName: boolean, isByDate: boolean): Form[] {
    const result = forms.slice();
    if (isByName) {
      result.sort((a, b) => compareStringsAsc(a.name, b.name));
    }
    if (isByDate) {
      result.sort((a, b) => compareDatesAsc(a.date, b.date));
    }
    return result;
  }
}
