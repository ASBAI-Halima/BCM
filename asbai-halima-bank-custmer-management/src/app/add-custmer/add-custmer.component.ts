import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Custmer } from '../models/custmer.model';
import { CustmerService } from '../services/custmer.service';

@Component({
  selector: 'app-add-custmer',
  templateUrl: './add-custmer.component.html',
  styleUrls: ['./add-custmer.component.css']
})
export class AddCustmerComponent {
  custmerForm :FormGroup;
  isLoading=false;
  

  constructor(
        private formBuilder:FormBuilder,
        private custmerService:CustmerService,
        private router:Router){
          this.custmerForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{4,50}$')]],
            lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{4,50}$')]],
            phone:['', [Validators.required , Validators.pattern('^\\+212[567]\\d{8}$')]],
            email: ['', [Validators.required]],
            gender: ['', Validators.required],
            type: ['', Validators.required],           
            address: ['', [Validators.required]],            
            amount:['', [Validators.required, Validators.minLength(99)]],
            accountNumber: [this.generateAccountNumber(), [Validators.required]]
          })
        }
      
    submit(){
      console.log(this.custmerForm.value);
      this.custmerService
      .addCustmer(this.custmerForm.value)
      .subscribe(()=>{
      this.isLoading=false;
      this.custmerForm.reset(); });
      this.router.navigate(['/'])
    }
    getControl(controlName: string){
      return this.custmerForm.get(controlName);
    }
    canSubmit():boolean{
      return this.custmerForm.dirty && this.custmerForm.valid;
    }
    generateAccountNumber() {
      let accountNumber = '';
      for (let i = 0; i < 3; i++) {
        accountNumber += Math.floor(Math.random() * 9000) + 1000;
        if (i !== 2) {
          accountNumber += ' ';
        }
      }
      return accountNumber;
    }
}
