import { Injectable } from '@angular/core';
import { HomeService } from '../home/home.service';

import { Form } from '../form';
import { Observable } from 'rxjs';

@Injectable ({
  providedIn: 'root'
})
  export class FormsService {
    constructor(private homeService: HomeService) {}

    private searchString: string;

    getForm(): Observable<Form[]> {
      return this.homeService.requestForms();
    }

    addSearching(input: string): void {
      this.searchString = input;
    }

    getSearch(): string {
      return this.searchString;
    }
  }
