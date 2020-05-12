import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Form } from '../form';
import { FormList } from '../form-list';

@Injectable ({
  providedIn: 'root'
})
  export class FormsService {
    constructor() {}

    private searchString: string;

    getForm(): Observable<Form[]> {
      return of(FormList);
    }

    addSearching(input: string): void {
      this.searchString = input;
    }

    getSearch(): string {
      return this.searchString;
    }
  }
