import { Component, OnInit, Inject } from '@angular/core';
import { MdcDialogRef, MDC_DIALOG_DATA, MdcDialog } from '@angular-mdc/web';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient-vital-sign',
  templateUrl: './patient-vital-sign.component.html',
  styleUrls: ['./patient-vital-sign.component.scss',
              '../../inputs.scss']
})


export class PatientVitalSignComponent implements OnInit {

  addVitalSignsForm: FormGroup;


  private forTime = this.datePipe.transform(new Date(), 'HH:mm');
  private forDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  constructor(private dialogRef: MdcDialogRef<PatientVitalSignComponent>,
              @Inject (MDC_DIALOG_DATA) public data: any,
              private datePipe: DatePipe,
              private formbuilder: FormBuilder) {

                this.addVitalSignsForm = this.formbuilder.group({
                    bodyTemp: [], bodyTempDate: [this.forDate], bodyTempTime: [this.forTime],
                    resRate: [], resRateDate: [this.forDate], resRateTime: [this.forTime],
                    pulseRate: [], pulseRateDate: [this.forDate], pulseRateTime: [this.forTime],
                    bloodPres: [], bloodPresDate: [this.forDate], bloodPresTime: [this.forTime],
                    patientID: [this.data.patientID], fullName: [this.data.patientFullName]
                });
              }




  closeDialog(): void {
    // this.dialogRef.close('Hello Chelle');
  }
  ngOnInit() {

  }

  onSubmit() {
    console.log(this.addVitalSignsForm.value);
  }



}
