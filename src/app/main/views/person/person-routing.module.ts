import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonMainComponent} from './person-main/person-main.component';
import {PersonEditComponent} from '@views/person/person-edit/person-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: PersonMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: PersonEditComponent,
    outlet: 'popUp',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PersonRoutingModule {
}
