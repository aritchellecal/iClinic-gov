import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as frmStore from '../store';
import { Patient } from '../../models/patient.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MdcDialog, MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';
import { PatientVitalSignComponent } from '../dialogs/patient-vital-sign/patient-vital-sign.component';
@Component({
  selector: 'app-patient-collection',
  templateUrl: './patient-collection.component.html',
  styleUrls: ['./patient-collection.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PatientCollectionComponent implements OnInit {

  patients$: Observable<Patient[]>;
  patientID: any;
  patientFullName: string;
  patient: [];

  constructor(
    private store: Store<frmStore.PatientsState>,
    private dialog: MdcDialog
  ) { }

  ngOnInit() {
    this.patients$ = this.store.select(frmStore.getAllPatients);
    // this.store.dispatch(new frmStore.LoadPatients());

  }

  openConsultationDialog(id, fN) {
    const dialogRef =  this.dialog.open(PatientVitalSignComponent, {
      clickOutsideToClose: false,
      data: {patientID: id, patientFullName: fN}});

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
  }
}
