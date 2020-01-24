import { PatientGuard } from './patient.guard';
import { PatientExistGuard } from './patient-exist.guard';

export const guards: any[] = [PatientGuard, PatientExistGuard];

export * from './patient.guard';
export * from './patient-exist.guard';

