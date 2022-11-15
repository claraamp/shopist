import styled from 'styled-components'
import Add from '../../assets/add.svg'

export const Container = styled.section`
height: 100vh;
background-color: #2924FF;
`

export const BoxTop = styled.section`
display: flex;
align-items: center;
justify-content: space-around;
padding-top: 1.5em;
`
export const Logo = styled.img`
width: 17em;
height: 9em;
`

export const ExitBtn = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
`

export const BoxBottom = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;


div{
    display: flex;
    flex-direction: column;
    align-items: center;
}

img{
    width: 14em;
}

p{
    margin-top: 1em;
    font-size: 1.5em;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;

}
`
export const AddList = styled.button`
text-transform: uppercase;
background-image: url(${Add});
background-size: 3.4em;
background-repeat: no-repeat;
background-position-y: calc(50%);
background-position-x: calc(98%);
background-color: #FF8A00;
width: 20em;
height: 4em;
border: none;
border-radius: 1.2em;
font-size: 1em;
font-family: 'Raleway', sans-serif;
font-weight: 700;
display: flex;
justify-content: center;
align-items: center;
`
