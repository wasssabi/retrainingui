import { Pipe, PipeTransform } from '@angular/core';
import { Form, FormStatusEnum } from '../../form';

@Pipe({
  name: 'formFilterPipe'
})
export class FormFilterPipe implements PipeTransform {
  transform(forms: Form[], statuses: FormStatusEnum[]): Form[] {
    return forms.filter(item => statuses.includes(Number(item.published)));
  }
}
