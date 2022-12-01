import styled from "styled-components";

export const BoxTitle = styled.h2`
background: ${(props) => props.color};
color: ${(props) => props.colorText};
width: 9rem;
height:2rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: .18em;
box-shadow: 3px 3px 3--px #8D8D8D;
`

export const Link = styled.a`
font-family: 'Abyssinica SIL', serif;
font-weight: 400;
font-size: 1.2rem;
`