import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { User } from '../models/user'
import { Router } from '@angular/router'



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  filterTerm: string;
  contacts:any;

  contactId=0;

  constructor(private userservice:UserService, private router:Router) {
    //this.contacts = {} as User;
   }

  ngOnInit(): void {
    this.getAllUsers();
    this.router.routeReuseStrategy.shouldReuseRoute= ()=>{
      return false;
    }
  }

  getAllUsers() {
    this.userservice.getList().subscribe(data => {
      this.contacts = data;
      console.log(data);
    });
  }

  onSelect(url,id){

    this.router.navigate([url, id]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }


}
