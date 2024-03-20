import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Task} from '../../model/task.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  input = new FormControl('',{
    nonNullable:true,
    validators: [
      Validators.required
    ]
  })
  @Output() newItemEvent = new EventEmitter<Task>();
  addTask(){
    if (this.input.valid) {
      const value = this.input.value.trim();
      if (value!='') {
        const newtTask:Task = {
          id: Date.now(),
          title: value,
          completed: false
        }
        this.input.setValue("");
        this.newItemEvent.emit(newtTask);
      }
    }
  }
}

