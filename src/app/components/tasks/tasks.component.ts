import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { TASKS } from '../../mock-tasks'
import { Task } from '../../Task.interface'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[] = [];
  
  constructor(private Tasks:TaskService) { }

  ngOnInit(): void {
    this.Tasks.getTask().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
  


}
