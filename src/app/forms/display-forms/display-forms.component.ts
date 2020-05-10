import { Component, OnInit, Input } from '@angular/core';

import { Form } from '../../form';
import { FormsService } from '../forms.service';

@Component({
selector: 'app-display-forms',
templateUrl: './display-forms.component.html',
styleUrls: ['./display-forms.component.css']
})
export class DisplayFormsComponent implements OnInit {
  @Input() forms : Form[];

  constructor(
    private formsService: FormsService
  ) {
  }

  ngOnInit(): void {
    this.getForms();
    this.searching();
  }

  getForms(): void {
    this.formsService
      .getForm()
      .subscribe(incomingForms => {
        this.forms = incomingForms
      });
  }

  searching(): string {
    return this.formsService.getSearch();
  }
}