import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Field } from "../field";
import { FieldList } from "../field-list";


@Injectable ({
  providedIn: 'root'
  })

  export class FieldsService {
    constructor() {}

    private searchString: string;

    getField(): Observable<Field[]> {
      return of(FieldList);
    }

    getFields(): Field [] {
      return FieldList;
    }

    addSearching(input: string): void {
      this.searchString = input;
    }

    getSearch(): string{
      return this.searchString;
    }


  }
