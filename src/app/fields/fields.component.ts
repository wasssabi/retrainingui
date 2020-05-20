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
      types.push(FieldTypeEnum.Number);
    }
    if (this.textType) {
      types.push(FieldTypeEnum.Text);
    }
    if (this.textAreaType) {
      types.push(FieldTypeEnum.TextArea);
    }
    if (this.checkboxType) {
      types.push(FieldTypeEnum.Checkbox);
    }
    if (this.radioType) {
      types.push(FieldTypeEnum.Radio);
    }
    if (this.autocompleteType) {
      types.push(FieldTypeEnum.Autocomplete);
    }
    return types;
  }

}
