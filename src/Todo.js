import React, { Component } from 'react';
import './Todo.css';
class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {isEditing:false,task:this.props.task};
        this.removeTodo = this.removeTodo.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
        this.handelChange = this.handelChange.bind(this);
        this.handelToggle = this.handelToggle.bind(this);
    }
    handelToggle(evt){
        this.props.toggleTodo(this.props.id);
    }
    handelChange(evt){
        this.setState({[evt.target.name]:evt.target.value})
    }
    saveTodo(evt){
        evt.preventDefault();
        if(this.state.task === "")
        {
            alert("please enter some todo")
            return ;
        }
        this.props.updateTodo(this.props.id,this.state.task);
        this.setState({
            isEditing:false,
            [evt.target.name] : evt.target.value
        })        
    }
    removeTodo(){
        this.props.removeTodo(this.props.id);
    }
    toggleForm(){
        this.setState({isEditing:!this.state.isEditing})
    }
    render(){
        let todoComp ;
        if(!this.state.isEditing)
        {
            todoComp = <div id={this.props.id} className="Todo">
            <li className={this.props.completed ? "Todo-task completed" : "Todo-task"}
            onClick={this.handelToggle}>{this.state.task}</li>
            <div className="Todo-buttons">
            <button onClick={this.toggleForm}><i className="fas fa-pen"></i></button>
            <button onClick={this.removeTodo}><i className="fas fa-trash"></i></button>
            </div>
            </div>
        }
        else
        {
            todoComp = <div className="Todo">
            <form onSubmit={this.saveTodo} className="Todo-edit-form">
                <input type="text" value={this.state.task} onChange={this.handelChange} name="task"/>
                <button onClick={this.saveTodo}>Save</button>
            </form>
        </div>
        }
        return (
            <div>
                {todoComp}
            </div>
        )
    }
}

export default Todo;