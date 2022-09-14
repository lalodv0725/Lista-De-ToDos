//import { Todo } from "./classes/todo.class";
//import { TodoList } from "./classes/todoList.class";
import { Todo, TodoList } from "./classes/index";
import { crearTodoHtml } from "./js/componentes";

import "./styles.css";

export const todoList = new TodoList();

console.log(todoList.todos);

todoList.todos.forEach(tarea => {
    crearTodoHtml(tarea);
    tarea.imprimirClase();
});

//todoList.todos[0].imprimirClase();



//const tarea = new Todo('Aprender JavaScript');
// tarea.completado=false;
// const tarea2 = new Todo('Comprar cosas');

//console.log('Tarea:',tarea);

// todoList.nuevoTodo(tarea);
// todoList.nuevoTodo(tarea2);

//console.log('TodoList',todoList);

//crearTodoHtml(tarea);

// localStorage.setItem('saludo','Hola Mundo LocalStorage123');
// sessionStorage.setItem('saludo','Hola Mundo LocalStorage123');

// setTimeout(() => {
//     localStorage.removeItem('saludo')
// },5000);

// setTimeout(() => {
//     sessionStorage.removeItem('saludo')
// },5000);


