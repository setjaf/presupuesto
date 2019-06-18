import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Prestamos extends Component {
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
    this.props.inicializarPrestamos();
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
      return (
        <Redirect to={'/nuevoUsuario/registrarAhorros/'}/>
      );
    }else if(this.state.atras){

      return (
        <Redirect to={'/nuevoUsuario/registrarGastos/'}/>
      );

    }else{
      return(
        <div>
          <form onSubmit={this.props.registrarPrestamo}>
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
              <input type="number" name="importe"/>
            </div>
  
            <div>
              <label>
                Número de pagos:
              </label>
              <input type="number" name="numPagos"/>
            </div>
  
            <div>
              <label>
              Pagos realizados:
              </label>
              <input type="number" name="reaPagos"/>
            </div>
  
            <div>
              <label>
                Periodicidad:
              </label>
              <br/>
              <label htmlFor="prestamosPM">Mensual</label>
              <input type="radio" name="periodicidad" value="1" id="prestamosPM" required/>
              <label htmlFor="prestamosPQ">Quincenal</label>
              <input type="radio" name="periodicidad" value="2" id="prestamosPQ" required/>
              <label htmlFor="prestamosPS">Semanal</label>
              <input type="radio" name="periodicidad" value="3" id="prestamosPS" required/>
            </div>
  
            <input type="submit" value="Enviar"/>
  
          </form>
          <table>
  
            <thead>
              <tr>
                <td>Concepto</td>
                <td>Importe</td>
                <td>Periodicidad</td>
                <td>Número de pagos</td>
                <td>Pagos realizados</td>
              </tr>
            </thead>
  
            <tbody>
              {
                this.props.listaPrestamos.map(
                  (prestamo, key)=>{
                    return(
                      <tr key={key}>
                        <td>{prestamo.concepto}</td>
                        <td>${prestamo.importe}</td>
                        <td>{prestamo.periodicidad}</td>
                        <td>{prestamo.numPagos}</td>
                        <td>{prestamo.reaPagos}</td>
                        <td><button onClick={()=>this.props.borrarPrestamo(key)}>Borrar</button></td>
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
