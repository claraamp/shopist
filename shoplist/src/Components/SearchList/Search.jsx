import React from 'react'
import * as S from './SearchStyle'

export default function Search(props) {
  return (
    <>
        <S.Search type="search" placeholder={props.placeholder}/>
    </>
  )
}
