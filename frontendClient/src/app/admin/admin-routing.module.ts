import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationbarComponent } from './layouts/navigationbar/navigationbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QueueComponent } from './queue/queue.component';
import { DoctorsComponent } from './doctors/doctors.component';


const routes: Routes = [
  {
    path: '',
    component: NavigationbarComponent,
    children: [
          {
            path: 'queue',
            component: QueueComponent
          },
          {
            path: 'doctor',
            component: DoctorsComponent
            },
          {
            path: '',
            component: QueueComponent
          },
          {
            path: '**',
            component: PageNotFoundComponent
          }
        ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
