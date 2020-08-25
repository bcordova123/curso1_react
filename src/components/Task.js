import React,{Component} from 'react';
import propTypes from 'prop-types';

class Task extends Component{

    //realizar estilos de css en react a traves de una funcion para cambiarlos dinamicamente
    //Se utiliza esta funcion para poner condicionales o otras cosas, en vez de solo pasar un objeto al style
    StyleCompleted(){
        return {
            fontSize: '20px',
            //Condicional: ? = si done es true , : = si es false
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){
        const {task}= this.props;
        return <p style={this.StyleCompleted()}>
            {task.titulo} - 
            {task.descripcion} - 
            {task.done} - 
            {task.id} 
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id) } />    
            <button style={deleteBtn} onClick={this.props.deletetask.bind(this, task.id)}>
                x    
            </button>  
        </p>   
    }
}

Task.propTypes = {
    task: propTypes.object.isRequired
}

//Estilos en linea en un objeto
const deleteBtn = {
    fontSize:'18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor:'pointer'
};
export default Task;