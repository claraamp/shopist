import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import * as S from './ItensStyle'
import Search from '../../Components/SearchList/Search'
import Logo from '/Logo.png'
import { CategoryItem } from '../../Components/ListCategories/CategoryItem'
import Title from '../../Components/ListCategories/Title'
import Carousel from 'nuka-carousel/lib/carousel'


export default function Itens() {
  const [ itens, useItens ] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('http://localhost:5174/itens').then(res => useItens(res.data));
        console.log(itens)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])


  return (
    <S.Container>
      <S.BoxTop>
        <Link  to='/'>
          <S.BtnExit />
        </Link>
        <Search placeholder={"Que item você precisa?"}/>
        <S.Logo src={Logo} alt="Logo Shopist" />
      </S.BoxTop>
      <S.Contain>
        <S.Categories>
          <CategoryItem 
          nameCategory="Frutas" 
          color={'#DF43A1'} 
          colorText={'#6A0046'} 
          href={'#frutas'} 
          />

          <CategoryItem 
          nameCategory="Verduras" 
          color={'#FF8A00'} 
          colorText={'#783A00'} 
          href={'#verduras'} 
          />

          <CategoryItem 
          nameCategory="Limpeza"
          color={'#23EB02'} 
          colorText={'#107000'}
          href={'#limpeza'}  
          />

          <CategoryItem 
          nameCategory="Mercearia"
          color={'#2924FF'} 
          colorText={'#0E002B'} 
          href={'#mercearia'} 
          />

          <CategoryItem 
          nameCategory="Higiene"
          color={'#DF43A1'} 
          colorText={'#6A0046'}
          href={'#higiene'}  
          />

          <CategoryItem 
          nameCategory="Gelados"
          color={'#FF8A00'} 
          colorText={'#783A00'}
          href={'#gelados'} 
          />

          <CategoryItem 
          nameCategory="Carnes"
          color={'#23EB02'} 
          colorText={'#107000'} 
          href={'#carnes'} 
          />

          <CategoryItem 
          nameCategory="Bebidas"
          color={'#2924FF'} 
          colorText={'#0E002B'}
          href={'#bebidas'} 
          />
        </S.Categories>
        <S.BoxSide>
        <S.BoxCategory id={'frutas'}>
          <Title category={'Frutas'} color={'#AE005E'}/>
          {itens.map(item => (
            <>
            {item.idcategorias === 1 ? 
            <img src={item.url_foto} alt={item.nome} title={item.nome}/> 
            : null}
            </>
          ))}
        </S.BoxCategory>
        <S.BoxCategory id={'verduras'}>
          <Title category={'Verduras'} color={'#BC4400'}/>
          {itens.map(item => (
            <>
            {item.idcategorias === 2 ? 
            <img src={item.url_foto} alt={item.nome} title={item.nome}/> 
            : null}
            </>
          ))}
        </S.BoxCategory>
        <S.BoxCategory id={'limpeza'}>
          <Title category={'Limpeza'} color={'#136000'}/>
          {itens.map(item => (
            <>
            {item.idcategorias === 3 ? 
            <img src={item.url_foto} alt={item.nome} title={item.nome}/> 
            : null}
            </>
          ))}
        </S.BoxCategory>
        <S.BoxCategory id={'mercearia'}>
          <Title category={'Mercearia'} color={'#010037E'}/>
          {itens.map(item => (
            <>
            {item.idcategorias === 4 ? 
            <img src={item.url_foto} alt={item.nome} title={item.nome}/> 
            : null}
            </>
          ))}
        </S.BoxCategory>
        <S.BoxCategory id={'higiene'}>
          <Title category={'Higiene'} color={'#AE005E'}/>
          {itens.map(item => (
            <>
            {item.idcategorias === 5 ? 
            <img src={item.url_foto} alt={item.nome} title={item.nome}/> 
            : null}
            </>
          ))}
        </S.BoxCategory>
        <S.BoxCategory id={'gelados'}>
          <Title category={'Gelados'} color={'#BC4400'}/>
          {itens.map(item => (
            <>
            {item.idcategorias === 6 ? 
            <img src={item.url_foto} alt={item.nome} title={item.nome}/> 
            : null}
            </>
          ))}
        </S.BoxCategory>
        <S.BoxCategory id={'carnes'}>
          <Title category={'Carnes'} color={'#136000'}/>
          {itens.map(item => (
            <>
            {item.idcategorias === 7 ? 
            <img src={item.url_foto} alt={item.nome} title={item.nome}/> 
            : null}
            </>
          ))}
        </S.BoxCategory>
        <S.BoxCategory id={'bebidas'}>
          <Title category={'Bebidas'} color={'#BC4400'} />
          {itens.map(item => (
            <>
            {item.idcategorias === 8 ? 
            <img src={item.url_foto} alt={item.nome} title={item.nome}/> 
            : null}
            </>
          ))}
        </S.BoxCategory>
        <div>
          {/* {itens.map(item => (
            <>
              <h2>{itens.descricao}</h2>
            </>
          ))} */}
        </div>
        </S.BoxSide>
      </S.Contain>
    </S.Container>
  )
}
