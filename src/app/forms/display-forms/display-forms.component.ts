import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Form, FormStatusEnum } from '../../form';
import { FormsService } from '../forms.service';
import { HomeService } from '../../home/home.service';

@Component({
  selector: 'app-display-forms',
  templateUrl: './display-forms.component.html',
  styleUrls: ['./display-forms.component.css']
})
export class DisplayFormsComponent implements OnInit {
  @Input() forms : Form[];
  @Input() filterStatuses: FormStatusEnum[];
  @Input() isSortByName: boolean;
  @Input() isSortByDate: boolean;
  @Input() statusEnum = FormStatusEnum;
  modalForm: Form;

  constructor(
    private formsService: FormsService,
    private homeService: HomeService,
    private ngbModal: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.getForms();
    this.searching();
  }

  getForms(): void {
    this.homeService.requestForms()
    .subscribe(incI => this.forms = incI);
  }

  searching(): string {
    return this.formsService.getSearch();
  }

  deleteFormItem(id: number): void {
    this.homeService.deleteFormItem(id);
    alert(`Item with id ${id} was successfully deleted.`);
    this.getForms();
  }

  shareFormItem(id: number): void {
    this.homeService.shareFormItem(id);
    alert(`Item with id ${id} was successfully shared.`);
  }

  openViewModal(content: any, form: Form): void {
    this.modalForm = form;
    this.ngbModal.open(content);
  }

  dateGeneration(form: Form): Date {
    return new Date(form.created);
  }

  statusGeneration(form: Form): string {
    return FormStatusEnum[Number(form.published)];
  }
}