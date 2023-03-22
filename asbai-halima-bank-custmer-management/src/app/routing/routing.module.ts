import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from '../listing/listing.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { AddCustmerComponent } from '../add-custmer/add-custmer.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { EditCustmerComponent } from '../edit-custmer/edit-custmer.component';
import { DetailsComponent } from '../details/details.component';
import { AboutComponent } from '../about/about.component';



const routes = [
  {
    path:'',
    component: ListingComponent
  },
  {
    path:'header',
    component: HeaderComponent
  },{
    path:'edit/:id',
    component: EditCustmerComponent
  },
  {
    path:'add',
    component: AddCustmerComponent
  },
  {
    path:'details/:id',
    component: DetailsComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'not-found',
    component: NotFoundComponent
  },
  {
    path:'**',
    redirectTo:'not-found'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
