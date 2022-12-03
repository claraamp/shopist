import React, { useState } from 'react';
import axios from 'axios';
import * as S from './PopupStyle'
 
export default function Popup({name='modal', onClose = () => {}}) {

    const [criarLista, setCriarLista] = useState('');
    const criar = () => {
        axios.post('http://localhost:5174/listas', {nomelista: criarLista}).then((response)=>{console.log(response)})
        onClose()
    };

    const handleOutsideClick = (e) =>{
        if(e.target.getAttribute('name') === name) onClose(); 
    }
    return (
        <S.Box name={name} onClick={handleOutsideClick}>
            <S.PopUp>
                <S.NameList type="text" onChange={(event)=>{setCriarLista(event.target.value)}} placeholder='Digite aqui o nome de sua nova lista' />
                <S.CreateBtn onClick={() => {criar()}}>Criar</S.CreateBtn>
            </S.PopUp> 
        </S.Box>
    );
}