import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Form, FormStatusEnum } from '../../form';
import { HomeService } from '../home.service';

@Component({
  selector: 'home-forms-container',
  templateUrl: './home-forms-container.component.html',
  styleUrls: ['./home-forms-container.component.css']
})
export class HomeFormsContainerComponent implements OnInit {

  newForm: Form;
  forms: Form[];
  
  constructor(
    private homeService: HomeService,
    private ngbModal: NgbModal
  ) { }

  ngOnInit() {
    this.getForms();
  }

  open(content) {
    this.ngbModal.open(content)
    .result.then(result => {
      if (result.name) {
        this.newForm = {
          id: 1, 
          name: result.name, 
          description: result.description,
          status: FormStatusEnum.DRAFT,
          date: new Date()
        };
        this.homeService.addFormItem(this.newForm);
      }
    }, reason => {
      console.log(reason);
    })
  }

  getForms(): void {
    this.homeService.getForm()
    .subscribe(incomingForm => this.forms = incomingForm);
  }
}
