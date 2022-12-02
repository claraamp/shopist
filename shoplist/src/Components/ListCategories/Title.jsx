import React from 'react'
import * as S from './TitleStyle'

export default function Title(props) {
  return (
    <>
        <S.Title color={props.color}>{props.category} </S.Title>
    </>
  )
}
