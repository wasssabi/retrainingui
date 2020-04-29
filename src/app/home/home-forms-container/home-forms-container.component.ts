import { Component, OnInit } from '@angular/core';
import { Form } from "src/app/home/form";
import { HomeService } from "src/app/home/home.service";

@Component({
  selector: 'home-forms-container',
  templateUrl: './home-forms-container.component.html',
  styleUrls: ['./home-forms-container.component.css']
})
export class HomeFormsContainerComponent implements OnInit {
  forms: Form[];
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.getForms();
  }
  getForms(): void {
    this.homeService.getForm()
    .subscribe(incomingForm => this.forms = incomingForm);
  }
}
