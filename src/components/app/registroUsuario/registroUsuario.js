import React,{Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Registro from './registro/registro';
import Ingresos from './ingresos/ingresos'
import Gastos from './gastos/gastos'
import Prestamos from './prestamos/prestamos'
import Ahorros from './ahorros/ahorros'

export default class registroUsuario extends Component{

  render(){
    return(
      <Switch>
        <Route
          path = {`${this.props.match.url}/registrarIngresos`}
          render={
            (props)=>
              this.props.state.logged?(
                <Ingresos {...props}  inicializarIngresos={()=>this.props.inicializarIngresos()} borrarIngreso={(ingreso)=>this.props.borrarIngreso(ingreso)} registrarIngreso={(event)=>this.props.registrarIngreso(event)} listaIngresos={this.props.state.ingresosFijos} state={this.props.state}/>
              ):(
                <Redirect to={'/'}/>
              )
          }
        />
        <Route
          path = {`${this.props.match.url}/registrarGastos`}
          render={
            (props)=>
              this.props.state.logged?(
                <Gastos {...props}  inicializarGastos={()=>this.props.inicializarGastos()} borrarGasto={(gasto)=>this.props.borrarGasto(gasto)} registrarGasto={(event)=>this.props.registrarGasto(event)} listaGastos={this.props.state.gastosFijos} state={this.props.state}/>
              ):(
                <Redirect to={'/'}/>
              )
          }
        />
        <Route
          path = {`${this.props.match.url}/registrarPrestamos`}
          render={
            (props)=>
              this.props.state.logged?(
                <Prestamos {...props}  inicializarPrestamos={()=>this.props.inicializarPrestamos()} borrarPrestamo={(prestamo)=>this.props.borrarPrestamo(prestamo)} registrarPrestamo={(event)=>this.props.registrarPrestamo(event)} listaPrestamos={this.props.state.prestamos} state={this.props.state}/>
              ):(
                <Redirect to={'/'}/>
              )
          }
        />
        <Route
          path = {`${this.props.match.url}/registrarAhorros`}
          render={
            (props)=>
              this.props.state.logged?(
                <Ahorros {...props}  inicializarAhorros={()=>this.props.inicializarAhorros()} borrarAhorro={(ahorro)=>this.props.borrarAhorro(ahorro)} registrarAhorro={(event)=>this.props.registrarAhorro(event)} listaAhorros={this.props.state.ahorros} state={this.props.state}/>
              ):(
                <Redirect to={'/'}/>
              )
          }
        />
        <Route
          path='/'
          render={
            (props)=>
              <Registro {...props} regUsuario={(user)=>this.props.regUsuario(user)}/>
          }
        />

        
      </Switch>
      /*<div>
        <Ingresos borrarIngreso={()=>this.props.borrarIngreso()} registrarIngreso={(event)=>this.props.registrarIngreso(event)} listaIngresos={this.props.state.ingresosFijos}/>
        <Gastos borrarGasto={()=>this.props.borrarGasto()} registrarGasto={(event)=>this.props.registrarGasto(event)} listaGastos={this.props.state.gastosFijos}/>
        <Ahorros borrarAhorro={()=>this.props.borrarAhorro()} registrarAhorro={(event)=>this.props.registrarAhorro(event)} listaAhorros={this.props.state.ahorros}/>
        <Prestamos borrarPrestamo={()=>this.props.borrarPrestamo()} registrarPrestamo={(event)=>this.props.registrarPrestamo(event)} listaPrestamos={this.props.state.prestamosInicial}/>
        <Total listaIngresos={this.props.state.ingresosFijos} listaGastos={this.props.state.gastosFijos} listaAhorros={this.props.state.ahorros} listaPrestamos={this.props.state.prestamosInicial} />
      </div>*/
    );
  }

}

/*
function Total(props){
  return(
    <table>

      <thead>
        <tr>
          <td>Concepto</td>
          <td>Importe</td>
        </tr>
      </thead>

      <tbody>
        {
          props.listaPrestamos.map(
            (prestamo, key)=>{
              return(
                <tr key={key}>
                  <td>{prestamo.concepto}</td>
                  <td>${prestamo.importe}</td>
                  <td><button onClick={()=>props.borrarPrestamo(key)}>Borrar</button></td>
                </tr>
              );
            }
          )
        }
      </tbody>

    </table>
  );
}
*/
