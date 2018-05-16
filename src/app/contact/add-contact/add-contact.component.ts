import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/Interfaces/Icontact';
import { ContactService } from 'src/app/Services/contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
 file:any;
 fname:string;
 lname:string;
 contactNumber:string='';
 email:string='';
 code:string='';
 newContact:IContact;
  constructor( private ContactService:ContactService,private router:Router)
   {
    this.newContact = new IContact();
   }

  ngOnInit() {
  }

  onFileChanged(event) {
     this.file = event.target.files[0]
  
     
  }
  onSave()
  {
 
      this.newContact.firstName = this.fname.charAt(0).toUpperCase()+this.fname.slice(1);
      this.newContact.mobileNumber = this.code + this.contactNumber;
      this.newContact.image = this.file;
  debugger;

   this.ContactService.addNewContact(this.newContact);

   this.router.navigateByUrl('');

    
  }

  onCancel()
  {
    this.router.navigateByUrl('');
  }
}
