import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('oppen', [
      state('inactive', style({
        opacity: 0,
        transform: 'scale(0.1)'
      })),
      state('active',   style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('6s 13000ms')),
      transition('active => inactive', animate('6s 13000ms'))
    ]),
    trigger('nav-animation', [
      state('inactive', style({
        opacity: 0,
      })),
      state('active',   style({
        opacity: 1,
      })),
      transition('inactive => active', animate('30000ms')),
      transition('active => inactive', animate('30000ms'))
    ]),
  ]
})
export class HomeComponent implements OnInit {
  state = 'inactive'; 

  constructor() { }
  

  ngOnInit(): void {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }

}
