import { Injectable } from '@angular/core';
import { IContact } from 'src/app/Interfaces/Icontact';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
 //import { writeFileSync, readFileSync, writeFile } from 'fs';

import { Response, Headers } from '@angular/http';
//import * as fs from "fs";
//import { HttpClientModule } from '@angular/common/http';
//import fs = require('fs');


//import { writeFileSync, readFileSync,writeFile } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

 // my_data: any;
  newarr:any;
  contacts : any;
  latestContacts : any;
  alpha:string[];
 


  constructor( private http:Http) { 
    
 
    this.alpha = ['A','B','C','D','C','E','F','G','H','I','J','K','L','M','N','O','P',
                   'Q','R','S','T','U','V','W','X','Y','Z'];
    
                      
                  

  }

  addNewContact(contact:any)
  {
    debugger;
    let headers = new Headers();
    
    headers.append('Content-Type', 'application/json');


     return this.http.post("./assets/recentdata.json", JSON.stringify(contact)).subscribe(

     (res)=>{alert('saved' + res);},

      (e)=>{console.log('the error : '+e)}
   );

  }



  
   public getRecentData() {
     return this.http.get("./assets/recentdata.json")
  }

  public getContactData() {
    return this.http.get("./assets/contactdata.json")
 }
  
 
 
}
