import { Component, OnInit } from '@angular/core';
import { FormStatusEnum } from '../form';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  draftStatus: boolean = true;
  publishedStatus: boolean = true;
  sortByName: boolean = false;
  sortByDate: boolean = false;

  constructor() { }

  ngOnInit(): void {
  
  }

  get filterStatuses(): FormStatusEnum[] {
    let valuesList = Object.keys(FormStatusEnum);
    return valuesList.slice(valuesList.length/2).map((value, index) => {
      if (value == FormStatusEnum[0]){
        return (this.draftStatus) ? index : -1;
      }else{
        return (this.publishedStatus) ? index : -1;
      }
    });
  }
}
