import { TodoList } from './../../../models/todo-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<TodoList> = []

  todo: TodoList = {
    id: 0,
    title: '',
    done: false
  }

  constructor() { }

  ngOnInit(): void {
    let itens: any = localStorage.getItem('todos')
    let todos = JSON.parse(itens)
    if (!todos) {
      this.todos = []
    } else {
      this.todos = todos
    }
  }


  addTodo(title: string) {
    const id = this.todos.length + 1
    this.todos.push({
      id: id,
      title: title,
      done: false
    })
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  removeTodo(event: TodoList) {
    let index = this.todos.indexOf(event)
    this.todos.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
