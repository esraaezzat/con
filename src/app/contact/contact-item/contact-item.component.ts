import { Component, OnInit } from '@angular/core';
import {IContact} from '../../Interfaces/Icontact';
import { Input } from '@angular/core';
@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
@Input() item :IContact
@Input() specialChar:string;
  constructor() { }

  ngOnInit() {
  }

}
