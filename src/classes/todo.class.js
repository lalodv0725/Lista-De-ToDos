export class Todo {

    tarea;
    id;
    completado;
    fechaCreacion;

    static recostruyeTodo ({tarea,id,completado,fechaCreacion}){
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.fechaCreacion = fechaCreacion;

        return tempTodo;
    }

    constructor (tarea){
        this.tarea = tarea;

        this.id = new Date().getTime();
        this.completado = false;
        this.fechaCreacion = new Date();

    }

    imprimirClase(){
        console.log(`Todo: ${this.tarea} - ${this.id}`);
    }

}