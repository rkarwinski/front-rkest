import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
        <div>
            <div>
                Nome: {this.props.name}
            </div>
            <div>
                <img src={this.props.photo} />
            </div>
        </div>
    );
  }
}


export default User;
