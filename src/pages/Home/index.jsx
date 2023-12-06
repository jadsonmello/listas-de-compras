import {useRef, useState} from 'react'
import { v4 } from 'uuid'
import { AddButton,Container,Produto,BotaoDeLixeira } from './styles'

function Home() {

  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()
 


  function cliqueiNoBotao(){
    setProdutos([{id: v4(),nome:inputRef.current.value},...produtos])
    inputRef.current.value = ''
  }

  function deletarProduto(id){
   setProdutos(produtos.filter(produto => produto.id !== id))
  }

  return (
    <Container>
      <h1>Lista de Compras</h1>
      <input placeholder="produto..." ref={inputRef} />
      <AddButton onClick={cliqueiNoBotao} >Adicionar</AddButton>

      
        {produtos.map((produto) => (
          <Produto key={produto.id}>
            <p>{produto.nome}</p>
            <BotaoDeLixeira onClick={ () => deletarProduto(produto.id)}>🗑️</BotaoDeLixeira>
            </Produto>
        ))}
      
 
    </Container>
  )
}


export default Home
