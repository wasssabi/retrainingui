import { Component, OnInit, Input } from '@angular/core';
import { Field, FieldTypeEnum } from 'src/app/field';
import { FieldsService } from "src/app/fields/fields.service";
import { HomeService } from 'src/app/home/home.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-display-fields',
  templateUrl: './display-fields.component.html',
  styleUrls: ['./display-fields.component.css']
})
export class DisplayFieldsComponent implements OnInit {

  @Input() fields : Field[];
  @Input() filterTypes: FieldTypeEnum[];
  @Input() isSortByName: boolean;
  @Input() isSortByDate: boolean;
  modalField: Field;

  constructor(
    private fieldsService: FieldsService,
    private homeService: HomeService,
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
    this.getFields();
    this.searching();
  }

  getFields(): void {
    this.homeService.requestFields()
    .subscribe(incomingFields => {this.fields = incomingFields; console.log(incomingFields);});
  }

  searching(): string {
    return this.fieldsService.getSearch();
  }

  deleteFieldItem(id: number): void {
    this.homeService.deleteFieldItem(id);
    alert(`Field with id ${id} was successfully deleted.`);
    this.getFields();
  }

  shareFieldItem(id: number): void {
    this.homeService.shareFieldItem(id);
    alert(`Field with id ${id} was successfully shared.`);
  }

  openViewModal(content: any, field: Field): void {
    this.modalField = field;
    this.ngbModal.open(content);
  }

  dateGeneration(field: Field): Date {
    return new Date(field.created);
  }

  typeGeneration(field: Field): string {
    return FieldTypeEnum[field.fieldType];
  }
}
