import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Coin} from '@models/vo/coin';
import {CoinService} from '@services/coin.service';
import {createRequestEffect, deleteRequestEffect, editRequestEffect, searchRequestEffect} from 'ngrx-entity-crud';


@Injectable()
export class CoinStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: CoinService) {
    }

    @Effect()
    searchRequestEffect$: Observable<Action> = searchRequestEffect<Coin>(this.actions$, actions, this.service);

    @Effect()
    deleteRequestEffect$: Observable<Action> = deleteRequestEffect<Coin>(this.actions$, actions, this.service, Coin);

    @Effect()
    createRequestEffect$: Observable<Action> = createRequestEffect<Coin>(this.actions$, actions, this.service);

    @Effect()
    editRequestEffect$: Observable<Action> = editRequestEffect<Coin>(this.actions$, actions, this.service);

    @Effect()
    selectRequestEffect$: Observable<Action> = editRequestEffect<Coin>(this.actions$, actions, this.service);

}
