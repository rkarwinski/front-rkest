import React, { Component } from 'react'
import ParameterForm from './ParameterForm';


class Parameter extends Component {
  render() {
    let list = [
        {
            "nome":"Kyoto",
            "valor":"Froid"
        },
        {
            "nome":"Leto",
            "valor":"Die"
        }
    ];
    return (
      <div>
          <ParameterForm></ParameterForm>
          <table border ="1">
            <tr>
                <th>Nome</th>
                <th>Valor</th>
            </tr>

            {list.map((item) => {
                return <tr>
                    <td>
                        {item.nome}
                    </td>
                    <td>
                        {item.valor}
                    </td>
                </tr>
            })}
          </table>
      </div>
    );
  }
}

export default Parameter;
