import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Form } from '../form';
import { FormList } from '../form-list';




@Injectable ({
  providedIn: 'root'
  })

  export class FormsService {
    constructor() {}

    searchString;

    getField(): Observable<Form[]> {
      return of(FormList);
    }

    addSearching(input) {
      this.searchString = input;
    }

    getSearch(){
      return this.searchString;
    }



  }
