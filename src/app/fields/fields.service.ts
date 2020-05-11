import { Injectable } from "@angular/core";
import { Field } from "../field";
import { FieldList } from "../field-list";
import { Observable, of } from "rxjs";

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

    addSearching(input): void {
      this.searchString = input;
    }

    getSearch(): string{
      return this.searchString;
    }


  }
