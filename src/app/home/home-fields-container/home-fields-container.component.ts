import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


import { Field } from "src/app/field";
import { HomeService } from "src/app/home/home.service";
import { FieldType } from "./fieldType";


@Component({
  selector: 'home-fields-container',
  templateUrl: './home-fields-container.component.html',
  styleUrls: ['./home-fields-container.component.css']
})
export class HomeFieldsContainerComponent implements OnInit {

  addingForm: FormGroup;

  fieldType = FieldType;
  newField: Field;
  fields: Field[];

  constructor(
    private homeService: HomeService,
    private ngbModal: NgbModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getFields();
    this.generateReactForm();
  }

  getFields(): void {
    this.homeService
      .getField()
      .subscribe(incomingField => this.fields = incomingField);
  }

  generateReactForm() {
    this.addingForm = this.formBuilder.group({
      title: ['', Validators.required],
      type: ['']
    });
  }

  open(content) {
    this.ngbModal.open(content).result.then(result => {
      this.newField = {
        id: 1, 
        name: this.addingForm.get('title').value, 
        type: this.addingForm.get('type').value,
        created: new Date()
      };
      this.homeService.addFieldItem(this.newField);
      this.addingForm.reset();
    }, reason => {
      console.log(reason);
    });
  }
}
