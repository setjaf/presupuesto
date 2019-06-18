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
      prestamos:[],
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

    this.userDoc = null;
    //Cuando el usuario inicia sesión se hace la referencia al documento del ususario en la base de datos
  }

  inicializarIngresos(){
    const esto = this;
    if(this.state.uid){
      const docRef = this.userDoc.collection('Ingresos');
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

    const ingreso = FDtoJSON(new FormData(event.target));

    db.collection("Usuarios").doc(this.state.uid).collection("Ingresos").add({
      concepto: ingreso.concepto,
      importe: ingreso.importe,
      periodicidad: ingreso.periodicidad,
    }).then(
      (docRef)=>{
        alert("Ingreso guardado");

        ingreso.id = docRef.id;

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

    const esto = this;

    let ingresos = this.state.ingresosFijos.slice(0,this.state.ingresosFijos.length);

    console.log(ingresos);
    console.log(ingreso);

    this.userDoc.collection("Ingresos").doc(ingresos[ingreso].id).delete().then(
      ()=>{
        ingresos.splice(ingreso,1);

        esto.setState({
          ingresosFijos:ingresos,
        });
      }
    );

  }

  inicializarGastos(){
    const esto = this;
    if(this.state.uid){
      const docRef = this.userDoc.collection('Gastos');
      docRef.get().then((collection)=>{
        let gastos = [];
        collection.docs.map(
          (doc)=>{
            const data = doc.data();
            let gasto = {...data}
            gasto.id = doc.id;
            gastos.push(gasto);
            return gasto;
          }
        );
        esto.setState({
          gastosFijos:gastos,
        });
      });
    }

  }

  registrarGasto(event){

    const esto = this;

    event.preventDefault();

    let gastos = this.state.gastosFijos.slice(0,this.state.gastosFijos.length);

    const gasto = FDtoJSON(new FormData(event.target));

    db.collection("Usuarios").doc(this.state.uid).collection("Gastos").add({
      concepto: gasto.concepto,
      importe: gasto.importe,
      periodicidad: gasto.periodicidad,
    }).then(
      (docRef)=>{
        alert("Gasto guardado");

        gasto.id = docRef.id;

        gastos.push(
          gasto
        );

        esto.setState({
          gastosFijos:gastos,
        });

      }
    ).catch(
      ()=>alert("No se pudo guardar el gasto")
    );
    event.target.reset();
  }

  borrarGasto(gasto){

    const esto = this;

    let gastos = this.state.gastosFijos.slice(0,this.state.gastosFijos.length);

    console.log(gastos);
    console.log(gasto);

    this.userDoc.collection("Gastos").doc(gastos[gasto].id).delete().then(
      ()=>{
        gastos.splice(gasto,1);

        esto.setState({
          gastosFijos:gastos,
        });
      }
    );

  }

  inicializarAhorros(){
    const esto = this;
    if(this.state.uid){
      const docRef = this.userDoc.collection('Ahorros');
      docRef.get().then((collection)=>{
        let ahorros = [];
        collection.docs.map(
          (doc)=>{
            const data = doc.data();
            let ahorro = {...data}
            ahorro.id = doc.id;
            ahorros.push(ahorro);
            return ahorro;
          }
        );
        esto.setState({
          ahorrosFijos:ahorros,
        });
      });
    }

  }

  registrarAhorro(event){

    const esto = this;

    event.preventDefault();

    let ahorros = this.state.ahorrosFijos.slice(0,this.state.ahorrosFijos.length);

    const ahorro = FDtoJSON(new FormData(event.target));

    db.collection("Usuarios").doc(this.state.uid).collection("Ahorros").add({
      concepto: ahorro.concepto,
      importe: ahorro.importe,
      periodicidad: ahorro.periodicidad,
    }).then(
      (docRef)=>{
        alert("Ahorro guardado");

        ahorro.id = docRef.id;

        ahorros.push(
          ahorro
        );

        esto.setState({
          ahorrosFijos:ahorros,
        });

      }
    ).catch(
      ()=>alert("No se pudo guardar el ahorro")
    );
    event.target.reset();
  }

  borrarAhorro(ahorro){

    let ahorros = this.state.ahorroInicial.slice(0,this.state.ahorroInicial.length);

    ahorros.splice(ahorro,1);

    this.setState({
      ahorroInicial:ahorros,
    });

  }

  inicializarPrestamos(){
    const esto = this;
    if(this.state.uid){
      const docRef = this.userDoc.collection('Prestamos');
      docRef.get().then((collection)=>{
        let prestamos = [];
        collection.docs.map(
          (doc)=>{
            const data = doc.data();
            let prestamo = {...data}
            prestamo.id = doc.id;
            prestamos.push(prestamo);
            return prestamo;
          }
        );
        esto.setState({
          prestamos:prestamos,
        });
      });
    }

  }

  registrarPrestamo(event){
    const esto = this;

    event.preventDefault();

    let prestamos = this.state.prestamos.slice(0,this.state.prestamos.length);

    const prestamo = FDtoJSON(new FormData(event.target));

    db.collection("Usuarios").doc(this.state.uid).collection("Prestamos").add({
      concepto: prestamo.concepto,
      importe: prestamo.importe,
      periodicidad: prestamo.periodicidad,
      numPagos: prestamo.numPagos,
      reaPagos: prestamo.reaPagos,
    }).then(
      (docRef)=>{
        alert("Préstamo guardado");

        prestamo.id = docRef.id;

        prestamos.push(
          prestamo
        );

        esto.setState({
          prestamos:prestamos,
        });

      }
    ).catch(
      ()=>alert("No se pudo guardar el préstamo")
    );
    event.target.reset();

  }

  borrarPrestamo(prestamo){

    const esto = this;

    let prestamos = this.state.prestamos.slice(0,this.state.prestamos.length);

    console.log(prestamos);
    console.log(prestamo);

    this.userDoc.collection("Prestamos").doc(prestamos[prestamo].id).delete().then(
      ()=>{
        alert('Se ha eliminado el préstamo');
        
        prestamos.splice(prestamo,1);

        esto.setState({
          prestamos:prestamos,
        });
      }
    );

  }

  logUsuario(user){
      this.setState({
        logged:true,
        nombre: user.displayName,
        correo: user.email,
        imgPerfil: user.photoURL,
        uid: user.uid,
      });
      if (this.state.logged) {
        this.userDoc = db.collection('Usuarios').doc(this.state.uid);
      }

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
              inicializarGastos={(event)=>this.inicializarGastos(event)}
              registrarGasto={(event)=>this.registrarGasto(event)}
              borrarGasto={(gasto)=>this.borrarGasto(gasto)}
              registrarAhorro={(event)=>this.registrarAhorro(event)}
              borrarAhorro={(ahorro)=>this.borrarGasto(ahorro)}
              inicializarPrestamos={(event)=>this.inicializarPrestamos(event)}
              registrarPrestamo={(event)=>this.registrarPrestamo(event)}
              borrarPrestamo={(prestamo)=>this.borrarPrestamo(prestamo)}
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
