import { Component, OnInit } from '@angular/core';

import {ButtonProperties} from '../button-properties';

@Component({
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.css']
})
export class Button1Component implements OnInit {

    buttonProerties: ButtonProperties = {
      color: 'red',
      border: '5px solid',
      textalign: 'center',
      fontsize: '16px',
      value: 'bottone 1'
  }

  onNotify(){
    window.alert(ButtonProperties);
  }
  constructor() { }

  ngOnInit() {
  }

}