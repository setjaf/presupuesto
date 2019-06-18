import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Gastos extends Component{
  constructor(props){
    super(props);
    this.state = {
      siguiente:false,
      atras:false,
    }
    this.siguiente = this.siguiente.bind(this);
    this.atras = this.atras.bind(this);
  }

  componentDidMount(){
    this.props.inicializarGastos();
  }

  siguiente(){
    this.setState({
      siguiente:true,
    });
  }

  atras(){
    this.setState({
      atras:true,
    });
  }

  render(){
    if(this.state.siguiente){
      return <Redirect to={'/nuevoUsuario/registrarPrestamos'}/>;
    }else if (this.state.atras) {
      return <Redirect to={'/nuevoUsuario/registrarIngresos'}/>;
    }else{
      return(
        <div>
          <form onSubmit={this.props.registrarGasto}>
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
              <input type="radio" name="periodicidad" value="1" id="gastosPM" required/>
              <label htmlFor="gastosPQ">Quincenal</label>
              <input type="radio" name="periodicidad" value="2" id="gastosPQ" required/>
              <label htmlFor="gastosPS">Semanal</label>
              <input type="radio" name="periodicidad" value="3" id="gastosPS" required/>
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
                this.props.listaGastos.map(
                  (gasto, key)=>{
                    return(
                      <tr key={key}>
                        <td>{gasto.concepto}</td>
                        <td>${gasto.importe}</td>
                        <td>{gasto.periodicidad}</td>
                        <td><button onClick={()=>this.props.borrarGasto(key)}>Borrar</button></td>
                      </tr>
                    );
                  }
                )
              }
            </tbody>

          </table>

          <button onClick={()=>this.atras()}> Regresar </button>
          <button onClick={()=>this.siguiente()}> Seguir </button>


        </div>
      );
    }
  }
}
