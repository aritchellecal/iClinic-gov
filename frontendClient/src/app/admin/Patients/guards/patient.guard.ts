import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable, of } from 'rxjs';
import * as fromStore from '../store';
import { Store } from '@ngrx/store';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientGuard implements CanActivate {
  constructor(private store: Store<fromStore.PatientsState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
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
