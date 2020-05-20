import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


import { Field, FieldTypeEnum } from "src/app/field";
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
    console.log(FieldTypeEnum.Number);
    
  }

  getFields(): void {
    this.homeService.requestFields()
    .subscribe(incI => this.fields = incI);
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
        id: null, 
        name: this.addingForm.get('title').value, 
        fieldType: this.addingForm.get('type').value,
        created: new Date().toISOString(),
        isStrict: true,
        ownerId: null
      };
      this.homeService.addFieldItem(this.newField);
      this.addingForm.reset();
    }, reason => {
      console.log(reason);
    });
  }
}
