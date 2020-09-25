import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {PersonStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Person} from '@models/vo/person';

@Component({
  selector: 'app-person-main',
  templateUrl: 'person-main.component.html',
  styles: []
})
export class PersonMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<Person> = PersonStoreActions.actions;

  ngOnInit() {
  }
}
