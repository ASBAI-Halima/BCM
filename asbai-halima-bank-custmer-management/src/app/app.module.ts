import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import  {RoutingModule} from './routing/routing.module'

import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AddCustmerComponent } from './add-custmer/add-custmer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditCustmerComponent } from './edit-custmer/edit-custmer.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    HeaderComponent,
    AddCustmerComponent,
    NotFoundComponent,
    EditCustmerComponent,
    DetailsComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
