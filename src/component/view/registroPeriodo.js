import React,{Component} from 'react';
import {FDtoJSON} from './functions/FDtoJSON.js';

export default class registroPeriodo extends Component{
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

    //this.borrarIngreso = this.borrarIngreso.bind(this);
    //this.borrarGasto = this.borrarGasto.bind(this);
    //this.borrarAhorro = this.borrarAhorro.bind(this);
    //this.borrarPrestamo = this.borrarPrestamo.bind(this);

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

  render(){
    return(
      <div>
        <Ingresos registrarIngreso={(event)=>this.registrarIngreso(event)} listaIngresos={this.state.ingresosFijos}/>
        <Gastos registrarGasto={(event)=>this.registrarGasto(event)} listaGastos={this.state.gastosFijos}/>
        <Ahorros registrarAhorro={(event)=>this.registrarAhorro(event)} listaAhorros={this.state.ahorroInicial}/>
        <Prestamos registrarPrestamo={(event)=>this.registrarPrestamo(event)} listaPrestamos={this.state.prestamosInicial}/>
      </div>
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
