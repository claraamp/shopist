import styled from "styled-components";

export const Box = styled.section`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
left: 0;
bottom: 40em;
z-index: 999999;
background-color: rgba(0, 0, 0, 0.4);

`

export const PopUp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
width: 33em;
height: 18em;
border-radius: .6em;
background-color: #FF8A00;

`

export const NameList = styled.input`
width: 85%;
height: 2.5em;
border: none;
border-radius: .4em;
background-color: #E4E4E4;
font-family: 'Raleway', sans-serif;
font-size: 1.5em;
color: #02006C;
font-weight: 700;
padding-left: .5em;
::placeholder{
    color: #02006C;
}
`

export const CreateBtn = styled.button`
width: 35%;
height: 1.5em;
border: none;
border-radius: .2em;

background-color: #E4E4E4;
font-family: 'Raleway', sans-serif;
font-size: 2em;
font-weight: 700;
color: #02006C;
text-transform: uppercase;
cursor: pointer;

`