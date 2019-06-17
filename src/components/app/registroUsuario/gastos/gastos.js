import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Gastos extends Component{
  constructor(props){
    super(props);
    this.state = {
      siguiente:false,
      atraa:false,
    }
  }
  render(){
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

          <div>
            <label>
              Periodicidad:
            </label>
            <br/>
            <label htmlFor="gastosPM">Mensual</label>
            <input type="radio" name="periodicidad" value="1" id="gastosPM"/>
            <label htmlFor="gastosPQ">Quincenal</label>
            <input type="radio" name="periodicidad" value="2" id="gastosPQ"/>
            <label htmlFor="gastosPS">Semanal</label>
            <input type="radio" name="periodicidad" value="3" id="gastosPS"/>
          </div>

          <input type="submit" value="Enviar"/>

        </form>
        <table>

          <thead>
            <tr>
              <td>Concepto</td>
              <td>Importe</td>
              <td>Periodicidad</td>
            </tr>
          </thead>

          <tbody>
            {
              props.listaGastos.map(
                (gasto, key)=>{
                  return(
                    <tr key={key}>
                      <td>{gasto.concepto}</td>
                      <td>{gasto.importe}</td>
                      <td>{gasto.periodicidad}</td>
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
}
