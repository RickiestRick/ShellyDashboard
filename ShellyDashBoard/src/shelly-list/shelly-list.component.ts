import { Shelly } from './../shared/Shelly';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelly-list',
  templateUrl: './shelly-list.component.html',
  styleUrls: ['./shelly-list.component.css']
})
export class ShellyListComponent implements OnInit {

 public Shellies: Array<Shelly>;

  constructor() { }

  ngOnInit() {
this.Shellies=  new Array<Shelly>();
    for(let i:number=0; i<10; i++)
    {
   var s= new Shelly();
s.Name="Test"+i;
s.ShellyID="345893489gj";
s.ConnectionState=true;
this.Shellies.push(s);
   
    }
    console.log(this.Shellies);
    
  }

}
