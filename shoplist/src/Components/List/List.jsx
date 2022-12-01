import React from 'react'
import * as S from './ListStyle'

export default function List() {
  return (
    <S.Container>
      <S.Title>Feira semanal</S.Title>
      <S.ListItems>
        <S.Item>
          <S.NameItem>
            <S.BoxItem>
            <input type="checkbox" name="item" id="item" />
            <label htmlFor='item'>Banana</label>
            </S.BoxItem>
            <button> </button>
          </S.NameItem>
        </S.Item>

      </S.ListItems>
    </S.Container>
  )
}
{/* <S.Container>
<S.Title>Lista</S.Title>
<S.ListItems>
    <S.Item>
        <input type="checkbox" name="item" id="item" />
        <label htmlFor="item"></label>
        <button><img src={Trash} alt="Icon de lixo" /></button>
    </S.Item>
</S.ListItems>
<S.Add></S.Add>
</S.Container> */}