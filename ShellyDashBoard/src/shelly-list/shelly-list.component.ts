import { Shelly } from 'src/shared/Shelly';
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
this.shellyService.GetAllShellies().subscribe(
  (data:Shelly[])=> this.Shellies=data
);

  }


  provideBooksFrom(raws: any): Shelly[] {

    return raws.map(raw => 
      {
        var s= new Shelly();
        s.ConnectionState=raw.connectionState,
  s.IP=raw.ip;
  s.Name=raw.name;
  s.ShellyType=raw.shellyType;
      });
  
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
