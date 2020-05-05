import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/field';
import { FieldsService } from '../fields.service';

@Component({
  selector: 'app-fields-filter',
  templateUrl: './fields-filter.component.html',
  styleUrls: ['./fields-filter.component.css']
})
export class FieldsFilterComponent implements OnInit {

  @Input() fields : Field[];

  constructor(
    private fieldsService: FieldsService
  ) { }

  ngOnInit(): void {
  }



}
