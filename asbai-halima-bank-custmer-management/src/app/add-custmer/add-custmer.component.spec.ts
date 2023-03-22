import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustmerComponent } from './add-custmer.component';

describe('AddCustmerComponent', () => {
  let component: AddCustmerComponent;
  let fixture: ComponentFixture<AddCustmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCustmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
