import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Ahorros extends Component {
    constructor(props){
        super(props);
        
        this.state={
            siguiente:false,
            atras:false,
        }

        this.siguiente = this.siguiente.bind(this);
        this.atras = this.atras.bind(this);
    }

    componentDidMount(){
      this.props.inicializarAhorros();
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
          return (<Redirect to={'/nuevoUsuario/resumen'} />);
        }else if(this.state.atras){
          return (<Redirect to={'/nuevoUsuario/registrarPrestamos'}/>); 
        }else{
          return(
            <div>
              <form onSubmit={this.props.registrarAhorro}>
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
                    this.props.listaAhorros.map(
                      (ahorro, key)=>{
                        return(
                          <tr key={key}>
                            <td>{ahorro.concepto}</td>
                            <td>${ahorro.importe}</td>
                            <td><button onClick={()=>this.props.borrarAhorro(key)}>Borrar</button></td>
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