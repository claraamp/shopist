import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Logo from "/Logo.png"
import Exit from '../../assets/exit.svg'
import Boy from '../../assets/boy.png'
import Search from '../../Components/SearchList/Search'
import Popup from '../../Components/Popup/Popup'
import * as S from './HomeStyle'
import List from '../../Components/List/List'

export default function Home() {

  const [ btnPopup, setBtnPopup ] = useState(false);
  const [ listas, useListas ] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('http://localhost:5174/listas').then(res => useListas(res.data));
        console.log(listas)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

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
          {/* <div>
            <img src={Boy} alt="Ilustração de homem escrevendo em bloco de notas" />
            <p>Ainda não há nada por aqui...</p>
          </div> */}
          
            {listas.map(item => (
              <div>
                <List title={item.nomelista} product={item}>
                </List>
              </div>
            ))}
          
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