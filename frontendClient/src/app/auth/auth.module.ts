import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { MycustomMDC } from '../shared/mycustomMDC';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MycustomMDC,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class AuthModule { }
