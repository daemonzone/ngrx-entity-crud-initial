import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Person} from '@models/vo/person';
import {PersonService} from '@services/person.service';
import {createRequestEffect, deleteRequestEffect, editRequestEffect, searchRequestEffect} from 'ngrx-entity-crud';


@Injectable()
export class PersonStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: PersonService) {
    }

    @Effect()
    searchRequestEffect$: Observable<Action> = searchRequestEffect<Person>(this.actions$, actions, this.service);

    @Effect()
    deleteRequestEffect$: Observable<Action> = deleteRequestEffect<Person>(this.actions$, actions, this.service, Person);

    @Effect()
    createRequestEffect$: Observable<Action> = createRequestEffect<Person>(this.actions$, actions, this.service);

    @Effect()
    editRequestEffect$: Observable<Action> = editRequestEffect<Person>(this.actions$, actions, this.service);

    @Effect()
    selectRequestEffect$: Observable<Action> = editRequestEffect<Person>(this.actions$, actions, this.service);

}
