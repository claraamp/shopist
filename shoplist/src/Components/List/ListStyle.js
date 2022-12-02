import styled from "styled-components";
import Trash from '../../assets/icon-trash.svg'
import Add from '../../assets/add.svg'

export const Container = styled.section`
background-color: #010037;
width: 16em;
height: 10em;
color: #E4E4E4;
display: flex;
flex-direction: column;
padding-left: 1em;
border-radius: .5em;
box-shadow: 8px 8px 3px rgba(0, 0, 0, 0.3);
/* overflow: hidden; */
`

export const Title = styled.h2`
font-family: 'Abyssinica SIL', serif;
font-weight: 400;
font-size: 1.1em;
padding-top: 1em;
`
export const ListItems = styled.ul`
margin-top: .5em;
padding-left: .5em;
`
export const Item = styled.li`
list-style: none;
font-family: 'Raleway', sans-serif;
font-weight: 500;
display: flex;
flex-direction: column;
gap: .6em; 

`

export const BoxItem = styled.div`
display: flex;
width: 90%;
gap: 3em;
font-weight: 500;
font-size: .9em;
`

export const NameItem = styled.div`
display: flex; 
align-items: center;
width: 100%;
gap: .8em;
`

export const BtnTrash = styled.button`
background-image: url(${Trash});
background-size: contain;
background-position-y: calc(50%);
background-position-x: calc(50%);
background-repeat: no-repeat;
background-color: transparent;
width: 2em;
height: 2em;
border: none;
`
