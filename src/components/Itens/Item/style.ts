import styled, { keyframes } from 'styled-components'

const massas =  "#d73b3b";
const carnes = "#30201e";
const combos =  "#e6c864";
const veganos = "#80aa40";

const mobile = '768px';
const desktop_xsm = '980px';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimatedListItem = styled.div`
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeInUp} 0.5s ease forwards;
  animation-delay: 0.1s;
`;

export const ItemContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 90%;
    
    .porcao, .qtdpessoas, .valor{
        align-items: center;
        display: flex;
        font-size: 1.25rem;
        font-weight: bold;
        justify-content: center;
    }
    .valor {
        color: ${massas}; // Use ${massas} instead of red
        font-size: 1.7rem;
    }
`

export const ImageContainer = styled.div`
    min-width: 280px;

    @media(max-width: ${desktop_xsm}){
        width: 100%;
    }

    img{
        border-radius: 8px;
        width: 100%;
    }
`
export const DescricaoContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 20px;

    @media(max-width: ${desktop_xsm}){
        flex-direction: row;
        margin-top: 20px;
        padding: 0;
    }
`

export const TituloContainer = styled.div`
   h2{
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
   }

   p{
    color: darkgray;
    font-size: 1rem;
    font-weight: 600;
    max-width: 600px;
    margin-bottom: 20px;
   }
`

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
    max-width: 700px;
    
    @media (max-width: ${desktop_xsm}) {
      justify-content: flex-end;
    }

    @media (max-width: ${mobile}) {
      justify-content: flex-start;
    }

    div {
      margin: 10px;
    }
`

export const TipoContainer = styled.div`
   
    align-items: center;
    border-radius: 7px;
    display: flex;
    font-weight: bold;
    height: 40px;
    justify-content: center;
    padding: 10px 30px;

    .carnes {
      border-radius: 4px;
      padding: 10px;
      background-color: ${massas};
      color: white;
    }

    .massas {
      border-radius: 4px;
      padding: 10px;
      background-color: ${carnes};
      color: white;
    }
   
    .combos{
      border-radius: 4px;
      padding: 10px;
      background-color: ${combos};
    }

    .veganos{
      border-radius: 4px;
      padding: 10px;
      background-color: ${veganos};
    }
`
