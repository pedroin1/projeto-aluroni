import styled from 'styled-components'
import imageHeader from '../../assets/header.png'

const paddingHorizontal = 250;

export const NavMenu = styled.nav `
    padding: 20px ${paddingHorizontal}px;
`

export const NavHeader = styled.header `

    display: flex;
    align-items: center;
    background-image: url(${imageHeader});
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    padding: 0 ${paddingHorizontal}px;

    span {
        color: white;
        background: none;
        font-size: 5rem;
        min-width: 400px;
        height: 40%;
    }
    
`

export const SectionCardapio = styled.section `
    padding: 50px ${paddingHorizontal}px;

    span {
        color: black;
        font-size: 3rem;
        margin-bottom: 30px;
    }
`

export const FiltrosSection = styled.section `
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
    width: 100%;
`