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
    this.columns = (window.innerWidth <= 400) ? 1 : 4;
this.Shellies= this.shellyService.GetAllShellies();

  }

  onResize(event)
  {
    console.log("resize");
    var width=event.target.innerWidth;


    
    if(width<=400)
    {
      this.columns=1;
    }
    else if(width<=600)
    {
      this.columns=2;
    }
    else if(width<=800)
    {
      this.columns=3;
    }
    else{
      this.columns=4;
    }
  
 //   this.columns = (event.target.innerWidth <= 400) ? 1 :4;
  }

}
