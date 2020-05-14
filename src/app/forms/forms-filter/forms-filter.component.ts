import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Form, FormStatusEnum } from '../../form';
import { HomeService } from '../../home/home.service';


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
  formStatuses = Object.values(FormStatusEnum);
  newForm: Form;
  
  constructor(
    private homeService: HomeService,
    private ngbModal: NgbModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.generateReactForm();
  }
  changePublishedFilter(value: boolean) {
    this.isPublishedStatus = value;
    this.isPublishedEmitter.emit(value);
  }

  changeDraftFilter(value: boolean) {
    this.isDraftStatus = value;
    this.isDraftEmitter.emit(value);
  }

  changeSortByName(value: boolean) {
    this.isSortByName = value;
    this.isSortByNameEmitter.emit(value);
  }

  changeSortByDate(value: boolean) {
    this.isSortByDate = value;
    this.isSortByDateEmitter.emit(value);
  }

  generateReactForm() {
    this.addingForm = this.formBuilder.group({
      title: ['', Validators.required],
      status: [FormStatusEnum.DRAFT],
      description: ['']
    });
  }

  openCreationModal(content: any): void {
    this.ngbModal.open(content)
    .result.then(result => {
      this.newForm = {
        id: 1, 
        name: this.addingForm.get("title").value, 
        description: this.addingForm.get("description").value,
        status: this.addingForm.get("status").value,
        date: new Date()
      };
      this.homeService.addFormItem(this.newForm);
      this.addingForm.reset({status: FormStatusEnum.DRAFT});
    }, reason => {
      console.log(reason);
    })
  }
}
