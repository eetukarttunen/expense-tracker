import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-expense-add',
  templateUrl: './expense-add.component.html',
  styleUrls: ['./expense-add.component.css']
})
export class ExpenseAddComponent {
  newExpense: any = {};
  useCustomDate: boolean = false; // Assume custom date is not used by default

  addExpense() {
    if (!this.useCustomDate) {
      // Use the current date
      this.newExpense.day = new Date().getDate();
      this.newExpense.month = this.getMonthName(new Date().getMonth());
      this.newExpense.year = new Date().getFullYear();
      this.newExpense.customDate = null; // Clear the customDate field
    } else {
      // Check if customDate is valid
      if (!this.newExpense.customDate) {
        alert('Please select a valid custom date or uncheck the custom date option.');
        return;
      }
      const customDateParts = this.newExpense.customDate.split('-');
      if (customDateParts.length !== 3) {
        alert('Custom date format is invalid. Please use YYYY-MM-DD.');
        return;
      }
      const monthIndex = parseInt(customDateParts[1]) - 1;
      if (monthIndex < 0 || monthIndex > 11) {
        alert('Custom date month is invalid. Please enter a valid month.');
        return;
      }
      this.newExpense.day = parseInt(customDateParts[2]);
      this.newExpense.month = this.getMonthName(monthIndex);
      this.newExpense.year = parseInt(customDateParts[0]);
      this.newExpense.customDate = null; // Clear the customDate field
    }
  
    // Check if any of the fields are empty
    if (!this.newExpense.amount || !this.newExpense.category || !this.newExpense.description) {
      alert('Please fill in all mandatory fields.');
      return;
    }
  
    axios.post('http://localhost:3000/api/expenses', this.newExpense)
      .then(response => {
        console.log('Expense added:', response.data);
        // Optionally, reset the form or perform any necessary actions
        this.newExpense = {}; // Reset the form fields
        this.useCustomDate = false; // Reset the custom date option
      })
      .catch(error => {
        console.error('Error adding expense:', error);
      });
  }
  

  getMonthName(monthNumber: number): string {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[monthNumber];
  }
}
