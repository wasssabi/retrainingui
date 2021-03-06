import { Component, OnInit, Input } from '@angular/core';
import { Field, FieldTypeEnum } from 'src/app/field';
import { FieldsService } from 'src/app/fields/fields.service';
import { HomeService } from 'src/app/home/home.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { timer } from 'rxjs';
import { UpdateTime } from '../../updateTime';

@Component({
  selector: 'app-display-fields',
  templateUrl: './display-fields.component.html',
  styleUrls: ['./display-fields.component.css']
})
export class DisplayFieldsComponent implements OnInit {

  @Input() fields: Field[];
  @Input() filterTypes: FieldTypeEnum[];
  @Input() isSortByName: boolean;
  @Input() isSortByDate: boolean;
  @Input() myFields: boolean;
  modalField: Field;
  userId: number;

  constructor(
    private fieldsService: FieldsService,
    private homeService: HomeService,
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
    const refresh = timer(UpdateTime.timerDelay, UpdateTime.timerPeriod);
    refresh.subscribe(result => this.getFields());
    this.searching();
    this.getCurrentUserId();
  }

  getFields(): void {
    this.homeService.requestFields()
    .subscribe(incomingFields => this.fields = incomingFields);
  }

  getCurrentUserId() {
    this.homeService.getCurrentUserId()
    .subscribe(data => this.userId = data);
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
