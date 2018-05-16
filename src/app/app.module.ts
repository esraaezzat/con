import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactItemComponent } from './contact/contact-item/contact-item.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactService } from 'src/app/Services/contact.service';
import {FormsModule} from '@angular/forms';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http'

import { map } from 'rxjs/operators';
@NgModule({
  declarations: [
    AppComponent,
    ContactItemComponent,
    ContactListComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'AddNewContact',component: AddContactComponent},
      {path:'',component: ContactListComponent}
    ]),
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
