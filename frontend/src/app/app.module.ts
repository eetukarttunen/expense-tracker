import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseAddComponent } from './expense-add/expense-add.component';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';


import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { CircularChartComponent } from './circular-chart/circular-chart.component';
import { ExpenseListHistoryComponent } from './expense-list-history/expense-list-history.component';
import { ExpenseListCurrentComponent } from './expense-list-current/expense-list-current.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    ExpenseAddComponent,
    ExpenseEditComponent,
    PageNotFoundComponent,
    DashboardComponent,
    NavbarComponent,
    BarChartComponent,
    LineChartComponent,
    CircularChartComponent,
    ExpenseListHistoryComponent,
    ExpenseListCurrentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
