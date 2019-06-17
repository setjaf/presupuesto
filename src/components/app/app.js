import React, {Component} from 'react';
import UsuarioNuevo from './registroUsuario/registroUsuario';
import {FDtoJSON} from '../../utils/FDtoJSON.js';
import firebase from '../../utils/firebase.js';
/*import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';*/

import Inicio from './inicio/inicio';
import {Switch,Route} from 'react-router-dom';

const db = firebase.firestore();

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      logged:false,
      nombre:null,
      correo:null,
      imgPerfil:null,
      uid:null,
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
    this.logUsuario = this.logUsuario.bind(this);

  }

  inicializarIngresos(){
    const esto = this;
    if(this.state.uid){
      const docRef = db.collection('Usuarios').doc(this.state.uid).collection('Ingresos');
      docRef.get().then((collection)=>{
        let ingresos = [];
        collection.docs.map(
          (doc)=>{
            const data = doc.data();
            let ingreso = {...data}
            ingreso.id = doc.id;
            ingresos.push(ingreso);
            return ingreso;
          }
        );
        esto.setState({
          ingresosFijos:ingresos,
        });
      });
    }

  }

  registrarIngreso(event){
    const esto = this;

    event.preventDefault();

    let ingresos = this.state.ingresosFijos.slice(0,this.state.ingresosFijos.length);

    const ingreso = FDtoJSON(
      new FormData(event.target)
    );

    db.collection("Usuarios").doc(this.state.uid).collection("Ingresos").add({
      concepto: ingreso.concepto,
      importe: ingreso.importe,
      periodicidad: ingreso.periodicidad,
    }).then(
      (docRef)=>{
        alert("Ingreso guardado");

        ingreso.id = docRef.id

        ingresos.push(
          ingreso
        );

        esto.setState({
          ingresosFijos:ingresos,
        });

      }
    ).catch(
      ()=>alert("No se pudo guardar el ingreso")
    );





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

  logUsuario(user){
      this.setState({
        logged:true,
        nombre: user.displayName,
        correo: user.email,
        imgPerfil: user.photoURL,
        uid: user.uid,
      });
  }

  render(){
    return(
      <Switch>
        <Route
          path="/nuevoUsuario"
          render={
            (props)=>
            (<UsuarioNuevo
              {...props}
              state={this.state}
              inicializarIngresos={(event)=>this.inicializarIngresos(event)}
              registrarIngreso={(event)=>this.registrarIngreso(event)}
              borrarIngreso={(ingreso)=>this.borrarIngreso(ingreso)}
              registrarGasto={(event)=>this.registrarGasto(event)}
              borrarGasto={(gasto)=>this.borrarGasto(gasto)}
              registrarAhorro={(event)=>this.registrarAhorro(event)}
              borrarAhorro={(ahorro)=>this.borrarGasto(ahorro)}
              registrarPrestamo={(event)=>this.registrarPrestamo(event)}
              borrarPrestamo={(prestamo)=>this.borrarGasto(prestamo)}
              logUsuario={(user)=>this.logUsuario(user)}
            />)
          }
        />

        <Route
        exact
          path="/"
          component={Inicio}
        />
      </Switch>
    );
  }
}
