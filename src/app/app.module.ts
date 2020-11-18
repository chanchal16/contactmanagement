import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material/material.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { UserService } from './user.service';
import { InitialsPipe } from './initials.pipe'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    ContactdetailsComponent,
    InitialsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    Ng2SearchPipeModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
