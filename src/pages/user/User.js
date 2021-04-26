import React, { Component } from 'react'
import UserForm from './UserForm';

class User extends Component {
  render() {
    let list = [
        {
            "nome":"Kyoto",
            "email":"Froid"
        },
        {
            "nome":"Leto",
            "email":"Die"
        }
    ];
    return (
      <div>
          <UserForm></UserForm>
          <table border ="1">
            <tr>
                <th>Nome</th>
                <th>Email</th>
            </tr>

            {list.map((item) => {
                return <tr>
                    <td>
                        {item.nome}
                    </td>
                    <td>
                        {item.email}
                    </td>
                </tr>
            })}
          </table>
      </div>
    );
  }
}

export default User;
