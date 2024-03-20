import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Task} from '../../model/task.model';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() task!: Task[];
  @Input() ruta!: string;
  @Output() delete = new EventEmitter();
  contador:number = 0;
  completed:number =0;
  ngOnChanges(){
    this.contador = 0;
    this.completed = 0;
    this.task.forEach((element:Task) => {
      if (!element.completed) {
        this.contador++;
      }else if(element.completed){
        this.completed++;
      }
    });
  }
  deleteCompleted(){
    this.delete.emit();
  }
}
