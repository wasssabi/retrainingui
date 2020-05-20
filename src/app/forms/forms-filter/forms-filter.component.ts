import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Form, FormStatusEnum } from '../../form';
import { HomeService } from '../../home/home.service';
import { FormStatus } from './formStatus';


@Component({
  selector: 'app-forms-filter',
  templateUrl: './forms-filter.component.html',
  styleUrls: ['./forms-filter.component.css']
})
export class FormsFilterComponent implements OnInit {
  @Input('isDraft') isDraftStatus: boolean;
  @Input('isPublished') isPublishedStatus: boolean;
  @Input() isSortByName: boolean;
  @Input() isSortByDate: boolean;

  @Output('isDraftChange') isDraftEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output('isPublishedChange') isPublishedEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output('isSortByNameChange') isSortByNameEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output('isSortByDateChange') isSortByDateEmitter: EventEmitter<boolean> = new EventEmitter();

  addingForm: FormGroup;
  formStatuses = FormStatus;
  newForm: Form;
  
  constructor(
    private homeService: HomeService,
    private ngbModal: NgbModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.generateReactForm();
  }
  changePublishedFilter(value: boolean): void {
    this.isPublishedStatus = value;
    this.isPublishedEmitter.emit(value);
  }

  changeDraftFilter(value: boolean): void {
    this.isDraftStatus = value;
    this.isDraftEmitter.emit(value);
  }

  changeSortByName(value: boolean): void {
    this.isSortByName = value;
    this.isSortByNameEmitter.emit(value);
  }

  changeSortByDate(value: boolean): void {
    this.isSortByDate = value;
    this.isSortByDateEmitter.emit(value);
  }

  generateReactForm(): void {
    this.addingForm = this.formBuilder.group({
      title: ['', Validators.required],
      status: [FormStatusEnum[0]],
      description: ['']
    });
  }

  openCreationModal(content: any): void {
    this.ngbModal.open(content)
    .result.then(result => {
        this.newForm = {
        id: null, 
        formName: this.addingForm.get("title").value, 
        formTitle: this.addingForm.get("description").value,
        resultsUrl: "",
        published: Boolean(FormStatusEnum[this.addingForm.get("status").value]),
        created: new Date().toISOString()
      };
      this.homeService.addFormItem(this.newForm);
      this.addingForm.reset({status: FormStatusEnum[0]});
    }, reason => {
      console.log(reason);
    })
  }
}
