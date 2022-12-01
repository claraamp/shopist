import styled from "styled-components";
import ArrowLeft from '../../assets/arrow-left.svg'

export const Container = styled.section`
width: 100%;
height: 100vh;
background-color: #E4E4E4;
`

export const BoxTop = styled.section`
width: 100%;
height: 10em;
display: flex;
align-items: center;
justify-content: center;
gap: 7em;
`

export const BtnExit = styled.button`
width: 3.7em;
height: 2.1em;
border: none;
background-color: transparent;
background-image: url(${ArrowLeft});
cursor: pointer;
background-size: cover;
background-repeat: no-repeat;
background-position-y: calc(50%);

`

export const Logo = styled.img`
width: 17em;
height: 9em;
`

export const Categories = styled.section`
display: flex;
flex-direction: column;
gap:1em;
`

export const BoxBottom = styled.section``