import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/field';
import { FieldsService } from "src/app/fields/fields.service";

@Component({
  selector: 'app-display-fields',
  templateUrl: './display-fields.component.html',
  styleUrls: ['./display-fields.component.css']
})
export class DisplayFieldsComponent implements OnInit {

  @Input() fields : Field[];

  constructor(
    private fieldsService: FieldsService
  ) { }

  ngOnInit(): void {
    this.getFields();
    this.searching();

  }
  getFields(): void {
    this.fieldsService.getField()
    .subscribe(incomingField => this.fields = incomingField);
  }

 /* sortFields(): void {
    this.fieldsService.getField()
    .subscribe(incomingField => this.fields = incomingField.sort((a: any, b: any) => a.name - b.name));
  }
*/
  searching(): string {
    return this.fieldsService.getSearch();
  }

}
