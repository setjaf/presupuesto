import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Registro from './components/Registro';

export default class registroUsuario extends Component{

  render(){
    return(
      <Switch>
        <Route path='/' component={Registro}/>
      </Switch>
      /*<div>
        <Ingresos borrarIngreso={()=>this.props.borrarIngreso()} registrarIngreso={(event)=>this.props.registrarIngreso(event)} listaIngresos={this.props.state.ingresosFijos}/>
        <Gastos borrarGasto={()=>this.props.borrarGasto()} registrarGasto={(event)=>this.props.registrarGasto(event)} listaGastos={this.props.state.gastosFijos}/>
        <Ahorros borrarAhorro={()=>this.props.borrarAhorro()} registrarAhorro={(event)=>this.props.registrarAhorro(event)} listaAhorros={this.props.state.ahorroInicial}/>
        <Prestamos borrarPrestamo={()=>this.props.borrarPrestamo()} registrarPrestamo={(event)=>this.props.registrarPrestamo(event)} listaPrestamos={this.props.state.prestamosInicial}/>
        <Total listaIngresos={this.props.state.ingresosFijos} listaGastos={this.props.state.gastosFijos} listaAhorros={this.props.state.ahorroInicial} listaPrestamos={this.props.state.prestamosInicial} />
      </div>*/
    );
  }

}

function Ingresos(props) {
  return(
    <div>
      <form onSubmit={props.registrarIngreso}>
        <h4>Ingresos fijos en el periodo:</h4>

        <div>
          <label>
            Concepto:
          </label>
          <input type="text" name="concepto"/>
        </div>

        <div>
          <label>
            Importe:
          </label>
          <input type="text" name="importe"/>
        </div>

        <input type="submit" value="Enviar"/>
      </form>
      <table>
        <thead>
          <tr>
            <td>Concepto</td>
            <td>Importe</td>
          </tr>
        </thead>

        <tbody>
          {
            props.listaIngresos.map(
              (ingreso, key)=>{
                return(
                  <tr key={key}>
                    <td>{ingreso.concepto}</td>
                    <td>${ingreso.importe}</td>
                    <td><button onClick={()=>props.borrarIngreso(key)}>Borrar</button></td>
                  </tr>
                );
              }
            )
          }
        </tbody>

      </table>
    </div>
  );
}

function Gastos(props) {
  return(
    <div>
      <form onSubmit={props.registrarGasto}>
        <h4>Gastos fijos en el periodo:</h4>

        <div>
          <label>
            Concepto:
          </label>
          <input type="text" name="concepto"/>
        </div>

        <div>
          <label>
            Importe:
          </label>
          <input type="text" name="importe"/>
        </div>

        <input type="submit" value="Enviar"/>

      </form>
      <table>

        <thead>
          <tr>
            <td>Concepto</td>
            <td>Importe</td>
          </tr>
        </thead>

        <tbody>
          {
            props.listaGastos.map(
              (gasto, key)=>{
                return(
                  <tr key={key}>
                    <td>{gasto.concepto}</td>
                    <td>${gasto.importe}</td>
                    <td><button onClick={()=>props.borrarGasto(key)}>Borrar</button></td>
                  </tr>
                );
              }
            )
          }
        </tbody>

      </table>
    </div>
  );
}

function Ahorros(props) {
  return(
    <div>
      <form onSubmit={props.registrarAhorro}>
        <h4>Ahorros fijos en el periodo:</h4>

        <div>
          <label>
            Concepto:
          </label>
          <input type="text" name="concepto"/>
        </div>

        <div>
          <label>
            Importe:
          </label>
          <input type="text" name="importe"/>
        </div>

        <input type="submit" value="Enviar"/>

      </form>
      <table>

        <thead>
          <tr>
            <td>Concepto</td>
            <td>Importe</td>
          </tr>
        </thead>

        <tbody>
          {
            props.listaAhorros.map(
              (ahorro, key)=>{
                return(
                  <tr key={key}>
                    <td>{ahorro.concepto}</td>
                    <td>${ahorro.importe}</td>
                    <td><button onClick={()=>props.borrarAhorro(key)}>Borrar</button></td>
                  </tr>
                );
              }
            )
          }
        </tbody>

      </table>
    </div>
  );
}

function Prestamos(props) {
  return(
    <div>
      <form onSubmit={props.registrarPrestamo}>
        <h4>Prestamos fijos en el periodo:</h4>

        <div>
          <label>
            Concepto:
          </label>
          <input type="text" name="concepto"/>
        </div>

        <div>
          <label>
            Importe:
          </label>
          <input type="text" name="importe"/>
        </div>

        <input type="submit" value="Enviar"/>

      </form>
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
    </div>
  );
}

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
