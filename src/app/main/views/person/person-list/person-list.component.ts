import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {PersonStoreActions, PersonStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Person} from '@models/vo/person';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-person-list',
  templateUrl: `person-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonListComponent implements OnInit {


  collection$: Observable<Person[]>;
  cols: any;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('PersonListComponent.constructor()');
  }

  ngOnInit() {
    console.log('PersonListComponent.ngOnInit()');

    this.collection$ = this.store$.select(
      PersonStoreSelectors.selectAll
    ).pipe(
      tap(values => {
        if (values && values.length > 0) {
          this.cols = Object.keys(values[0]);
        }
      })
    );

    this.store$.dispatch(
      PersonStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item) {
    console.log('PersonListComponent.onEdit()');

    const data: PopUpData<Person> = {
      item,
      props: {title: 'Edit Person', route: 'person'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['person', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value) {
    console.log('PersonListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<Person> = {
      item,
      props: {title: 'Copy Person', route: 'person'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['person', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item) {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(PersonStoreActions.DeleteRequest({item}));
      }
    });

  }

}
