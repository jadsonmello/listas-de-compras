import styled from 'styled-components'

 export const AddButton = styled.button `
    background: #6cf000;
    color: #070e02;
    height: 35px;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    margin-left: 10px;

    &:hover{
        opacity: 0.8;
    }
`

export const Container = styled.div `
    background: #b752ff;
    padding: 20px;
    border-radius: 10px;

    h1{
        color: #fff;
    }

    input{
        height: 35px;
        border-radius: 5px;
        border: nome;
        margin-top: 30px;
        outline: none;
        padding-left: 10px;
    }
`
export const Produto = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     height: 40px;
     background: #fff;
     border-radius: 5px;
     margin-top: 15px;
     padding: 0px 10px;

     p{
        text-transform: capitalize;
        font-weight: bold;
     }

    
`
export const BotaoDeLixeira = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;


`