import { Component, OnInit } from '@angular/core';

import {ButtonProperties} from '../button-properties';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.css']
})
export class Button2Component implements OnInit {

   buttonProerties: ButtonProperties = {
      color: 'blue',
      border: '2px solid',
      textalign: 'left',
      fontsize: '28px',
      value: 'bottone 2'
  }

  onNotify(){
    console.log(this.buttonProerties);
  }

  constructor() { }

  ngOnInit() {
  }

}