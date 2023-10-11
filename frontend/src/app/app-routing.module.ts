import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseAddComponent } from './expense-add/expense-add.component';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; // Import PageNotFoundComponent
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'expenses', component: ExpenseListComponent },
  { path: 'add', component: ExpenseAddComponent },
  { path: 'edit/:id', component: ExpenseEditComponent },
  { path: '', redirectTo: '/expenses', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for Page Not Found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
