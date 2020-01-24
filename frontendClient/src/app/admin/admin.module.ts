import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../shared/MaterialDesignModule';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientCollectionComponent } from './Patients/patient-collection/patient-collection.component';
import { PatientformComponent } from './Patients/patientform/patientform.component';
import { MycustomMDC } from '../shared/mycustomMDC';
import { AdminComponent } from './admin.component';
import { NavigationbarComponent } from './layouts/navigationbar/navigationbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QueueComponent } from './queue/queue.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AvatarModule } from 'ngx-avatar';
import { JoditAngularModule } from 'jodit-angular';



@NgModule({
  declarations: [
    DashboardComponent,
    PatientCollectionComponent,
    PatientformComponent,
    AdminComponent,
    NavigationbarComponent,
    PageNotFoundComponent,
    QueueComponent,
    DoctorsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialDesignModule,
    MycustomMDC,
    AvatarModule,
    JoditAngularModule
  ]
})
export class AdminModule { }
