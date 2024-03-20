import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import {Task} from '../../model/task.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  data = false;
  task!:any;
  contador:number = 0;
  private service = inject(StorageService);
  ruta!:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.task = this.service.readTaks();
    console.log(this.router.url);
    if(this.task.length>0){
      this.data= true;
    }
    this.ruta = this.router.url;
    if (this.ruta == "/pending") {
      this.task = this.task.filter((item:Task)=>!item.completed);
    }else if(this.ruta == "/completed"){
      this.task = this.task.filter((item:Task)=>item.completed);
    }
  }

  addTask(task:any){
    this.task = this.service.addTaks(task);
    this.data = (this.task.length>0);
  }

  updateTask(i :number){
    this.task= this.service.updateTaskComplete(i);
  }
  editar(i:number){
    this.task= this.service.updateTaskEdit(i);
  }
  updateTaskText(i:number, event:Event){
    const input = event.target as HTMLInputElement;
    this.task= this.service.updateTaskEditTitle(i, input.value.trim());
  }
  updateTaskTextEsc(i:number){
    this.task= this.service.updateTaskEditEsc(i);
  }
  deleteCompleted(){
    this.task = this.service.delateTaskCompleted();
  }
}
