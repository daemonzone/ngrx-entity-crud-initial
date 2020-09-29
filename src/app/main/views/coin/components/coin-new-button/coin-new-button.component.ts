import {Component, Input, OnInit} from '@angular/core';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Coin} from '@models/vo/coin';
import {RouterStoreActions} from '@root-store/router-store';
import {Store} from '@ngrx/store';
import {CoinStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';

@Component({
  selector: 'coin-new-button',
  templateUrl: './coin-new-button.component.html',
  styleUrls: []
})
export class CoinNewButtonComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
  }


  onNew() {
    console.log('CoinListComponent.onEdit()');

    const data: PopUpData<Coin> = {
      item: new Coin(),
      props: {title: 'New Coin', route: 'coin'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['coin', {outlets: {popUp: ['edit']}}],
      data
    }));

  }
}
