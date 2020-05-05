import { Component, OnInit } from '@angular/core';
import { Form } from "src/app/form";
import { HomeService } from "src/app/home/home.service";

declare let $: any;

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
    $(".Form").click( function() {
      $("#addingItem").attr("elementType", "Form");
      $("#addingItem").modal('show');
    })
    this.getForms();
  }
  getForms(): void {
    this.homeService.getForm()
    .subscribe(incomingForm => this.forms = incomingForm);
  }
}
