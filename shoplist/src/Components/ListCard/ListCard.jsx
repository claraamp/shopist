import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as S from './ListCardStyle'
import { Link } from 'react-router-dom'

export default function ListCard(){

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
    <>
      {listas.map(item => (
        <S.Container key={item.idlistas}>
          <Link to='/list'>
            <S.Title>{item.nomelista}</S.Title>
            <S.ListItems>
              <S.Item>
                <S.BoxItem>
                  <S.NameItem>
                    <input type="checkbox" name="item" id="item" />
                    <label htmlFor='item'>{item.nome_produto}</label>
                  </S.NameItem>
                  <S.BtnTrash />
                </S.BoxItem>
              </S.Item>
            </S.ListItems>
          </Link>
            
          <S.BoxAddItem>
            <S.AddItem>Adicione um novo item</S.AddItem>
            <Link to='/adicionar-itens'>
              <S.BtnAdd />
            </Link>
          </S.BoxAddItem>
        </S.Container>
      ))}
    </>
  )
}