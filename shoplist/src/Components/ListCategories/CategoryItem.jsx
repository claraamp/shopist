import * as S from './CategoryItemStyle'

export function CategoryItem(props){
    return(
        <>
            <S.BoxTitle color={props.color}>
                <S.Link href={props.href} colorText={props.colorText}>
                    {props.nameCategory}
                </S.Link>
            </S.BoxTitle>
        </>
    )
}