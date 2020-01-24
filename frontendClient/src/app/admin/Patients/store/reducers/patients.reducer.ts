import * as fromPatient from '../actions/patients.action';
import { Patient } from 'src/app/admin/models/patient.model';




export interface PatientState {

  // data: Patient[];
  entities: {[id: number]: Patient};
  loaded: boolean;
  loading: boolean;

}
export const initialState = {
  // data: [],
  entities: {},
  loaded: false,
  loading: false
};

export function patientReducer(
  state = initialState,
  action: fromPatient.PatientsAction
): PatientState {

  switch (action.type) {
    case fromPatient.LOAD_PATIENTS : {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromPatient.LOAD_PATIENTS_SUCCESS : {
      const patient = action.payload;

      const entities = patient.reduce((entities: {[id: number]: Patient}, patient: Patient) => {
        return {
          ...entities, [patient.id]: patient,
        };
      },
      {
        ...state.entities,
      });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }
    case fromPatient.LOAD_PATIENTS_FAIL : {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    default: {
      return state;
    }
  }
}
export const getPatientLoading = (state: PatientState) => state.loading;
export const getPatientLoaded = (state: PatientState) => state.loaded;
export const getPatientsEntities = (state: PatientState) => state.entities;

