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
    const statuses: FormStatusEnum[] = [];
    if (this.draftStatus) {
      statuses.push(FormStatusEnum.DRAFT);
    }
    if (this.publishedStatus) {
      statuses.push(FormStatusEnum.PUBLISHED);
    }
    return statuses;
  }
}
