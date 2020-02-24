import { Shelly } from './../shared/Shelly';
import { Component, OnInit } from '@angular/core';
import { ShellyService } from 'src/Services/ShellyService.service';

@Component({
  selector: 'app-shelly-list',
  templateUrl: './shelly-list.component.html',
  styleUrls: ['./shelly-list.component.css']
})
export class ShellyListComponent implements OnInit {

 public Shellies: Shelly[];
public columns: number;
  constructor(private shellyService:ShellyService) { }

  ngOnInit() {
    this.columns = (window.innerWidth <= 400) ? 1 : 2;
this.Shellies= this.shellyService.GetAllShellies();

  }

  onResize(event)
  {
    console.log("resize");
    this.columns = (event.target.innerWidth <= 400) ? 1 : 2;
  }

}
