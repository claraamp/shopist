import React from 'react'
import * as S from './ListStyle'
import { Link } from 'react-router-dom'

export default function List(props) {
  return (
    <S.Container>
      <S.Title>{props.title}</S.Title>
      <S.ListItems>
        <S.Item>
          <S.BoxItem>
            <S.NameItem>
            <input type="checkbox" name="item" id="item" />
            <label htmlFor='item'>{props.produto}</label>
            </S.NameItem>
            <S.BtnTrash />
          </S.BoxItem>
        </S.Item>        
      </S.ListItems>
      <S.BoxAddItem>
        <S.AddItem>Adicione um novo item</S.AddItem>
        <Link to='/adicionar-itens'>
         <S.BtnAdd />
        </Link>
      </S.BoxAddItem>
    </S.Container>
  )
}