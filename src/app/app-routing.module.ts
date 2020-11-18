import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component'
import { ContactdetailsComponent } from './contactdetails/contactdetails.component'
import { AppComponent  } from './app.component'
import { config } from 'rxjs';

const routes: Routes = [


  {
    path:'home', component:HomeComponent
  },

  {
    path:'list', component:ContactsComponent
  },
  {
    path:'app', component:AppComponent
  },
  {
    path:'detail/:id', component:ContactdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
