import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Coin} from '@models/vo/coin';
import {FormGroup, FormControl} from '@angular/forms';
import {CoinStoreActions} from '@root-store/coin-store';


@Component({
  selector: 'app-coin-edit',
  templateUrl: './coin-edit.component.html',
  styles: [``]
})
export class CoinEditComponent extends PopUpBaseComponent<Coin> {

  form: FormGroup;

  setItemPerform(value: Coin): void {
    this.form = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      val: new FormControl(''),
      description: new FormControl('')
    });
  }

  acceptPerform(item: Coin): void {
    if (item.id) {
      this.store$.dispatch(CoinStoreActions.EditRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction(this.route)
        ]
      }));
    } else {
      this.store$.dispatch(CoinStoreActions.CreateRequest({
        item, onResult: [
          // azione che verrà invocata al result della chiamata all'interno dell'effect.
          // chiude la popUP.
          // closePopUpAction: metodo per la creazione dell'azione di chiusura della popUP
          closePopUpAction(this.route)
        ]
      }));
    }
  }

  // cancel(): void {
  //   this.store$.dispatch(closePopUpAction(this.route));
  // }

}
