import React from 'react'
import * as S from './ListStyle'

export default function List(title, item) {
  return (
    <S.Container>
        <S.Title>{props.title}</S.Title>
        <S.ListItems>
            <S.Item>
                <input type="checkbox" name="item" id="item" />
                <label htmlFor="item">{props.item}</label>
                <button><img src={Trash} alt="Icon de lixo" /></button>
            </S.Item>
        </S.ListItems>
        <S.Add></S.Add>
    </S.Container>
  )
}
