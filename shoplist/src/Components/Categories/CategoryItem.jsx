import * as S from './CategoryItemStyle'

export function CategoryItem(props){
    return(
        <>
            <S.BoxTitle color={props.color} colorText={props.colorText}>
            <S.Link href={props.link}>
                {props.nameCategory}
            </S.Link>
            </S.BoxTitle>
        </>
    )
}