import styled from "styled-components";
import Return from '../../assets/arrow-left-orange.svg'
import Delete from '../../assets/delete.svg'
import Trash from '../../assets/icon-trash.svg'
import Add from '../../assets/add.svg'

export const Container = styled.section`
background-color: #010037;
width: 100%;
height: 100vh;
color: #E4E4E4;
display: flex;
flex-direction: column;
align-items: center;

`
export const BoxTop = styled.div`
display: flex;
flex-direction: row;
padding: 3em 0em 1em 0em;
width: 93%;
justify-content: space-between;
align-items: center;
align-self: center;
`

export const BtnReturn = styled.button`
background-image: url(${Return});
background-size: 2em;
background-repeat: no-repeat;
background-position: center;
background-color: transparent;
width: 2.5em;
height: 2.5em;
border: none;
cursor: pointer;
`

export const BtnDelete = styled.button`
background-image: url(${Delete});
background-size: 2em;
background-repeat: no-repeat;
background-position: center;
background-color: transparent;
width: 2.5em;
height: 2.5em;
border: none;
cursor: pointer;
`

export const Title = styled.h1`
display: flex;
align-self: flex-start;
font-family: 'Abyssinica SIL', serif;
font-weight: 400;
font-size: 3em;
padding-left: 3em;
@media only screen and (max-width: 730px) {
    padding-left: 0em;
    align-self: center;
}

@media only screen and (max-width: 500px) {
    font-size: 2.5em;
}

`

export const ListItems = styled.ul`
margin-top: 3em;
width: 90%;
height: 100%;
`

export const Item = styled.li`
list-style: none;
font-family: 'Raleway', sans-serif;
font-weight: 500;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 3em;
`

export const NameItem = styled.div`
display: flex; 
align-items: center;
height: 100%;
width: 100%;
gap: .8em;

input{
    width: 2em;
    height: 2em;
}
label{
    font-size: 1.3em;
}
`

export const BtnTrash = styled.button`
background-image: url(${Trash});
background-size: 2em;
background-position: calc(50%);
background-repeat: no-repeat;
background-color: transparent;
width: 2.5em;
height: 2.5em;
border: none;
cursor: pointer;
`

export const BoxAddItem = styled.div`
display: flex;
width: 100%;
height: 100%;
align-items: flex-end;
justify-content: end;
gap: .2em;
padding: 2em 3em 3em 0em;
`

export const AddItem = styled.p`
position:relative;
bottom: 1.2em;
font-size: .8em;
font-family: 'Raleway', sansserif;
font-weight: 700;
color: #000000;
padding: .5em .8em .5em .8em;
border-radius:20px;
background-color: rgba(255, 138, 0, .55);
`

export const BtnAdd = styled.button`
background-image: url(${Add});
background-size: 4em;
background-repeat: no-repeat;
background-color: #FF8A00;
width: 4em;
height: 4em;
border: none;
border-radius: 60px;
cursor: pointer;
`