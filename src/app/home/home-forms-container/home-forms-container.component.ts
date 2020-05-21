import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Form, FormStatusEnum } from '../../form';
import { HomeService } from '../home.service';
import { timer } from 'rxjs';
import { UpdateTime } from '../../updateTime';

@Component({
  selector: 'home-forms-container',
  templateUrl: './home-forms-container.component.html',
  styleUrls: ['./home-forms-container.component.css']
})
export class HomeFormsContainerComponent implements OnInit {

  addingForm: FormGroup;
  testData: any;

  newForm: Form;
  forms: Form[];
  formStatuses = Object.values(FormStatusEnum);
  
  constructor(
    private homeService: HomeService,
    private ngbModal: NgbModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    let refresh = timer(UpdateTime.timerDelay, UpdateTime.timerPeriod);
    refresh.subscribe(result => this.getForms());
    this.generateReactForm();
  }

  generateReactForm() {
    this.addingForm = this.formBuilder.group({
      title: ['', Validators.required],
      status: [FormStatusEnum[0]],
      description: ['']
    });
  }

  open(content) {
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
      this.ngOnInit();
    }, reason => {
      console.log(reason);
    })
  }

  getForms(): void {
    this.homeService.requestForms()
    .subscribe(incI => this.forms = incI);
  }
}
