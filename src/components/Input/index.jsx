import * as S from './styled';

const Input = ({labelText}) => {
    return(
        <S.Wrapper>
            <S.Label>{labelText}</S.Label>
        </S.Wrapper>
    )
}

export default Input;