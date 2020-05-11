import { Component, OnInit } from '@angular/core';
import { FieldsService } from 'src/app/fields/fields.service';

@Component({
  selector: 'app-search-fields',
  templateUrl: './search-fields.component.html',
  styleUrls: ['./search-fields.component.css']
})
export class SearchFieldsComponent implements OnInit {

  constructor(
    private fieldsService: FieldsService
  ) { }

  ngOnInit(): void {
  }

  searching(event) {
    this.fieldsService.addSearching(event);
    event.stopPropagation();
  }

}
