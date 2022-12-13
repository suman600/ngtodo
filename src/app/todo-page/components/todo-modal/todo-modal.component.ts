import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectEditTodo, selectLoadTodo, selectTodoModal } from '../../../application-states/todo.selector';
import { todoModalbehavior, addTodo, addTodoSuccess, editTodo } from '../../../application-states/todo.action';
import { TodoDataModel, Modal } from 'src/app/core/todo.adaper';



@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss'],
})
export class TodoModalComponent implements OnInit {

  show: boolean = false;
  title: string = '';
  action: string = '';


  selectTodoModal$ = this.store.select(selectTodoModal);
  selectLoadTodo$ = this.store.select(selectLoadTodo);
  editTodoData$ = this.store.select(selectEditTodo);


  constructor(
    private store: Store<{}>,
    private fb: FormBuilder
  ) {

  }

  // resetTodoObj = (): TodoDataModel => {
  //   return {
  //     'id': '',
  //     'title': '',
  //     'completed': false,
  //     'deleted': false
  //   }
  // }
  // todo: TodoDataModel = this.resetTodoObj()
  ngOnInit(): void {
    this.selectTodoModal$.subscribe({
      next: (value) => {
        this.show = value.show;
        if (value.type == 'addMode') {
          this.title = 'Add Todo';
          this.action = 'Add Todo';
        } else if (value.type == 'editMode') {
          this.title = 'Edit Todo';
          this.action = 'Update Todo';
        }
      },
    });


    // this.editTodoData$.subscribe({
    //   next: (data) => {
    //     if (data.id && !this.isUpdate) {
    //       this.todo = data;
    //       this.isUpdate = true;
    //       this.todoForm.controls['todoText'].setValue(data.title)
    //         ;
    //     }
    //   }
    // })
  }

  todoForm = this.fb.group({
    todoText: ['', Validators.required],
  });

  closeTodoModal() {
    this.store.dispatch(todoModalbehavior({ payload: { show: false, type: '', } })
    );
  }



  // createTodoData() {

  //   this.selectLoadTodo$.subscribe(data => {
  //     if (data?.length > 0) {

  //     }

  //   });

  // }

  onSubmit() {
    // this.createTodoData();
    // if (!this.todo?.id && !this.isUpdate) {
    //   this.store.dispatch(
    //     addTodo({
    //       id: Date.now().toString(),
    //       title: this.todoForm.value.todoText,
    //       completed: false,
    //       deleted: false
    //     })
    //   );
    // }
    // else {
    //   this.store.dispatch(editTodo({
    //     id: this.todo.id,
    //     title: this.todoForm.value.todoText,
    //     completed: this.todo.completed,
    //     deleted: this.todo.deleted
    //   }));
    // }
    // this.todo = this.resetTodoObj();
    // this.todoForm.reset();
    // this.closeTodoModal();
  }

}
