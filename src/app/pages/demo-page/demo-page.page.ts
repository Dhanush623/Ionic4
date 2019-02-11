import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.page.html',
  styleUrls: ['./demo-page.page.scss'],
})
export class DemoPagePage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
