import React from 'react'
import * as S from './PopupDeleteStyle';

export default function PopupDelete({name='modal', onClose = () => {}}) {

  const [deletarLista, setDeletarLista] = useState('');
    const deletar = () => {
        axios.delete('http://localhost:5174/deletarlistas', {nomelista: criarLista}).then((response)=>{console.log(response)})
        onClose()
    };

    const handleOutsideClick = (e) => {
        if(e.target.getAttribute('name') === name)
        oncClose();
    }
  return (
    <S.Box name={name} onClick={handleOutsideClick}>
        <S.PopUp>
            <S.NameList>Deseja mesmo excluir esta lista?</S.NameList>
            <S.DeleteBtn onClick={() => {deletar()}}>Sim</S.DeleteBtn>
            <S.ReturnBtn onClick={() => {onClose()}}>Voltar</S.ReturnBtn>
        </S.PopUp>
    </S.Box>
  )
}
