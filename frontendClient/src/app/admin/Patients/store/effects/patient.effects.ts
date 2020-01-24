import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as frmService from '../../../services';
import * as patientActions from './../actions/patients.action';
import { of } from 'rxjs';


@Injectable()
export class PatientEffects {

  constructor(
    private actions$: Actions,
    private patientService: frmService.PatientService
  ) {}

  @Effect()
  loadPatients$ = this.actions$.pipe(
    ofType<patientActions.LoadPatients>(patientActions.LOAD_PATIENTS),
    switchMap(() => {
      return this.patientService
      .getPatient()
      .pipe(
        map(patients => new patientActions.LoadPatientsSuccess(patients)),
        catchError(error => of(new patientActions.LoadPatientsFail(error)))
      );
    })
  );
}
