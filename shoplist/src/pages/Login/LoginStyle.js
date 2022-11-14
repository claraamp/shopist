import styled from "styled-components";
import Fruits from "../../assets/Inspiração.png";

export const Container = styled.section`
    background-color: #E4E4E4;
    display: flex;
    justify-content: space-between;

`

export const BoxSide = styled.div`
    display: flex;
    flex-direction: column;
`

export const Image = styled.img`
    width: 50%;
    height: 100vh;
    background-image: url(${Fruits});
    background-repeat: no-repeat;
    background-position-y: bottom;
    border: none;

`