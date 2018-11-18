import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div style="text-align:center; align-content:center">
    <h1>{{title}}</h1>
    <input #newItem
      (keyup.enter)="addItem(newItem.value)">
 
    <button (click)="addItem(newItem.value)">Add</button>
    <button (click)="clearItem()">Reset</button>
    
 
    <ul><li *ngFor="let item of items">{{item}}</li></ul>
 </div>
  `
})
export class AppComponent {
  title = 'To Do List';
  items = ['Do Homework', 'Surfing Internet', 'Buy dairy products'];
  addItem(newItem: string) {
    if (newItem) {
      this.items.push(newItem);
    }
  }
  clearItem() {
    this.items = [];
  }
  
}
