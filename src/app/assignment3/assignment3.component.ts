import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  displaySecret: boolean = false;
  buttonClickLog = [];

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.displaySecret = !this.displaySecret;
    this.buttonClickLog.push("Clicked button at " + new Date());
  }

}
