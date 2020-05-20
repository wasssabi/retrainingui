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
      result.sort((a, b) => compareStringsAsc(a.formName, b.formName));
    }
    if (isByDate) {
      result.sort((a, b) => compareDatesAsc(new Date(a.created),new Date(b.created)));
    }
    return result;
  }
}
