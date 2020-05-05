import { Component, OnInit } from '@angular/core';
import { Field } from "src/app/field";
import { HomeService } from "src/app/home/home.service";

declare let $: any;

@Component({
  selector: 'home-fields-container',
  templateUrl: './home-fields-container.component.html',
  styleUrls: ['./home-fields-container.component.css']
})
export class HomeFieldsContainerComponent implements OnInit {
  fields: Field[];
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    $(".Field").click( function() {
      $("#addingItem").attr("elementType", "Field");
      $("#addingItem").modal('show');
    })
    this.getFields();
  }
  getFields(): void {
    this.homeService.getField()
    .subscribe(incomingField => this.fields = incomingField);
  }

}
