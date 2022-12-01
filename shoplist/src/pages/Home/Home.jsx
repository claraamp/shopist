import React, { useState} from 'react'
import Logo from "/Logo.png"
import Exit from '../../assets/exit.svg'
import Boy from '../../assets/boy.png'
import Search from '../../Components/SearchList/Search'
import Popup from '../../Components/Popup/Popup'
import * as S from './HomeStyle'
import List from '../../Components/List/List'

export default function Home() {

  const [ btnPopup, setBtnPopup ] = useState(false);

  return (
    <S.Container>
      <S.BoxTop>
        <S.Logo src={Logo} alt="Logo Shopist" />
        <Search placeholder={"Que lista você deseja?"}/>
        <S.ExitBtn>
        <img src={Exit} alt="Ícone de saída" />
        </S.ExitBtn>
      </S.BoxTop>
      <S.Contain>
        <S.BoxList>
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
          <List />
        </S.BoxList>
        <S.BoxBottom>
          {/* <div>
            <img src={Boy} alt="Ilustração de homem escrevendo em bloco de notas" />
            <p>Ainda não há nada por aqui...</p>
          </div> */}
          <S.AddList onClick={() => setBtnPopup(true)}>Criar uma nova lista</S.AddList>
        </S.BoxBottom>
      </S.Contain>
      {btnPopup ? (
        <Popup onClose={() => setBtnPopup(false)} />
      ) : null }
    </S.Container>
  )
}