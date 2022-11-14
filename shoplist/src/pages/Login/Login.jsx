import React from "react";
import '../Login/Login.css';
import Logo from "/Logo.png";
import * as S from './LoginStyle.js'



function Login() {
    return (
        <S.Container>
            <S.Image />
            <S.BoxSide>
            <div className="logo-texto">
                <img src={Logo} alt="logo shopist"></img>
                <h1>Seja bem-vindo!</h1>
                <p>Faça seu cadastro gratuitamente e tenha acesso à melhor plataforma de lista de compras que você já viu!</p>
            </div>
            <div className="login">
                <input type="text" placeholder="EMAIL"></input>
                <input type="text" placeholder="SENHA"></input>
                <p>Você ainda não tem uma conta?<a href="/">Cadastre-se</a></p>
                <button type="submit">ENTRAR</button>
            </div>
            </S.BoxSide>
        </S.Container>
    )
   
}


export default Login