import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as  fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromPatient from '../reducers/patients.reducer';
import { Patient } from '../../../models/patient.model';

export const getPatientState = createSelector(
  fromFeature.getAllPatientsState,
  (state: fromFeature.PatientsState)  => state.patients
  );

export const getPatientsEntities = createSelector(
  getPatientState, fromPatient.getPatientsEntities
  );

export const getSelectedPatient = createSelector(
    getPatientsEntities,
    fromRoot.getRouterState,
    (entities, router): Patient => {
      return router.state && entities[router.state.params.patientID];
    }
  );

export const getAllPatients = createSelector(
  getPatientsEntities, (entities) =>
    Object.keys(entities).map(id => entities[parseInt(id, 10)])
  );
export const getPatientsLoaded = createSelector(getPatientState, fromPatient.getPatientLoaded);
export const getPatientLoading = createSelector(getPatientState, fromPatient.getPatientLoading);
