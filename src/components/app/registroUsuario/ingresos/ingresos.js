import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Ingresos extends Component{

  constructor(props){
    super(props);
    this.state ={
      siguiente:false,
    };
    this.siguiente = this.siguiente.bind(this);
  }

  componentDidMount(){
    this.props.inicializarIngresos();
  }

  siguiente(){
    this.setState({
      siguiente:true,
    });
  }



  render(){

    if(this.state.siguiente)
      return(
        <Redirect to={'/nuevoUsuario/registrarGastos'} />
      );
    else
      return(
        <div>
          <form onSubmit={this.props.registrarIngreso}>
            <h4>Ingresos fijos en el periodo:</h4>

            <div>
              <label>
                Concepto:
              </label>
              <input type="text" name="concepto" required/>
            </div>

            <div>
              <label>
                Importe:
              </label>
              <input type="text" name="importe" required/>
            </div>

            <div>
              <label>
                Periodicidad:
              </label>
              <br/>
              <label htmlFor="ingresosPM">Mensual</label>
              <input type="radio" name="periodicidad" value="1" id="ingresosPM"/>
              <label htmlFor="ingresosPQ">Quincenal</label>
              <input type="radio" name="periodicidad" value="2" id="ingresosPQ"/>
              <label htmlFor="ingresosPS">Semanal</label>
              <input type="radio" name="periodicidad" value="3" id="ingresosPS"/>
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
                this.props.listaIngresos.map(
                  (ingreso, key)=>{
                    return(
                      <tr key={key}>
                        <td>{ingreso.concepto}</td>
                        <td>${ingreso.importe}</td>
                        <td>{ingreso.periodicidad}</td>
                        <td><button onClick={()=>this.props.borrarIngreso(key)}>Borrar</button></td>
                      </tr>
                    );
                  }
                )
              }
            </tbody>

          </table>

          <button onClick={()=>this.siguiente()}>Seguir</button>

        </div>
      );
  }
}
