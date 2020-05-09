import React from 'react'

function App(props) {

  const modificarNome = event => {
    console.log(event.target.value)
  }

  const criaComboBox = () => {
    const opcoes = ["Papi", "Porra"]
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  const MeuComboBox = () => criaComboBox()

  return (
    <div>
      <input className="text-centralizado" type="text" value={props.nome} onChange={modificarNome} />
      <h1>Hello {props.nome} vocè é {props.voce} </h1>
      <MeuComboBox />
    </div>
  )
}

export default App