import { Injectable } from '@angular/core';
//import {Headers} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact} from './contact';
import 'rxjs/Rx';

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient) { }

  //retrieve contacts 
  getContacts (){
    return this.http.get('http://localhost:3000/api/contacts')
    .map(res => res);
  }

  addContacts (newContact){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact, {headers: headers})
    .map(res => res)
  }

  deleteContacts (id){
    return this.http.delete("http://localhost:3000/api/contact/"+id)
    .map(res => res);
  }
}
