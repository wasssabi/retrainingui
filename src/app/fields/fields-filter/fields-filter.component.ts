import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Field, FieldTypeEnum, DefaultFilters } from '../../field';
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

  @Input() fields: Field[];
  @Input() outFilterList: object;


  @Output('isSortByNameChange') isSortByNameEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output('isSortByDateChange') isSortByDateEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output('updatedFilterList') FilterListEmitter: EventEmitter<object> = new EventEmitter();
  @Output('myFieldsShown') myFieldsEmmiter: EventEmitter<boolean> = new EventEmitter();

  filterList: object = DefaultFilters;
  filterKeys = Object.keys(DefaultFilters);
  fieldType = FieldType;
  newField: Field;
  isSortByName = false;
  isSortByDate = false;
  myFields = true;

  constructor(
    private homeService: HomeService,
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  changeFilter(type: string, existingList) {
    this.filterList = Object.keys(this.filterList)
    .reduce(function(newObj, key) {
      newObj[key] = (key === type) ? !existingList[key] : existingList[key];
      return newObj;
    }, {});
    this.changeSortByType();
  }

  changeSortByType() {
    this.outFilterList = this.filterList;
    this.FilterListEmitter.emit(this.outFilterList);
  }

  changeSortByName(value: boolean) {
    this.isSortByName = value;
    this.isSortByNameEmitter.emit(value);
  }

  changeShowMyFields(value: boolean) {
    this.myFields = value;
    this.myFieldsEmmiter.emit(value);
  }

  changeSortByDate(value: boolean) {
    this.isSortByDate = value;
    this.isSortByDateEmitter.emit(value);
  }

  openCreationModal(content: any): void {
    this.ngbModal
    .open(content)
    .result.then(result => {
      if (result.name) {
        this.newField = {
          id: null,
          name: result.name,
          fieldType: parseInt((FieldTypeEnum[result.type]), 10),
          created: new Date().toISOString(),
          isStrict: true,
          ownersId: 1
        };
        this.homeService.addFieldItem(this.newField);
      }
    }, reason => {
      console.log(reason);
    });
  }
}
