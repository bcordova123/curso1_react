import React,{Component} from 'react';

export default class TaskForm extends Component {

    state = {
        titulo: '',
        descripcion: ''
    }
    //No se ponen los parentesis por que solo se pasa un parametro
    OnSubmit = e => {
        //console.log(this.state);
        this.props.addtask(this.state.titulo, this.state.descripcion);
        e.preventDefault();        
        //console.log('Enviando');
    }

    onchange = e => {
        //console.log(e.target.name,e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {        
        return (
            <form onSubmit={this.OnSubmit} >
                <input type="text" 
                    name="titulo"
                    placeholder="Escribe una tarea" 
                    onChange={this.onchange} 
                    value={this.state.titulo}/>
                <br/><br/>
                <textarea name="descripcion"
                    placeholder="Escribe una descripción" 
                    onChange={this.onchange} 
                    value={this.state.descripcion}>                    
                </textarea>
                <input type="submit" />
            </form>
        )
    }

}
