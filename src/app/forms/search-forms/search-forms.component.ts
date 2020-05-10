import { Component, OnInit } from '@angular/core';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-search-forms',
  templateUrl: './search-forms.component.html',
  styleUrls: ['./search-forms.component.css']
})
export class SearchFormsComponent implements OnInit {

  constructor(
    private formsService: FormsService
  ) { }

  ngOnInit(): void {
  }

  searching(value: string): void {
    this.formsService.addSearching(value);
  }
}
