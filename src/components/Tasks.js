import React,{Component} from 'react';
import Task from './Task';
//Validar los tipos de datos 
import propTypes from 'prop-types';

class Tasks extends Component{

    render(){
        return this.props.tasks.map(task => 
        <Task 
            task={task} 
            key={task.id} 
            deletetask={this.props.deletetask} 
            checkDone={this.props.checkDone}
        />)
    }
}
Tasks.propTypes = {
    tasks: propTypes.array.isRequired
  }
export default Tasks;