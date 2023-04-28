import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreedemmandeComponent } from './creedemmande.component';

describe('CreedemmandeComponent', () => {
  let component: CreedemmandeComponent;
  let fixture: ComponentFixture<CreedemmandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreedemmandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreedemmandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
