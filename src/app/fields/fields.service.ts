import { Injectable } from "@angular/core";
import { Field } from "./field";
import { FieldList } from "./field-list";
import { Observable, of } from "rxjs";




@Injectable ({
  providedIn: 'root'
  })

  export class FieldsService {
    constructor() {}

    searchString;

    getField(): Observable<Field[]> {
      return of(FieldList);
    }

    addSearching(input) {
      this.searchString = input;
    }

    getSearch(){
      return this.searchString;
    }



  }
