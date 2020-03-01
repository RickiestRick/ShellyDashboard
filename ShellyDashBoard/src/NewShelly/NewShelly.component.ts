import { Component, OnInit } from '@angular/core';
import { Shelly } from 'src/shared/Shelly';

@Component({
  selector: 'app-NewShelly',
  templateUrl: './NewShelly.component.html',
  styleUrls: ['./NewShelly.component.css']
})
export class NewShellyComponent implements OnInit {

  constructor() { }

  public Model: Shelly;

  ngOnInit() {
    
  }

}
