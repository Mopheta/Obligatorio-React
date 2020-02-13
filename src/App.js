import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tarea from './Components/Tarea';

class App extends Component {
  
  state = { 
    nombreTarea: "",
    listaTareas:[
      { nombre: "Boca el mas grande"},
      { nombre: "Esto es pe;arol"},
      { nombre: "Tercera tarea"}
    ]
  };

  changeNomTarea = ({ target: { value } }) => {

    this.setState({
      nombreTarea: value
    })
  };

  agregarTarea = () => {
    const { nombreTarea, listaTareas  } = this.state;
    const nuevaTarea = { nombre:  nombreTarea};
    this.setState({
      listaTareas: [...listaTareas, nuevaTarea]
    })
  };

  render(){
    const { nombreTarea, listaTareas } = this.state;

    return (
      <div className="App">
        <header className="App-header">
            <p>To-Do List</p>
        </header>
          <div className="agregarTarea">
            <input className="agregarTarea-texto" type="text" placeholder="Ingrese nombre de la tarea" value={ nombreTarea }
            onChange = {this.changeNomTarea} 
            />
            <input className="agregarTarea-boton" type="button" value="Agregar Tarea"
             onClick={ this.agregarTarea }
            />
            <div className="grupoTareas"> 
                {
                  listaTareas.map((tarea, index) => (
                    <Tarea key={index} tarea={tarea}/>
                  ))
                }
            </div>
          </div>  
      </div>
    );
  }
}

export default App;
