import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Custmer } from '../models/custmer.model';
import { CustmerService } from '../services/custmer.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-edit-custmer',
  templateUrl: './edit-custmer.component.html',
  styleUrls: ['./edit-custmer.component.css'],
})
export class EditCustmerComponent implements OnInit {
  custmerEditForm: FormGroup;
  isLoading = false;
  custmer?: Custmer;

  constructor(
    private formBuilder: FormBuilder,
    private custmerService: CustmerService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.custmerEditForm = this.formBuilder.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z]{4,50}$')],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z]{4,50}$')],
      ],
      phone: [
        '',
        [Validators.required, Validators.pattern('^\\+212[567]\\d{8}$')],
      ],
      email: ['', [Validators.required]],
      gender: ['', Validators.required],
      type: ['', Validators.required],
      address: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.minLength(99)]],
      // accountNumber: [this.generateAccountNumber(), [Validators.required]],
    });
  }
  ngOnInit() {
    this.activeRoute.params
      .pipe(
        switchMap((params) => this.custmerService.getCustmerById(params['id']))
      )
      .subscribe({
        next: (custmer) => {
          this.custmer = custmer ?? {};
          this.custmerEditForm.patchValue({
            firstName: custmer.firstName,
            lastName: custmer.lastName,
            phone: custmer.phone,
            email: custmer.email,
            gender: custmer.gender,
            type: custmer.type,
            address: custmer.address,
            amount: custmer.amount,
            accountNumber: custmer.accountNumber,
          });
        },
        error: () => this.router.navigate(['/not-found']),
      });
  }
  getControl(controlName: string) {
    return this.custmerEditForm.get(controlName);
  }

  editCustomer(event: any) {
    if (this.custmerEditForm.valid) {
      const updatedCustmer = { ...this.custmer, ...this.custmerEditForm.value };
      this.isLoading = true;
      this.custmerService.updateCustmer(updatedCustmer).subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/']);
        },
        error: () => {
          this.isLoading = false;
          console.log('Failed to update customer.');
        },
      });
    }
  }
  canSave(): boolean {
    return this.custmerEditForm.dirty && this.custmerEditForm.valid;
  }
  
}
