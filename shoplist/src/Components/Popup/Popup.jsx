import React, { useState } from 'react';
import { Axios } from 'axios';
import * as S from './PopupStyle'

export default function Popup({id='modal', onClose = () => {}}) {

    const [criarLista, setCriarLista] = useState('');
    const criar = () => {
        Axios.post('https://127.0.0.1:5173/', {nome_lista: criarLista}).then((response) => {console.log(response)})
    };

    const handleOutsideClick = (e) =>{
        if(e.target.id === id) onClose();
    }
    return (
        <S.Box id={id} onClick={handleOutsideClick}>
            <S.PopUp>
                <S.NameList type="text" onChange={(e)=>{setCriarLista(e.target.value)}} placeholder='Digite aqui o nome de sua nova lista' />
                <S.CreateBtn type="submit" onClick={criar}>Criar</S.CreateBtn>
            </S.PopUp>
        </S.Box>
    );
}
