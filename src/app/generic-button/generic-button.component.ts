import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {ButtonProperties} from '../button-properties';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.css']
})
export class GenericButtonComponent implements OnInit {

  @Input() buttonproperties: ButtonProperties;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}