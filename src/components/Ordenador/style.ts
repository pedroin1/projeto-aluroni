import styled from 'styled-components'

type PropsOrdernador = {
    ativo: boolean
}

export const ButtonOrdenador = styled.button`
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: #E4E4E4;
   border: none;
   font-weight: bold;
   position: relative;
   height: 40px;
   min-width: 220px;
   padding: 0 30px;
   border-top-left-radius: 4px;
   border-top-right-radius: 4px;

   span{
    background-color: transparent;
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0;
   }
`
export const ContainerOptions = styled.div<PropsOrdernador>`
    display: ${(props) => props.ativo ? "flex" : "none"};
    position: absolute;
    left: 0;
    flex-direction: column;
    top: 100%;
    width: 100%;
`

export const Option = styled.div`
    align-items: center;
    background-color: #E4E4E4;
    color: black;
    border-top: 2px solid white;
    box-sizing: border-box;
    display: flex;
    height: 40px;
    justify-content: center;
    width: inherit;
    font-size: 1rem;
    
    &:hover {
      background-color: #7090d3;
      color: white;
      cursor: pointer;
    }
`

export const AnimatedIconContainer = styled.i<PropsOrdernador>`
  display: flex;
  align-items: baseline;
  transition: all 0.3s ease;
  transform: ${(props) => (props.ativo ? 'rotate(180deg)' : 'rotate(0deg)')};
`