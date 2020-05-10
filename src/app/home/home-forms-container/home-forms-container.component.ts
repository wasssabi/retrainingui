import { Component, OnInit } from '@angular/core';
import { Form } from "src/app/form";
import { HomeService } from "src/app/home/home.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";



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
          description: result.description
        };
        this.homeService.addItem("Form", this.newForm);
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
