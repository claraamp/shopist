import styled from "styled-components";
import ArrowLeft from '../../assets/arrow-left.svg'

export const Container = styled.section`
width: 100%;
height: 100%;
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

export const Contain = styled.div`
display: flex;
height:100%;
width: 100%;

`

export const Categories = styled.section`
display: flex;
width: 20em;
flex-direction: column;
align-items: center;
gap:1.5em;

`

export const BoxSide = styled.section`
display: flex;
flex-direction: column;
gap: 2em;
height: 140em;
width: 100%;
`

export const BoxCategory = styled.section`
display: flex;
height: 100%;
width: 90%;
justify-content: space-around;
align-items:center;



img{
    width: 5em;
    height:5em;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 3px 3px 3px #8D8D8D;
}
`