import { todoList } from '../index';
import { Todo, } from "../classes";


//Referencias HTML
const divTodoList = document.querySelector('.todo-list');
const inputNuevoTodo = document.querySelector('.new-todo');
const buttonBorraCompletados = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const ulFiltrosAnchorTags = document.querySelectorAll('.filtro');


export const crearTodoHtml = (todo) => {

    const htmlTodo = `<li class="${todo.completado ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle check-tarea" type="checkbox" ${todo.completado ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    const divElementoLista = document.createElement('div');
    divElementoLista.innerHTML = htmlTodo;


    divTodoList.append(divElementoLista.firstElementChild);

    return divElementoLista.firstElementChild;
}

//Eventos
inputNuevoTodo.addEventListener('keyup', (evento) => {
    //console.log(evento);
    if (evento.keyCode === 13 && inputNuevoTodo.value != '') {

        console.log('Texto ingresado:', inputNuevoTodo.value);
        const tareaNueva = new Todo(inputNuevoTodo.value);

        todoList.nuevoTodo(tareaNueva);

        console.log(todoList);
        todoList.guardarLocalStorage();
        crearTodoHtml(tareaNueva);
        inputNuevoTodo.value = '';
    }
});

divTodoList.addEventListener('click', (evento) => {
    //console.log('click en el elemento, se puede eliminar o completar');
    //console.log(evento);
    //console.log(evento.target);
    //console.log(evento.target.localName);

    const htmlClikeado = evento.target.localName;
    const tareaClikeada = evento.target.parentElement.parentElement;
    const idTarea = tareaClikeada.getAttribute('data-id');

    //console.log('tareaClikeada:',tareaClikeada);

    if (htmlClikeado.includes('input')) {
        console.log('Check');//click en el check, marca como completada la tarea
        tareaClikeada.classList.toggle('completed');
        todoList.marcarCompletado(idTarea);
    } else if (htmlClikeado.includes('button')) {
        console.log('Borrar');//click en el tache, elimina la tarea
        todoList.eliminarTodo(idTarea);
        tareaClikeada.remove();
    }

    console.log(todoList);

});

buttonBorraCompletados.addEventListener('click', (evento) => {
    console.log('click Eliminar Completados');
    //console.log(evento);

    todoList.eliminarCompletados();


    const tareas = divTodoList.children;
    for (let i = tareas.length - 1; i >= 0; i--) {
        const elemento = tareas[i];

        if (elemento.classList.contains('completed')) {
            elemento.remove();
            console.log('Tarea Completada eliminada', elemento);
        }

    }



});

ulFiltros.addEventListener('click', (evento) => {

    const filtro = evento.target.text;
    const tareas = divTodoList.children;

    ulFiltrosAnchorTags.forEach(elemento => elemento.classList.remove('selected'));
    evento.target.classList.add('selected');

    console.log(filtro);

    if (filtro == undefined) { return; }

    for (const elementoLista of tareas) {

        const completado = elementoLista.classList.contains('completed');
        elementoLista.classList.remove('hidden');


        switch (filtro) {
            case 'Pendientes':
                if (completado) elementoLista.classList.add('hidden');
                break;
            case 'Completados':
                if (!completado) elementoLista.classList.add('hidden');
                break;

        }
    }
});