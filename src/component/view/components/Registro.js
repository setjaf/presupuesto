import React,{Component} from 'react';
import * as firebase from 'firebase';


export default class registroUsuario extends Component {
  constructor(props) {

    super(props);

    this.state = ({
      usuario:null,
    })

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const esto = this;
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(
      function (result) {

        let user = result.user;

        esto.setState({
          usuario:user,
        });

        console.log(esto.state);

      }

    );

  }

  render(){

    return(
      <button onClick={()=>{this.handleClick();}}>Iniciar sesión con Google</button>
    );

  }

}
