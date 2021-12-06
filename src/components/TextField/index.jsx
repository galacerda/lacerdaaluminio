import * as S from "./styled";

const Input = ({
  labelText = "Nome",
  type = "normal",
  error,
  helperText,
  value,
  onChange,
}) => {
  return (
    <S.Wrapper>
      {type === "textarea" ? (
        <S.Input
          variant="outlined"
          value={value}
          onChange={onChange}
          label={labelText}
          multiline
          rows={5}
          rowsMax={6}
          type={type}
          error={!!error}
          helperText={helperText}
        />
      ) : (
        <S.Input
          variant="outlined"
          value={value}
          onChange={onChange}
          label={labelText}
          type={type}
          error={!!error}
          helperText={helperText}
        />
      )}
    </S.Wrapper>
  );
};

export default Input;
