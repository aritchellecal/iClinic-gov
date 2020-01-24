export interface PatientDetails {
  id?: number;
  patientID?: string;
  fullName?: string;
  religion?: string;
  civilStatus?: string;
  course?: string;
  section?: string;
  yearLevel?: string;
  [key: string]: any;
}
