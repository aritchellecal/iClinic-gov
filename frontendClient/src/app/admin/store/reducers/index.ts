import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as frmRouter from '@ngrx/router-store';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';


export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}
export interface State {
  routerReducer: frmRouter.RouterReducerState<RouterStateUrl>;
}

export const reducer: ActionReducerMap<State> = {
  routerReducer: frmRouter.routerReducer
};

export const getRouterState = createFeatureSelector<frmRouter.RouterReducerState<RouterStateUrl>>
('routerReducer');

export class CustomSerializer implements frmRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }

    const { params } = state;

    return { url, queryParams, params};
  }
}
