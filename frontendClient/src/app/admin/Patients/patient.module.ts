import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';
import { DatePipe } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MycustomMDC } from 'src/app/shared/mycustomMDC';
import { FlexLayoutModule } from '@angular/flex-layout';
import { reducers, effects } from './store';

import { PatientComponent } from './patient/patient.component';
import { PatientformComponent } from './patientform/patientform.component';
import { PatientCollectionComponent } from './patient-collection/patient-collection.component';
import { NavigationbarComponent } from '../layouts/navigationbar/navigationbar.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

import * as fromGuards from './guards';
import { PatientVitalSignComponent } from './dialogs/patient-vital-sign/patient-vital-sign.component';
import { QueueComponent } from '../queue/queue.component';
import { MaterialDesignModule } from 'src/app/shared/MaterialDesignModule';


const routes: Routes = [
  {
    path: '',
    component:  NavigationbarComponent,
    children: [
      {
        path: '', redirectTo: 'patient', pathMatch: 'full'
      },
      {
        path: 'patient',
        canActivate: [fromGuards.PatientGuard],
        component: PatientComponent,
        children: [
          {
            path: 'new',
            component: PatientformComponent
          },
          {
            path: 'list',
            canActivate: [fromGuards.PatientGuard],
            component: PatientCollectionComponent
          },
          {
            path: 'list/:patientID',
            canActivate: [fromGuards.PatientExistGuard],
            component: PatientProfileComponent
          },
          {
            path: '', redirectTo: 'list', pathMatch: 'full'
          },
          {
            path: '**',
            component: PageNotFoundComponent
          }
        ]
      },
      {
        path: 'queue',
        component: QueueComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }

    ]
  },
]
@NgModule({
  declarations: [
    PatientComponent,
    PatientformComponent,
    PatientCollectionComponent,
    PatientCollectionComponent,
    NavigationbarComponent,
    PageNotFoundComponent,
    PatientProfileComponent,
    PatientVitalSignComponent,
    QueueComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('patients', reducers),
    EffectsModule.forFeature(effects),
    MycustomMDC,
    MaterialDesignModule,
    FlexLayoutModule,
    AvatarModule,
  ],
  providers: [fromGuards.guards, DatePipe],
  exports: [RouterModule],
  entryComponents: [PatientVitalSignComponent]
})
export class PatientModule { }
