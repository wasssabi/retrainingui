import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Field, DefaultFilters } from "../field";


@Injectable ({
  providedIn: 'root'
  })

  export class FieldsService {
    constructor() {}

    private searchString: string;

    addSearching(input: string): void {
      this.searchString = input;
    }

    getSearch(): string{
      return this.searchString;
    }

  }
