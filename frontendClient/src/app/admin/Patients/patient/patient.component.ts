import { Component, OnInit } from '@angular/core';
import * as fromStore from '../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  constructor(private store: Store<fromStore.PatientsState>) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadPatients());
  }

}
