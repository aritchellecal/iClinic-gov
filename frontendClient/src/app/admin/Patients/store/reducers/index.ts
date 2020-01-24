import * as fromPatient from './patients.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface PatientsState {
  patients: fromPatient.PatientState;
}

export const reducers: ActionReducerMap<PatientsState> = {
  patients: fromPatient.patientReducer,
};

export const getAllPatientsState = createFeatureSelector<PatientsState>('patients');
