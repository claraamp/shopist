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
padding-left: .8em;
border-radius: .5em;
box-shadow: 8px 8px 3px rgba(0, 0, 0, 0.3);
overflow: hidden;
`

export const Title = styled.h2`
font-family: 'Abyssinica SIL', serif;
font-weight: 400;
font-size: 1.1em;
padding-top: .3em;
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

`

export const NameItem = styled.div`
display: flex;
width: 100%;
gap: .6em;
font-weight: 500;
font-size: .8em;
`
