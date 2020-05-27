import { Pipe, PipeTransform } from '@angular/core';
import { Field,  } from '../../field';

@Pipe({
  name: 'FieldSharedPipe'
})

export class FieldSharedPipe implements PipeTransform {
  transform(fields: Field[], userId: number, myFields: boolean = true): Field[] {
        console.log(userId);
        console.log(myFields);
        return fields.filter(item => {
            if (myFields) {
                return item.ownersId == userId
            }
        });
    }
}
