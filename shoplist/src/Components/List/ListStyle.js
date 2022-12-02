import styled from "styled-components";
import Trash from '../../assets/icon-trash.svg'
import Add from '../../assets/add.svg'

export const Container = styled.section`
background-color: #010037;
width: 18rem;
height: 15em;
color: #E4E4E4;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-left: 1em;
border-radius: .5em;
box-shadow: 8px 8px 3px rgba(0, 0, 0, 0.3);
overflow: hidden;

`

export const Title = styled.h2`
font-family: 'Abyssinica SIL', serif;
font-weight: 400;
font-size: 1.1em;
padding-top: 1em;
cursor: pointer;
@media only screen and (max-width: 550px) {
    padding-top: .5em;
    font-size: 1.5em;
}
`
export const ListItems = styled.ul`
height: 7em;
margin-top: .5em;
padding-left: .5em;

`
export const Item = styled.li`
list-style: none;
font-family: 'Raleway', sans-serif;
font-weight: 500;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 1.8em;


`

export const BoxItem = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
width: 100%;
height: 100%;
gap: 3em;
font-weight: 500;
font-size: .9em;
cursor: pointer;

`

export const NameItem = styled.div`
display: flex; 
align-items: center;
width: 100%;
gap: .8em;
`

export const BtnTrash = styled.button`
background-image: url(${Trash});
background-size: 1.2em;
background-position: calc(50%);
background-repeat: no-repeat;
background-color: transparent;
width: 2em;
height: 2em;
border: none;
margin-right: 2em;
cursor: pointer;
`
export const BoxAddItem = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: end;
gap: .2em;
background-color: #010037;
padding: 1em;
`

export const AddItem = styled.p`
font-size: .65em;
font-family: 'Raleway', sansserif;
font-weight: 700;
color: #000000;
padding: .8em 1em .8em 1em;
border-radius:20px;
background-color: rgba(255, 138, 0, .55);
@media only screen and (max-width: 550px) {
    font-size: .55em;
}
`

export const BtnAdd = styled.button`
background-image: url(${Add});
background-size: 3.8em;
background-repeat: no-repeat;
background-color: #FF8A00;
width: 3.8em;
height: 3.8em;
border: none;
border-radius: 60px;
cursor: pointer;
@media only screen and (max-width: 550px) {
    background-size: 3em;
    width: 3em;
    height: 3em;
}
`

