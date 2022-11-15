import React from 'react'
import Logo from "/Logo.png"
import Exit from '../../assets/exit.svg'
import Boy from '../../assets/boy.png'
import Search from '../../Components/SearchList/Search'
import * as S from './InicioStyle'

export default function Inicio() {
  return (
    <S.Container>
      <S.BoxTop>
        <S.Logo src={Logo} alt="Logo Shopist" />
        <Search />
        <S.ExitBtn>
          <img src={Exit} alt="Icon de saída" />
        </S.ExitBtn>
      </S.BoxTop>
      <S.BoxBottom>
        <div>
          <img src={Boy} alt="Ilustração de homem escrevendo em bloco de notas" />
          <p>Ainda não há nada por aqui...</p>
        </div>
        <S.AddList>Criar uma nova lista</S.AddList>
      </S.BoxBottom>
    </S.Container>
  )
}
