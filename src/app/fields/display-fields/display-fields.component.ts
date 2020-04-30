import { Component, OnInit } from '@angular/core';
import { temporaryFields } from 'src/app/temporaryFields';

@Component({
  selector: 'app-display-fields',
  templateUrl: './display-fields.component.html',
  styleUrls: ['./display-fields.component.css']
})
export class DisplayFieldsComponent implements OnInit {

  temporaryFields = temporaryFields;

  constructor() { }

  ngOnInit(): void {
  }

}
