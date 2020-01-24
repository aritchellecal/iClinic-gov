import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCollectionComponent } from './patient-collection.component';

describe('PatientCollectionComponent', () => {
  let component: PatientCollectionComponent;
  let fixture: ComponentFixture<PatientCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
