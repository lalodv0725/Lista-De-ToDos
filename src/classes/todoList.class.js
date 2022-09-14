import { Todo } from "./todo.class";

export class TodoList{
    todos;

    constructor(){
        //this.todos = [];
        this.recuperarLocalStorage();
    }

    nuevoTodo(tarea){
        this.todos.push(tarea);
        this.guardarLocalStorage();
    }

    eliminarTodo(idTodo){
        this.todos = this.todos.filter((tarea) => tarea.id != idTodo);
        console.log('Elemento eliminado:',idTodo);
        this.guardarLocalStorage();
    }

    marcarCompletado(idTodo){
        const elementoCompletado = this.todos.find((tarea) => tarea.id == idTodo);
        elementoCompletado.completado = !elementoCompletado.completado;
        this.guardarLocalStorage();
        console.log('Elemento Des/finalizado:',idTodo);       
    }

    eliminarCompletados(){
        this.todos = this.todos.filter((tarea) => tarea.completado == false);
        console.log('Elemento Completados han sido ELIMINADOS');
        this.guardarLocalStorage();
        console.log('Elementos sin terminar:',this.todos);        
    }

    guardarLocalStorage(){
        localStorage.setItem('listaTodos', JSON.stringify(this.todos));
    }

    recuperarLocalStorage(){
        // if(localStorage.getItem('listaTodos')) {
        //     this.todos = JSON.parse(localStorage.getItem('listaTodos'));
        //     console.log('carga LocalStorage:',this.todos);
        //     console.log(typeof this.todos);
        // }else{
        //     this.todos = [];
        // }

        this.todos = (localStorage.getItem('listaTodos')) 
                        ? this.todos = JSON.parse(localStorage.getItem('listaTodos'))
                        : this.todos = [];

        this.todos = this.todos.map(obj => Todo.recostruyeTodo(obj));
    }
}