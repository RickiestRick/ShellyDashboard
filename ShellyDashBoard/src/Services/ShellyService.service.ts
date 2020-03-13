
import { Shelly } from './../shared/Shelly';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable,Operator } from 'rxjs';
import { map, retry } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ShellyService {

private baseURL:string='https:/localhost:44367/api';
constructor(private httpClient:HttpClient) { }

public  GetAllShellies(): Observable<Shelly[]>
{
  return this.httpClient.get<Shelly[]>(this.baseURL+ '/Shelly/GetShellies').pipe(map(raws=> this.createShellies(raws)));
}


public CheckShellyConnection(shellyID:number) : Observable<boolean>
{
  return this.httpClient.get<boolean>(this.baseURL+'/Connection/CheckConnectionStateOfShelly?ID='+shellyID);
}


createShellies(raws: any): Shelly[] {
var myshellies:Shelly[]= new Array<Shelly>();
   raws.map(raw => 
    {
 var s= new Shelly();
s.ConnectionState=raw.connectionState,
s.IP=raw.ip;
s.ShellyID=raw.shellyID;
s.Name=raw.name;
s.ShellyType=raw.shellyType;
myshellies.push(s);
    });
    console.log(myshellies);
    return myshellies;

}
}
