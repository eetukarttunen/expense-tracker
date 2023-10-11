import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-expense-edit',
  templateUrl: './expense-edit.component.html',
  styleUrls: ['./expense-edit.component.css']
})
export class ExpenseEditComponent implements OnInit {
  editedExpense: any = {}; // Initialize editedExpense directly
  expenseId: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.expenseId = NaN; // Initialize expenseId as NaN
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.expenseId = +params['id'];
      console.log(params['id']);
      this.editedExpense.id = this.expenseId; // Set the ID directly
      console.log('Expense ID:', this.expenseId); // Debugging line
      this.fetchExpenseData();
    });
  }
  

  private fetchExpenseData(): void {
    axios.get('http://localhost:3000/api/expenses')
      .then(response => {
        const matchingExpense = response.data.expenses.find((expense: any) => expense.id === this.expenseId);

        if (matchingExpense) {
          this.editedExpense = { ...matchingExpense }; // Create a copy to avoid changing the original data
        } else {
          console.error('Expense with the specified ID not found.');
        }
      })
      .catch(error => {
        console.error('Error fetching the specific expense :D:', error);
      });
  }

  onSubmit(): void {
    const updateData = {
      id: this.expenseId, // Ensure that the ID is sent with the data
      day: this.editedExpense.day,
      month: this.editedExpense.month,
      year: this.editedExpense.year,
      category: this.editedExpense.category,
      amount: this.editedExpense.amount,
      description: this.editedExpense.description
    };
  
    axios
      .put(`http://localhost:3000/api/expenses/${this.expenseId}`, updateData)
      .then((response) => {
        console.log('Expense updated:', response.data);
        this.router.navigate(['/expenses']);
      })
      .catch((error) => {
        console.error('Error updating expense:', error);
      });
  }
  
}
