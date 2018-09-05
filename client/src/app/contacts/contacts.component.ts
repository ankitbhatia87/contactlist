import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {

  contacts: any;
  contact: Contact;
  firstname: String;
  lastname: String;
  contactnumber: String;

  constructor(private contactService: ContactsService) { }

  addContact () {
    const newContact = {
      firstname : this.firstname,
      lastname : this.lastname,
      contactnumber: this.contactnumber
    }

    this.contactService.addContacts(newContact)
    .subscribe(contact => {
      this.contacts.push(contact);
      this.contactService.getContacts()
        .subscribe( contacts => 
          this.contacts = contacts);
      console.log("Contact added successfully");
    })
    
  }

  deleteContact (id:any){
    let contacts = this.contacts
    this.contactService.deleteContacts(id)
    .subscribe(data => {
      if (data.n == 1) {
        for (var i=0; i<= contacts.length; i++){
          if(contacts[i]._id == id) {
            contacts.splice(i,1);
            console.log("Contact Deleted Successfully");
          }
        }
        
      }
    })
  }

  ngOnInit() {
    this.contactService.getContacts()
    .subscribe( contacts => 
      this.contacts = contacts);
  }

}
