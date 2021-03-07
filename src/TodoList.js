import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './TodoList.css';
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[]
        };
        this.create = this.create.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
    create(newTodo){
        this.setState({
            todos:[...this.state.todos,newTodo]
        })
    }
    removeTodo(uuid){
        let newTodoList = this.state.todos.filter((todo)=>{
            return todo.id !== uuid;
        })
        this.setState({todos:newTodoList});
    }
    updateTodo(uuid,updatedTask){
        const updatedTodos = this.state.todos.map(todo=>{
            if(todo.id === uuid){
                return {...todo,task:updatedTask}
            }
            return todo;
        })
        this.setState({todos:updatedTodos})
    }
    toggleCompletion(uuid){
        const updatedTodos = this.state.todos.map(todo=>{
            if(todo.id === uuid){
                return {...todo,completed:!todo.completed}
            }
            return todo;
        })
        this.setState({todos:updatedTodos})
    }
    render(){
        const todos = this.state.todos.map((todo)=>{
            return <Todo 
            task={todo.task}
            key={todo.id}
            id={todo.id}
            removeTodo={this.removeTodo}
            updateTodo={this.updateTodo}
            completed={todo.completed}
            toggleTodo={this.toggleCompletion}></Todo>
        })
        return (
            <div className="TodoList">
                <h1>React Todo List! <span>A simple react Todo List</span></h1>
                <ul>
                    {todos}
                </ul>
                <TodoForm create={this.create}></TodoForm>
            </div>
        )
    }
}

export default TodoList;  