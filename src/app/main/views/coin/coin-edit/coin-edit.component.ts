import {Component} from '@angular/core';
import {closePopUpAction, PopUpBaseComponent} from '@root-store/router-store/pop-up-base.component';
import {Coin} from '@models/vo/coin';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CoinStoreActions} from '@root-store/coin-store';


@Component({
  selector: 'app-coin-edit',
  templateUrl: './coin-edit.component.html',
  styles: [``]
})
export class CoinEditComponent extends PopUpBaseComponent<Coin> {

  form: FormGroup;
  id: FormControl;
  name: FormControl;
  value: FormControl;
  description: FormControl;

  lastItem: Coin;

  setItemPerform(value: Coin): void {
    this.lastItem = value;

    this.makeForm(value);

    this.form.reset(value);
  }

  makeForm(value: Coin) {
    this.id = this.fb.control({value: '', disabled: true}, [Validators.required]);
    this.name = this.fb.control({value: '', disabled: false}, [Validators.required]);
    this.value = this.fb.control({value: '', disabled: false}, [Validators.required]);
    this.description = this.fb.control({value: '', disabled: false}, [Validators.required]);

    this.form = this.fb.group({
      // id: this.id,
      name: this.name,
      value: this.value,
      description: this.description
    });
  }

  acceptPerform(value: Coin): void {
    const item = {...this.lastItem, ...value};

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
