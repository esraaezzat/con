import { Component, OnInit } from '@angular/core';
import {IContact} from '../../Interfaces/Icontact';
import { ContactService } from 'src/app/Services/contact.service';
//import { constants } from 'zlib';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public target:any[];
  public contacts:any;
  public LatestContacts:any;
  public txtSearch:string;
  public alpha:string[];
  constructor(private ContactService : ContactService) { 
  }

  
 

  ngOnInit() {
  
  this.ContactService.getRecentData().subscribe(
    (res)=>{
      this.LatestContacts=res.json().data;
        console.log(res.json().data);
        
     }
 
  );

  this.ContactService.getContactData().subscribe(
    (res)=>{
      this.contacts=res.json().data;
        console.log(res.json().data);
        
        this.contacts=res.json().data.sort(function(a, b) {
          if(a.firstName!=null &&  b.firstName!=null)
          {
          var textA = a.firstName.toLowerCase();
          var textB = b.firstName.toLowerCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
          }
      });
      this.target =  this.contacts
     }
 
  );

  

  this.alpha=this.ContactService.alpha;
  
   }


   onFiltered()
   {
 
    this.target = this.contacts;
     debugger;
     this.target = this.contacts.filter(x=> { 
       
       
        return x.firstName!=null && x.firstName.toLowerCase().includes(this.txtSearch.toLowerCase());
       
     
     })

   
  }
  
 
}
