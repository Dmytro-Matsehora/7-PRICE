import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { IndexComponent } from './pages/index/index.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { FilterComponent } from './pages/index/filter/filter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    redirectTo: 'index'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule, CommonModule, FormsModule],
  exports: [RouterModule],
  declarations: [
    IndexComponent,
    AboutComponent,
    FilterComponent
  ]
})
export class AppRoutingModule { }
