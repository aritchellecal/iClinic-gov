import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as fromStore from '../store';
import { Patient } from './../../models/patient.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss', '../inputs.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PatientProfileComponent implements OnInit {

  patient$: Observable<Patient>;

  constructor(private store: Store<fromStore.PatientsState>) { }

  ngOnInit() {
    this.patient$ = this.store.select(fromStore.getSelectedPatient);
  }

}
