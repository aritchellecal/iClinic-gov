import { forwardRef, Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './../models/patient.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private url = '/api';
  constructor(
    private http: HttpClient
  ) { }

  getPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url + /patient/)
    .pipe(catchError((error?: any) => Observable
    .throw(error.json())));
  }

  savePatient(data) {
    return this.http.post<Patient[]>(this.url + /patient/, data);
  }
  deletePatient(data) {
    return this.http.delete(this.url + /delete/, data);
  }
  updatePatient(data) {
    return this.http.post(this.url + /update/, data);
  }
}
