export interface Enqueue {
  id?: number;
  patientID?: string;
  orderNumber?: number;
  queDate?: Date;
  status?: string;
  doctorsID?: string;
  secretaryID?: string;
  patient: {
      fullName?: string;
    }
  ;
}
