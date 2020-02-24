import { Shelly } from './../shared/Shelly';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShellyService {

constructor() { }

public  GetAllShellies(): Shelly[]
{
var Shellies:Array<Shelly>;
Shellies= new Array<Shelly>();
    for(let i:number=0; i<10; i++)
    {
   var s= new Shelly();
s.Name="Test"+i;
s.ShellyID="345893489gj";
s.ConnectionState=true;
Shellies.push(s);
   
    }
    return Shellies;
}

}
