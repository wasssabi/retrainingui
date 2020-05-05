import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/form';
import { HomeService } from "src/app/home/home.service";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  forms : Form[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getForms();
  }

  getForms(): void {
    this.homeService.getForm()
    .subscribe(incomingForm => this.forms = incomingForm);
  }

}
