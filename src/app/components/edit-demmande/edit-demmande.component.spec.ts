import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDemmandeComponent } from './edit-demmande.component';

describe('EditDemmandeComponent', () => {
  let component: EditDemmandeComponent;
  let fixture: ComponentFixture<EditDemmandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDemmandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDemmandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
