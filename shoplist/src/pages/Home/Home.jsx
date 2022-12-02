import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from "/Logo.png"
import Exit from '../../assets/exit.svg'
import Boy from '../../assets/boy.png'
import Search from '../../Components/SearchList/Search'
import Popup from '../../Components/Popup/Popup'
import * as S from './HomeStyle'
import List from '../../Components/List/List'
import axios from 'axios'

export default function Home() {


  const [ btnPopup, setBtnPopup ] = useState(false);

  return (
    <S.Container>
      <S.BoxTop>
        <S.Logo src={Logo} alt="Logo Shopist" />
        <Search placeholder={"Que lista você deseja?"}/>
        <Link to='/login'>
          <S.ExitBtn>
            <img src={Exit} alt="Ícone de saída" />
          </S.ExitBtn>
        </Link>
      </S.BoxTop>
      <S.Contain>
        <S.Box>
          <div>
            <img src={Boy} alt="Ilustração de homem escrevendo em bloco de notas" />
            <p>Ainda não há nada por aqui...</p>
          </div>
        </S.Box>
        <S.BoxBottom>
          <S.AddList onClick={() => setBtnPopup(true)}>Criar uma nova lista</S.AddList>
        </S.BoxBottom>
      </S.Contain>
      {btnPopup ? (
        <Popup onClose={() => setBtnPopup(false)} />
      ) : null }
    </S.Container>
  )
}