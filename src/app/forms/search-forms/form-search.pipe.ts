import { Pipe, PipeTransform } from '@angular/core';
import { Form } from 'src/app/form';

@Pipe({
  name: 'FormSearch'
})
export class FormSearchPipe implements PipeTransform {
  transform(forms: Form[], search: string = ''): Form[] {
    if (!search.trim()){
      return forms;
    }

    return forms.filter(form => {
      return form.formName.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

  }

}
