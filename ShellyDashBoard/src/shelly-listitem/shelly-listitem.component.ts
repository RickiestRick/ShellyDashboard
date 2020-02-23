import { Shelly } from './../shared/Shelly';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shelly-listitem',
  templateUrl: './shelly-listitem.component.html',
  styleUrls: ['./shelly-listitem.component.css']
})
export class ShellyListitemComponent implements OnInit {

@Input ()MyShelly: Shelly;


  constructor() { }

  ngOnInit() {
    console.log(Shelly);
  }

}
