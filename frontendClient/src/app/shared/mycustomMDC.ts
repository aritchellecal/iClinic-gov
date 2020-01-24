import { NgModule } from '@angular/core';
import {
  MdcFabModule,
  MdcIconModule,
  MdcMenuModule,
  MdcButtonModule,
  MdcDrawerModule,
  MdcListModule,
  MdcFormFieldModule,
  MdcTopAppBarModule,
  MdcTabBarModule,
  MdcTextFieldModule,
  MdcDialogModule,
  MdcElevationModule,
  MdcRippleModule,
  MdcCardModule,
  MdcCheckboxModule,
  MdcChipsModule,
  MdcIconButtonModule,
  MdcTypographyModule
} from '@angular-mdc/web';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    MdcFabModule,
    MdcIconModule,
    MdcMenuModule,
    MdcButtonModule,
    MdcDrawerModule,
    MdcListModule,
    MdcFormFieldModule,
    MdcTopAppBarModule,
    MdcTabBarModule,
    MdcTextFieldModule,
    MdcDialogModule,
    MdcElevationModule,
    MdcRippleModule,
    MdcCardModule,
    MdcCheckboxModule,
    MdcChipsModule,
    MdcIconButtonModule,
    MdcTypographyModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MycustomMDC { }
