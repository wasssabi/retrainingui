import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Form, FormStatusEnum } from '../../form';
import { HomeService } from '../home.service';

@Component({
  selector: 'home-forms-container',
  templateUrl: './home-forms-container.component.html',
  styleUrls: ['./home-forms-container.component.css']
})
export class HomeFormsContainerComponent implements OnInit {

  addingForm: FormGroup;

  newForm: Form;
  forms: Form[];
  formStatuses = Object.values(FormStatusEnum);
  
  constructor(
    private homeService: HomeService,
    private ngbModal: NgbModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getForms();
    this.generateReactForm();
  }

  generateReactForm() {
    this.addingForm = this.formBuilder.group({
      title: ['', Validators.required],
      status: [FormStatusEnum.DRAFT],
      description: ['']
    });
  }

  open(content) {
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

  getForms(): void {
    this.homeService.getForm()
    .subscribe(incomingForm => this.forms = incomingForm);
  }
}
