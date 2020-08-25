import React from 'react';
import './App.css';

/* function Helloworld(props){
  return (    
    <div id="hello"> 
    <h3> {props.subtitulo} </h3>    
    {props.texto} 
    </div>
  );
} */

class Helloworld extends React.Component{

    state = {
      show: true
    }
    toggleShow = () => {
      this.setState({show: !this.state.show});
    }
    render(){
      if (this.state.show) {
        return(
          <div id="hello"> 
          <h3> {this.props.subtitulo} </h3>    
          {this.props.texto} 
          <button onClick = {this.toggleShow}> Cambiar estado</button>  
          </div>
        )
      }else{
        return <h1> 
          No existen elementos
          <button onClick = {this.toggleShow}> Cambiar estado</button>  
          </h1> 
      }
    }
  }
  
  
  function App() {
    return (
      <div>Este es mi componente: 
        <Helloworld texto="Hello World " subtitulo="lorem isum"/>
        <Helloworld texto="Desde mi casa " subtitulo="Hola Mundo"/>      
        <Helloworld texto="Hello " subtitulo="Component three"/>
      </div>
    );
  }

  export default Ej;

  
  