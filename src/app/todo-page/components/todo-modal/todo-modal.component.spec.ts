import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddUpdateComponent } from './todo-modal.component';

describe('TodoAddUpdateComponent', () => {
  let component: TodoAddUpdateComponent;
  let fixture: ComponentFixture<TodoAddUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAddUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
