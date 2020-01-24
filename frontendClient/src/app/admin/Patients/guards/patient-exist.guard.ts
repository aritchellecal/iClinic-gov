import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, from } from 'rxjs';


import * as fromStore from '../store';
import { Patient } from '../../models/patient.model';
import { Store } from '@ngrx/store';
import { map, take, tap, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientExistGuard implements CanActivate {

  constructor(private store: Store<fromStore.PatientsState>) {}

  canActivate(
    route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.patientID, 10);
        return this.hasPatient(id);
      })
    );
  }

  hasPatient(id: number): Observable<boolean> {
    return this.store.select(fromStore.getPatientsEntities).pipe(
      map((entities: { [key: number]: Patient }) => !!entities[id]),
      take(1)
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getPatientsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadPatients());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

}
