import * as S from "./styled";

type InputProps = {
  labelText?: string;
  type?: string;
  error: boolean;
  helperText: string;
  value: string;
  onChange: () => void;
};

const Input = ({
  labelText = "Nome",
  type = "normal",
  error,
  helperText,
  value,
  onChange,
  ...props
}: InputProps) => {
  return (
    <S.Wrapper type={type}>
      {type === "textarea" ? (
        <S.Input
          variant="outlined"
          value={value}
          onChange={onChange}
          label={labelText}
          multiline
          minRows={5}
          maxRows={6}
          type={type}
          error={!!error}
          helperText={helperText}
          {...props}
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
          {...props}
        />
      )}
    </S.Wrapper>
  );
};

export default Input;
