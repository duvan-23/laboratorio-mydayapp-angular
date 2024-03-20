import { Injectable } from '@angular/core';
import { Task} from '../model/task.model';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  nameStorage= 'mydayapp-angular';
  tasks:Task[]=[];
  constructor() { }

  addTaks(task: Task){
    const storage = localStorage.getItem('mydayapp-angular');
    if(storage){
      this.tasks = JSON.parse(storage);
    }
    this.tasks.push(task);
    localStorage.setItem(this.nameStorage,JSON.stringify(this.tasks));
    return this.tasks;
  }
  readTaks(){
    const storage = localStorage.getItem('mydayapp-angular');
    if(storage){
      this.tasks = JSON.parse(storage);
    }
    return this.tasks;
  }

  updateTaskComplete(i:number){
    this.readTaks();
    this.tasks[i].completed=!this.tasks[i].completed;
    localStorage.setItem(this.nameStorage,JSON.stringify(this.tasks));
    return this.tasks;
  }
  updateTaskEdit(i:number){
    this.readTaks();
    this.tasks[i].editing=!this.tasks[i].editing;
    localStorage.setItem(this.nameStorage,JSON.stringify(this.tasks));
    return this.tasks;
  }
  updateTaskEditTitle(i:number, text:string){
    this.readTaks();
    this.tasks[i].title=text;
    this.tasks[i].editing=false;
    localStorage.setItem(this.nameStorage,JSON.stringify(this.tasks));
    return this.tasks;
  }
  updateTaskEditEsc(i:number){
    this.readTaks();
    this.tasks[i].editing=false;
    localStorage.setItem(this.nameStorage,JSON.stringify(this.tasks));
    return this.tasks;
  }
  delateTaskCompleted(){
    this.readTaks();
    this.tasks = this.tasks.filter((item)=>!item.completed);
    localStorage.setItem(this.nameStorage,JSON.stringify(this.tasks));
    return this.tasks;
  }
}
