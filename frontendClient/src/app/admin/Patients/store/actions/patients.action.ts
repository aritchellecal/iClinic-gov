import { Action } from '@ngrx/store';
import { Patient } from 'src/app/admin/models/patient.model';

export const LOAD_PATIENTS = '[Patients] Load patient';
export const LOAD_PATIENTS_FAIL = '[Patients] Load Patient Fail';
export const LOAD_PATIENTS_SUCCESS = '[Patients] Load Patient Success';

export class LoadPatients implements Action {
  readonly type = LOAD_PATIENTS;
}

export class LoadPatientsFail implements Action {
  readonly type = LOAD_PATIENTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPatientsSuccess implements Action {
  readonly type = LOAD_PATIENTS_SUCCESS;
  constructor(public payload: Patient[]) {}
}

export type PatientsAction = LoadPatients | LoadPatientsFail | LoadPatientsSuccess;
