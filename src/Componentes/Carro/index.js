import { CarroContainer } from './styles'

export function Carro({ automovel, adicionadoPor, setAutomovel, outroCarro }) {
  const{modelo, cor, ano, flex} = automovel
  function mudaCarro(veiculo) {
    setAutomovel(veiculo)
  }
  return (
    <CarroContainer>
      <button onClick={()=> mudaCarro(outroCarro)}>Muda Carro</button>      
      <h2>{modelo}</h2>
      <ul>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Flex: {flex ? 'Sim' : 'Não'}</li>
        <li>Adicionado: {adicionadoPor}</li>
      </ul>
    </CarroContainer>
  )
}
