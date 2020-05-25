import { Component, OnInit } from '@angular/core';
import { FieldTypeEnum, DefaultFilters } from '../field';


@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {

  sortByName: boolean;
  sortByDate: boolean;
  inFilterTypes = DefaultFilters;
  testList = this.inFilterTypes;
  outFilterTypes: FieldTypeEnum[];

  constructor() { }

  ngOnInit(): void {
    this.inFilterTypesGeneration(this.inFilterTypes);
  }

  inFilterTypesGeneration(newTypes: object) {
    this.outFilterTypes = Object.keys(newTypes)
    .map((value, index) => (newTypes[value]) ? index : -1);
  }
}
