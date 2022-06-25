import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Task} from '../Task.interface'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/task'
  constructor(private http:HttpClient) { }

  getTask():Observable<Task[]> { 
    return this.http.get<Task[]>(this.apiUrl)
    
  }
}
