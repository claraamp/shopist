import React from 'react';
import * as S from './PopupStyle'

export default function Popup({id='modal', onClose = () => {}}) {

    const handleOutsideClick = (e) =>{
        if(e.target.id === id) onClose();
    }
    return (
        <S.Box id={id} onClick={handleOutsideClick}>
            <S.PopUp>
                <S.NameList type="text" placeholder='Digite aqui o nome de sua nova lista' />
                <S.CreateBtn type="submit">Criar</S.CreateBtn>
            </S.PopUp>
        </S.Box>
    );
}
