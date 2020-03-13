import { ShellyService } from 'src/Services/ShellyService.service';
import { Shelly } from './../shared/Shelly';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
@Component({
  selector: 'app-shelly-listitem',
  templateUrl: './shelly-listitem.component.html',
  styleUrls: ['./shelly-listitem.component.css']
})
export class ShellyListitemComponent implements OnInit {

@Input ()MyShelly: Shelly;


  constructor(private shellyService:ShellyService) { }

  ngOnInit() {
   interval(10000)
    .subscribe((val) =>
     { 
      this.shellyService.CheckShellyConnection(this.MyShelly.ShellyID).subscribe((data:boolean) => this.MyShelly.ConnectionState=data);
     });
  }

}
