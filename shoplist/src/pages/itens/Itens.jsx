import React from 'react'
import * as S from './ItensStyle'
import Search from '../../Components/SearchList/Search'
import Logo from '/Logo.png'
import { CategoryItem } from '../../Components/Categories/CategoryItem'
import Carousel from 'nuka-carousel/lib/carousel'

export default function Itens() {
  return (
    <S.Container>
      <S.BoxTop>
        <S.BtnExit />
        <Search placeholder={"Que item você precisa?"}/>
        <S.Logo src={Logo} alt="Logo Shopist" />
      </S.BoxTop>
      <S.Categories>
        <CategoryItem 
        nameCategory="Frutas" 
        color={'#DF43A1'} 
        colorText={'#6A0046'} 
        />

        <CategoryItem 
        nameCategory="Verduras" 
        color={'#FF8A00'} 
        colorText={'#783A00'} 
        />

        <CategoryItem 
        nameCategory="Limpeza"
        color={'#23EB02'} 
        colorText={'#107000'} 
        />

        <CategoryItem 
        nameCategory="Mercearia"
        color={'#2924FF'} 
        colorText={'#0E002B'} 
        />

        <CategoryItem 
        nameCategory="Higiene"
        color={'#DF43A1'} 
        colorText={'#6A0046'} 
        />

        <CategoryItem 
        nameCategory="Gelados"
        color={'#FF8A00'} 
        colorText={'#783A00'} 
        />

        <CategoryItem 
        nameCategory="Carnes"
        color={'#23EB02'} 
        colorText={'#107000'} 
        />

        <CategoryItem 
        nameCategory="Bebidas"
        color={'#2924FF'} 
        colorText={'#0E002B'} 
        />
      </S.Categories>
      <S.BoxBottom>
        <h2>

        </h2>
      </S.BoxBottom>
    </S.Container>
  )
}
