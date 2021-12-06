import Heading from "../Heading";
import * as S from "./styled";
import TextField from "../TextField";
import Button from "../Button";
import SnackBar from "../Snackbar";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import budgetSchema from "../../validations/budgetSchema";

import { useState } from "react";

const frame = "/img/frame2.svg";

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
        <S.Form onSubmit={handleSubmit(onSubmit)}>
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
                <TextField
                  labelText="Telefone"
                  value={value}
                  onChange={onChange}
                  error={!!errors?.phone}
                  helperText={errors?.phone?.message}
                />
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
