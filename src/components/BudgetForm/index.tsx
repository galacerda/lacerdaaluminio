import Heading from "../Heading";
import * as S from "./styled";
import TextField from "../TextField";
import Button from "../Button";
import SnackBar from "../Snackbar";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import budgetSchema from "../../validations/budgetSchema";
import InputMask from "react-input-mask";

import { useState } from "react";

const BudgetForm = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(budgetSchema),
  });

  const onSubmit = async (data) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (response.success) {
      setOpen(true);
      setType("success");
      setMessage(
        "Orçamento solicitado com sucesso, entraremos em contato em breve!"
      );
      reset({
        name: "",
        email: "",
        phone: "",
        city: "",
        description: "",
      });
    } else {
      setOpen(true);
      setType("error");
      setMessage("Erro ao solicitar orçamento, tente novamente mais tarde!");
    }
  };
  return (
    <S.Wrapper id="budget-form">
      <Heading lineLeft>Solicite um orçamento</Heading>
      <S.Content>
        <p>
          Solicite aqui um orçamento. Nossa equipe irá entrar em contato com
          você para prosseguir com o atendimento. Portanto, insira dados reais
          de contato. Caso queira fazer contato diretamente com um atendente,
          mande uma mensagem no WhatsApp!
        </p>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <span>Preencha todos os campos</span>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                labelText="Nome"
                value={value}
                onChange={onChange}
                error={!!errors?.name}
                helperText={errors?.name?.message}
              />
            )}
          />

          <S.Line>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  labelText="E-mail"
                  value={value}
                  onChange={onChange}
                  error={!!errors?.email}
                  helperText={errors?.email?.message}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <InputMask
                  mask="(99) 99999-9999"
                  value={value}
                  onChange={onChange}
                  maskChar=""
                >
                  {(inputProps) => (
                    <TextField
                      {...inputProps}
                      labelText="Telefone"
                      error={!!errors?.phone}
                      helperText={errors?.phone?.message}
                    />
                  )}
                </InputMask>
              )}
            />
          </S.Line>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                labelText="Cidade"
                value={value}
                onChange={onChange}
                error={!!errors?.city}
                helperText={errors?.city?.message}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                labelText="Observação sobre o serviço"
                type="textarea"
                value={value}
                onChange={onChange}
                error={!!errors?.description}
                helperText={errors?.description?.message}
              />
            )}
          />
          <S.ButtonWrapper>
            <Button text="Solicitar orçamento" type="submit" />
          </S.ButtonWrapper>
        </S.Form>
      </S.Content>
      <SnackBar
        open={open}
        type={type}
        handleClose={() => setOpen(false)}
        message={message}
      />
    </S.Wrapper>
  );
};

export default BudgetForm;
