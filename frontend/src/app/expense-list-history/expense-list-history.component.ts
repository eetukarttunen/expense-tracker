import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-expense-list-history',
  templateUrl: './expense-list-history.component.html',
  styleUrls: ['./expense-list-history.component.css']
})
export class ExpenseListHistoryComponent implements OnInit {
  expenses: any[] = [];
  groupedExpenses: { [key: string]: any[] } = {};
  currentView: string = 'currentMonth'; // Default to 'history'
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.http.get<any>('http://localhost:3000/api/expenses').subscribe((data) => {
      this.expenses = data.expenses;
      this.groupExpensesByMonthYear(this.expenses);
    });
  }

  getDateFormatted(expense: any): string {
    if (expense.customDate) {
      return expense.customDate;
    } else {
      return `${expense.day} ${expense.month} ${expense.year}`;
    }
  }

  deleteExpense(expenseId: number): void {
    if (confirm('Are you sure you want to delete this expense?')) {
      this.http.delete(`http://localhost:3000/api/expenses/${expenseId}`).subscribe(
        () => {
          this.loadExpenses();
        },
        (error) => {
          console.error('Error deleting expense:', error);
        }
      );
    }
  }

  calculateMonthlyTotal(expenses: any[]): number {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  }  

  groupExpensesByMonthYear(expenses: any[]): void {
    this.groupedExpenses = {};
    for (const expense of expenses) {
      const key = `${expense.year}-${expense.month}`;
      if (!this.groupedExpenses[key]) {
        this.groupedExpenses[key] = [];
      }
      this.groupedExpenses[key].push(expense);
    }
  }

  getGroupedExpenseKeys(): string[] {
    return Object.keys(this.groupedExpenses).sort((a, b) => {
      const [yearA, monthA] = a.split('-');
      const [yearB, monthB] = b.split('-');
      if (yearA === yearB) {
        return +monthA - +monthB;
      } else {
        return +yearA - +yearB;
      }
    });
  }
}
