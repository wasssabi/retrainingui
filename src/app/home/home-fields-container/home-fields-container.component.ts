import { Component, OnInit } from '@angular/core';
import { Field } from "src/app/field";
import { HomeService } from "src/app/home/home.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FieldType } from "./fieldType";



@Component({
  selector: 'home-fields-container',
  templateUrl: './home-fields-container.component.html',
  styleUrls: ['./home-fields-container.component.css']
})
export class HomeFieldsContainerComponent implements OnInit {

  fieldType = FieldType;
  newField: Field;
  fields: Field[];

  constructor(
    private homeService: HomeService,
    private ngbModal: NgbModal
  ) { }

  ngOnInit() {
    this.getFields();
  }

  getFields(): void {
    this.homeService
      .getField()
      .subscribe(incomingField => this.fields = incomingField);
  }

  open(content) {
    this.ngbModal.open(content).result.then(result => {
      if (result.name) {
        this.newField = {
          id: 1,
          name: result.name,
          type: result.type,
          created: new Date()
        }
        this.homeService.addFieldItem(this.newField);
      }
    }, reason => {
      console.log(reason);
    });
  }
}
