import React,{Component} from 'react';
import * as firebase from 'firebase';


export default class registroUsuario extends Component {
  constructor(props) {

    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const esto = this;
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(
      function (result) {

        let user = result.user;

        esto.props.logUsuario(user);

      }

    );

  }

  render(){

    return(
      <button onClick={()=>{this.handleClick();}}>Iniciar sesión con Google</button>
    );

  }

}
