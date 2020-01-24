// import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// MDC Component
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule, ActionReducer, MetaReducer} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

import { reducer, CustomSerializer } from './admin/store/reducers';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientProfileComponent } from './shaed/component/patient-profile/patient-profile.component';


export function debug(reduce: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    // console.log('state', state);
    // console.log('action', action);
    return reduce(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
    PatientProfileComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducer, { metaReducers }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    FlexLayoutModule
  ],
  providers: [{provide: RouterStateSerializer, useClass: CustomSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
