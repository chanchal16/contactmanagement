import { Component, OnInit,ViewChild,Input,NgZone } from '@angular/core';
import { Location} from '@angular/common';
import { UserService } from '../user.service'
import { User } from '../models/user'
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute,Params } from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent implements OnInit {
  @ViewChild('userForm', { static: false })
  userForm: NgForm;

  @Input() user:User;

  //id:number;

  constructor(public userservice:UserService,private activatedroute: ActivatedRoute, private router:Router,private ngZone: NgZone,private location: Location,private snackBar: MatSnackBar) {
    this.user= new User();
   }

  ngOnInit(): void {
    this.getUser();

  }

  getUser():void{
    const id = +this.activatedroute.snapshot.paramMap.get('id');
    this.userservice.getUser(id)
      .subscribe(usr => {
        this.user = usr
        console.log(usr);
      });

  }     //The route.snapshot is a static image of the route information shortly after the component was created.
  //The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.Route parameters are always strings. The JavaScript (+) operator converts the string to a number



  cancelEdit() {
    this.userForm.resetForm();
  }

  goBack() {
    this.location.back();
  }


  onSubmit(form: NgForm){
    console.log(form.value);
    const id = +this.activatedroute.snapshot.paramMap.get('id');
    this.userservice.updateUser(id,form.value).subscribe(res=>{
      console.log(res);
      //this.ngZone.run(() => this.router.navigateByUrl('/home'))
      this.ngZone.run(() => this.goBack())
    })
  }

  openSnackBar(message:string,action:string) {
    this.snackBar.open(message,action, {
      duration:3000,
      panelClass: ['my-snackbar']
    });
  }


}
