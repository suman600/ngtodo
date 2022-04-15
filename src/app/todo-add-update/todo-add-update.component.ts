import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { OpenModalService } from '../services/open-modal.service';
@Component({
  selector: 'app-todo-add-update',
  templateUrl: './todo-add-update.component.html',
  styleUrls: ['./todo-add-update.component.scss']
})
export class TodoAddUpdateComponent implements OnInit {

  constructor(private openModalService: OpenModalService) { }

  ngOnInit(): void {
    
  }

  

}
