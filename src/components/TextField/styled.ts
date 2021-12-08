import styled, { css } from "styled-components";
import TextField from "@material-ui/core/TextField";
import { defaultTheme } from "../../styles/defaultTheme";
import media from "styled-media-query";

type WrapperProps = {
  type: string;
};

export const Wrapper = styled.main<WrapperProps>`
  ${({ type }) => css`
    display: flex;
    flex-direction: column;
    min-height: ${type === "textarea" ? "20rem" : "9rem"};
  `}
`;

export const Label = styled.label``;

export const Input = styled(TextField)<WrapperProps>`
  ${({ type }) => css`
    .MuiInputBase-root {
      font-size: 1.6rem;
    }
    .MuiInputLabel-outlined {
      font-size: 1.4rem;
    }
    .MuiOutlinedInput-root {
      border-color: red;
    }
    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${defaultTheme.colors.orange};
    }

    .MuiFormLabel-root.Mui-focused {
      border-color: ${defaultTheme.colors.orange};
    }
    .MuiInputBase-root {
      font-size: 1.6rem;
      ${media.lessThan("medium")`
        font-size: 1.4rem;
      `}
    }
    .MuiOutlinedInput-input {
      padding: ${type !== "textarea" && "1.6rem 1.4rem"};
      ${media.lessThan("medium")`
        padding: ${type !== "textarea" && "2rem 1.4rem"};
      `}
    }
    .MuiFormHelperText-root.Mui-error {
      font-size: 1.3rem;
    }
    .MuiFormHelperText-contained {
      margin-left: 0;
    }

    .MuiOutlinedInput-root:focus
      .MuiOutlinedInput-root
      .Mui-focused
      .MuiOutlinedInput-notchedOutline {
      border-color: ${defaultTheme.colors.orange};
    }
  `}
`;
