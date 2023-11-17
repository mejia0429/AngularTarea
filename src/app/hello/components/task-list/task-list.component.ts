import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  ngOnInit(): void {
    this.tasks=localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')!): [];
  }

  onSubmit(formValue: Task){
    this.tasks.push(formValue);
    //console.log(this.tasks);
    localStorage.setItem('tasks',JSON.stringify(this.tasks))
  }

  onRemove(indice: number){
    this.tasks.splice(indice,1)
    localStorage.setItem('tasks',JSON.stringify(this.tasks))
  }
}
