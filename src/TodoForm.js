import React, { Component } from 'react';
import {v1 as uuid} from 'uuid';
import './NewTodoForm.css';
class TodoForm extends Component{
    constructor(props)
    {
        super(props);
        this.state = {task:""};
        this.handelChange = this.handelChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }
    handelChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    handelSubmit(evt){
        evt.preventDefault();
        if(this.state.task === "")
        {
            alert("please enter some todo")
            return ;
        }
        this.props.create({...this.state,id:uuid(),completed:false});
        this.setState({
            task:""
        })
    }
    render(){
        return (
            <form onSubmit={this.handelSubmit} className="NewTodoForm">
                <label htmlFor="task">New Todo</label>
                <input type="text"
                placeholder="Add new Todo" 
                id="task"
                name="task"
                value={this.state.task}
                onChange={this.handelChange}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;