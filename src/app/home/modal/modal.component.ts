import { Component, OnInit } from '@angular/core';

import { HomeService } from "src/app/home/home.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  addItem(itemType, title, description) {
    this.homeService.addItem(itemType, title, description);
  }

}
