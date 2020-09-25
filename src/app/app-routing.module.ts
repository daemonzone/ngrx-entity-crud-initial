import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [{path: '', redirectTo: 'home', pathMatch: 'full'}, {path: 'home', loadChildren: () => import('./main/views/home/home.module').then(m => m.HomeModule)}, {path: 'coin', loadChildren: () => import('./main/views/coin/coin.module').then(m => m.CoinModule)}, {path: 'person', loadChildren: () => import('./main/views/person/person.module').then(m => m.PersonModule)},];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
