import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Custmer } from '../models/custmer.model';
import { CustmerService } from '../services/custmer.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  customer?:Custmer;
  constructor(
    private customerService: CustmerService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    
  }
  ngOnInit(): void {
    this.activeRoute.params
    .pipe(
      switchMap((params)=> this.customerService.getCustmerById(params['id'])
    ))
    .subscribe({
      next:(customer)=>{
        this.customer = customer;
        console.log(this.customer)
      },
      error:()=>{
        this.router.navigate(['/not-found']);
      }
    })
  }

}
