import React, { Component } from 'react'
import User from './User'
import photo from './img/logo192.png'


class Rk extends Component {
  render() {
    return (
      //Exemplo de chamada de componente com Propriedade 
      <p>Projeto do <User name='Rodrigo Karwinski' photo={photo}></User></p>
    );
  }
}


export default Rk;
