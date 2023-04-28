import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemmandeListComponent } from './demmande-list.component';

describe('DemmandeListComponent', () => {
  let component: DemmandeListComponent;
  let fixture: ComponentFixture<DemmandeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemmandeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemmandeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
