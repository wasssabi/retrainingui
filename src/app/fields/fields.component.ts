import { Component, OnInit } from '@angular/core';
import { FieldTypeEnum } from '../field';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {

  numberType: boolean = true;
  textType: boolean = true;
  textAreaType: boolean = true;
  checkboxType: boolean = true;
  radioType: boolean = true;
  autocompleteType: boolean = true;
  sortByName: boolean = false;
  sortByDate: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get filterTypes(): FieldTypeEnum[] {
    const types: FieldTypeEnum[] = [];
    if (this.numberType) {
      types.push(FieldTypeEnum.NUMBER);
    }
    if (this.textType) {
      types.push(FieldTypeEnum.TEXT);
    }
    if (this.textAreaType) {
      types.push(FieldTypeEnum.TEXTAREA);
    }
    if (this.checkboxType) {
      types.push(FieldTypeEnum.CHECKBOX);
    }
    if (this.radioType) {
      types.push(FieldTypeEnum.RADIO);
    }
    if (this.autocompleteType) {
      types.push(FieldTypeEnum.AUTOCOMPLETE);
    }
    return types;
  }

}
