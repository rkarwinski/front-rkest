import React, { Component } from 'react'
import './App.css';
import Rk from './rk';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      name:  "Rodrigo Karwinski",
      email: "rodrigo.karwinski@karwinski.com"
    }
    this.changeState = this.changeState.bind(this)
    this.resetState  = this.resetState.bind(this)
    this.changeInput  = this.changeInput.bind(this)
  }

  changeState(){
    this.setState({
      name: "Karwinski Rodrigo"
    })
  }

  resetState(){
    this.setState({
      name: "Rodrigo Karwinski"
    })
  }

  changeInput(Event){
    let target = Event.target
    let index = target.name
    this.setState({
      [index]:target.value
    })
  }

  render() {
    return (
      <div className='App'>
        <div>
          <form>
            <label> Nome
              <input 
              type='text' 
              name='name' 
              value={this.state.name} 
              onChange={this.changeInput} ></input>
            </label>

            <label> Email
              <input 
              type='email' 
              name='email' 
              value={this.state.email} 
              onChange={this.changeInput} ></input>
            </label>
          </form>
          
        </div>

        <div>
          <button onClick={this.changeState}>Mudar Nome</button>
          <button onClick={this.resetState}>Mudar Nome</button>
        </div>
      </div>
    );
  }

}

  
export default App;
