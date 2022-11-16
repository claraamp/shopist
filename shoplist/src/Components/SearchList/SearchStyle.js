import styled from "styled-components";
import Lupa from '../../assets/icon-search.png'

export const Search = styled.input`
background-image: url(${Lupa});
cursor: pointer;
background-size: 45px;
background-position-y: calc(45%);
background-position-x: calc(98%);
background-repeat: no-repeat;
background-color: #010037;
border: none;
border-radius: 15px;
color: #E4E4E4;
font-size: 1.8em;
padding: 1em 1em 1.2em .8em;
width: 47%;
height: 2em;
font-family: 'Raleway', sans-serif;
position: relative;
right: 2em;

::placeholder {
    color: #E4E4E4;
}

@media only screen and (max-width: 880px) {
    width: 65%;
    right: 0em;
    left: 3em;
    font-size: 1.4em;
    background-size: 35px;
    padding: 2em 0em 2em 1em;

}

@media only screen and (max-width: 660px) {
    width: 70%;
    font-size: 1.2em;
}

@media only screen and (max-width: 450px) {
    background-size: 30px;
    font-size: .9em;
    padding: 2.2em 0em 2.2em 1em;

}

`