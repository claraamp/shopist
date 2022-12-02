import React, { useState } from 'react';
import { Axios } from 'axios';
import * as S from './PopupStyle';

export default function Popup({name='modal', onClose = () => {}}) {

    const handleOutsideClick = (e) =>{
        if(e.target.getAttribute('name') === name) onClose();
    }
    return (
        <S.Box name={name} onClick={handleOutsideClick}>
            <S.PopUp>
                <S.NameList type="text" placeholder='Digite aqui o nome de sua nova lista' />
                <S.CreateBtn>Criar</S.CreateBtn>
            </S.PopUp>
        </S.Box>
    );
}