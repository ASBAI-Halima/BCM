import { Component, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { Custmer } from '../models/custmer.model';
import {CustmerService} from '../services/custmer.service';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit  {

  
  custmers:Custmer[] = [];
  isDeleteLoading :any[]=[];
  isLoading=false;
  total?: number ;
  amounts: number=0;
  searchQuerySubject = new Subject<string>();;

constructor(private custmerService: CustmerService){
      this.searchQuerySubject
       .pipe(debounceTime(500), distinctUntilChanged())
       .subscribe((query: string)=>{
        this.search(query);
       })
}
ngOnInit(): void {
  this.custmerService
  .getCustmers()
  .subscribe((custmers :Custmer[]) => {
      this.custmers = custmers;
     
      for(let i = 0; i < this.custmers.length; i++){        
        this.amounts+=this.custmers[i].amount;
       
      }
      console.log('----------------'+this.amounts)
      this.total = custmers.length;
      this.isDeleteLoading =custmers.map((c)=>({
        id:c.id,
        isLoading:false
      }));
    }
  )
      
}
delete(custmer: Custmer) {
  this.setIsLoanding(custmer, true);
  this.custmerService.deleteCustmer(custmer).subscribe(() => {
    this.custmers = this.custmers.filter((item) => item.id !== custmer.id);
    this.setIsLoanding(custmer, false);
  });
}
getIsDeleteLoading(custmer: Custmer) {
  return this.isDeleteLoading.find((c) => c.id === custmer.id)?.isLoading;
}
private setIsLoanding(custmer: Custmer, isLoading: boolean) {
  this.isDeleteLoading = this.isDeleteLoading.map((c) => {
    if (c.id === custmer.id) {
      return { ...c, isLoading };
    }
    return c;
  });
}

onQuery(event:any){
  this.searchQuerySubject.next(event.target.value);
}
search(query:string){
  this.custmerService.search(query)
        .subscribe((customers)=>{
          this.custmers = customers;
        });
}

}
