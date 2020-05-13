import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Field, FieldTypeEnum } from '../../field';
import { FieldsService } from '../fields.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as uuid from 'node_modules/uuid';
import { HomeService } from 'src/app/home/home.service';
import { FieldType } from 'src/app/home/home-fields-container/fieldType';

@Component({
  selector: 'app-fields-filter',
  templateUrl: './fields-filter.component.html',
  styleUrls: ['./fields-filter.component.css']
})
export class FieldsFilterComponent implements OnInit {

  @Input() fields : Field[];

  @Input('isNumber') isNumberType: boolean;
  @Input('isText') isTextType: boolean;
  @Input('isTextArea') isTextAreaType: boolean;
  @Input('isCheckbox') isCheckboxType: boolean;
  @Input('isRadio') isRadioType: boolean;
  @Input('isAutocomplete') isAutocompleteType: boolean;
  @Input() isSortByName: boolean;
  @Input() isSortByDate: boolean;

  @Output('isNumberChange') isNumberEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output('isTextChange') isTextEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output('isTextAreaChange') isTextAreaEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output('isCheckboxChange') isChheckboxEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output('isRadioChange') isRadioEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output('isAutocompleteChange') isAutocompleteEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output('isSortByNameChange') isSortByNameEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output('isSortByDateChange') isSortByDateEmitter: EventEmitter<boolean> = new EventEmitter();

  fieldType = FieldType;
  newField: Field;

  constructor(
    private homeService: HomeService,
    private fieldsService: FieldsService,
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  changeNumberFilter(value: boolean) {
    this.isNumberType = value;
    this.isNumberEmitter.emit(value);
  }

  changeTextFilter(value: boolean) {
    this.isTextType = value;
    this.isTextEmitter.emit(value);
  }

  changeTextAreaFilter(value: boolean) {
    this.isTextAreaType = value;
    this.isTextAreaEmitter.emit(value);
  }

  changeCheckboxFilter(value: boolean) {
    this.isCheckboxType = value;
    this.isChheckboxEmitter.emit(value);
  }

  changeRadioFilter(value: boolean) {
    this.isRadioType = value;
    this.isRadioEmitter.emit(value);
  }

  changeAutocompleteFilter(value: boolean) {
    this.isAutocompleteType = value;
    this.isAutocompleteEmitter.emit(value);
  }

  changeSortByName(value: boolean) {
    this.isSortByName = value;
    this.isSortByNameEmitter.emit(value);
  }

  changeSortByDate(value: boolean) {
    this.isSortByDate = value;
    this.isSortByDateEmitter.emit(value);
  }

  openCreationModal(content: any): void {
    this.ngbModal
    .open(content)
    .result.then(result => {
      if(result.name) {
        this.newField = {
          id: uuid.v4(),
          name: result.name,
          type: result.type,
          created: new Date()
        };
        this.homeService.addFieldItem(this.newField);
      }
    }, reason => {
      console.log(reason);
    })
  }
}
