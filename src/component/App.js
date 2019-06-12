import React, {Component} from 'react';
import UsuarioNuevo from './view/registroUsuario';
import {FDtoJSON} from './view/functions/FDtoJSON.js';

import Inicio from './view/Inicio';

import {Switch,Route} from 'react-router-dom';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nombre:null,
      correo:null,
      periodo:{
        duracion:null,
      },
      ingresosFijos:[],
      gastosFijos:[],
      ahorroInicial:[],
      prestamosInicial:[],
    };

    this.registrarIngreso = this.registrarIngreso.bind(this);
    this.registrarGasto = this.registrarGasto.bind(this);
    this.registrarAhorro = this.registrarAhorro.bind(this);
    this.registrarPrestamo = this.registrarPrestamo.bind(this);

    this.borrarIngreso = this.borrarIngreso.bind(this);
    this.borrarGasto = this.borrarGasto.bind(this);
    this.borrarAhorro = this.borrarAhorro.bind(this);
    this.borrarPrestamo = this.borrarPrestamo.bind(this);

  }

  registrarIngreso(event){

    event.preventDefault();

    let ingresos = this.state.ingresosFijos.slice(0,this.state.ingresosFijos.length);

    ingresos.push(
      FDtoJSON(
        new FormData(event.target)
      )
    );

    this.setState({
      ingresosFijos:ingresos,
    });

    event.target.reset();

  }

  borrarIngreso(ingreso){

    let ingresos = this.state.ingresosFijos.slice(0,this.state.ingresosFijos.length);

    ingresos.splice(ingreso,1);

    this.setState({
      ingresosFijos:ingresos,
    });

  }

  registrarGasto(event){

    event.preventDefault();

    let gastos = this.state.gastosFijos.slice(0,this.state.gastosFijos.length);

    gastos.push(
      FDtoJSON(
        new FormData(event.target)
      )
    );

    this.setState({
      gastosFijos:gastos,
    });

    event.target.reset();
  }

  borrarGasto(gasto){

    let gastos = this.state.gastosFijos.slice(0,this.state.gastosFijos.length);

    gastos.splice(gasto,1);

    this.setState({
      gastosFijos:gastos,
    });

  }

  registrarAhorro(event){

    event.preventDefault();

    let ahorro = this.state.ahorroInicial.slice(0,this.state.ahorroInicial.length);

    ahorro.push(
      FDtoJSON(
        new FormData(event.target)
      )
    );

    this.setState({
      ahorroInicial:ahorro,
    });

    event.target.reset();
  }

  borrarAhorro(ahorro){

    let ahorros = this.state.ahorroInicial.slice(0,this.state.ahorroInicial.length);

    ahorros.splice(ahorro,1);

    this.setState({
      ahorroInicial:ahorros,
    });

  }

  registrarPrestamo(event){

    event.preventDefault();

    let prestamo = this.state.prestamosInicial.slice(0,this.state.prestamosInicial.length);

    prestamo.push(
      FDtoJSON(
        new FormData(event.target)
      )
    );

    this.setState({
      prestamosInicial:prestamo,
    });

    event.target.reset();
  }

  borrarPrestamo(prestamo){

    let prestamos = this.state.prestamosInicial.slice(0,this.state.prestamosInicial.length);

    prestamos.splice(prestamo,1);

    this.setState({
      prestamosInicial:prestamos,
    });

  }

  render(){
    return(
      <Switch>
        <Route
          path="/nuevoUsuario/"
          render={
            props=>
            <UsuarioNuevo
              state={this.state}
              registrarIngreso={(event)=>this.registrarIngreso(event)}
              borrarIngreso={(ingreso)=>this.borrarIngreso(ingreso)}
              registrarGasto={(event)=>this.registrarGasto(event)}
              borrarGasto={(gasto)=>this.borrarGasto(gasto)}
              registrarAhorro={(event)=>this.registrarAhorro(event)}
              borrarAhorro={(ahorro)=>this.borrarGasto(ahorro)}
              registrarPrestamo={(event)=>this.registrarPrestamo(event)}
              borrarPrestamo={(prestamo)=>this.borrarGasto(prestamo)}
            />
          }
        />

        <Route
          path="/"
          component={Inicio}
        />
      </Switch>
    );
  }
}
