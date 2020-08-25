import React,{Component} from 'react';

//Rutas para el navegador
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import tasks from './sample/tasks.json'; 
//Componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm'; 
import Posts from './components/Posts'

class App extends Component{

  state = {
    tasks: tasks
  }

  //Funcion en props
  addtask = (titulo, descripcion) => {
    const newTask = {
      titulo: titulo,
      descripcion: descripcion,
      id: this.state.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deletetask = (id) => {
    const newTask = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTask
    })
  }

  checkDone = id => {
   const newTask =this.state.tasks.map(task =>{
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({
      tasks: newTask
    })
  }

  render(){
    return <div> 
      <Router>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/posts">Posts</Link>
        <Route exact path="/" render={() => {
          return <div>
            <TaskForm addtask={this.addtask}/>
            <Tasks 
              tasks={this.state.tasks} 
              deletetask={this.deletetask}
              checkDone={this.checkDone}
            />
          </div>
        }}>
        </Route>
        <Route path="/posts" component={Posts}>
        </Route>
      </Router>

    </div>
  }
}


export default App;
