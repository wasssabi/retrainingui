import { Component, OnInit, Input } from '@angular/core';
import { Form } from 'src/app/form';

@Component({
  selector: 'app-forms-item',
  templateUrl: './forms-item.component.html',
  styleUrls: ['./forms-item.component.css']
})
export class FormsItemComponent implements OnInit {

  @Input() forms : Form[];

  constructor() { }

  ngOnInit(): void {
  }

}
