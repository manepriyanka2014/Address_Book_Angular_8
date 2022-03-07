import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './component/add-address/add-address.component';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [
  {path: '' , component: DashBoardComponent},
  {path: 'address' , component: AddAddressComponent},
  {path: 'header', component:HeaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
