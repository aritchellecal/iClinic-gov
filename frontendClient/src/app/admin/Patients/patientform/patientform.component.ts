import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PatientService } from '../../services';

@Component({
  selector: 'app-patientform',
  templateUrl: './patientform.component.html',
  styleUrls: ['./patientform.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PatientformComponent implements OnInit {

  addPatientForm: FormGroup;
  public error = null;

  constructor(private formbuilder: FormBuilder,
              private patienservice: PatientService) {
    this.addPatientForm = this.formbuilder.group({
      patientID: [''],
      firstName: [''],
      lastName: [''],
      middleName: [''],
      contactNo: [''],
      exName: [''],
      bDate: [''],
      age: [''],
      gender: [''],
      course: [''],
      section: [''],
      yearLevel: [''],
      civilStatus: [''],
      religion: [''],
      barangay: [''],
      city: [''],
      state: [''],
      zcode: ['']
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    this.patienservice.savePatient(this.addPatientForm.value).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }
  handleError(error) {
    this.error = error.error.errors;
  }

}
