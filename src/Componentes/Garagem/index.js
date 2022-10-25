import { useState } from 'react'
import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export function Garagem({nome, setNome}) {
  const [automovel, setAutomovel]=useState({modelo:"Corsa", cor:"Branca", ano:2020 ,flex:true})
  const carro1 = {modelo:"Monza", cor:"Azul", ano:1999 ,flex:false};
  const carro2 = {modelo:"Passat", cor:"Chumbo", ano:2004 ,flex:false};
  const carro3 = {modelo:"Stilo", cor:"Verde", ano:2002 ,flex:false};

  function mudaNome(nome) {
    setNome(nome)
  }

  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={()=> mudaNome("Marcus")}>Muda nome</Botao>
      <Botao onClick={()=> mudaCarro(carro1)}>Muda Carro</Botao>
      <Estacionamento>
        <Carro
          automovel={automovel}
          setAutomovel={setAutomovel}
          adicionadoPor={nome}
          outroCarro={carro2}

        />
                <Carro
          automovel={automovel}
          setAutomovel={setAutomovel}
          adicionadoPor={nome}
          outroCarro={carro3}

        />
      </Estacionamento>
    </GaragemContainer>
  )
}
