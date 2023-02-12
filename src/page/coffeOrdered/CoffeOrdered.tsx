import React, { useState, useEffect, useContext } from "react";
import { StyledCoffe, GlobalStyle, StyledTitles } from "./CoffeOrdered.styles";
import Header from "../../components/header/Header";
import Frame from "../../components/frame/Frame";
import Payment from "../../components/payment/Payment";
import SelectedCoffe from "../../components/selectedCoffe/selectedCoffe";
// import { FormProvider } from "../../context/formContext";
import { useForm, FormProvider } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const typePayments = {
  Credito: "CARTAO_CREDITO",
  Dinheiro: "DINHEIRO",
  Debito: "CARTAO_DEBITO",
} as const;

const defaultValuesForm = {
  Bairro: "",
  Cidade: "",
  Numero: "",
  Rua: "",
  UF: "",
  CEP: "",
  payment: typePayments.Dinheiro,
  item_order: [{ item_number: 1 }, { item_number: 2 }, { item_number: 4 }],
};

const itensValidation = z.object({
  item_number: z.number().min(1, { message: "Informe um número" }),
});

const CoffeOrdered = () => {
  const validationSchema = z.object({
    Bairro: z.string().min(1, { message: "Informe o bairro" }),
    Cidade: z.string().min(1, { message: "Informe a cidade" }),
    Numero: z.number().min(1, "Informe o número"),
    Rua: z.string().min(1, { message: "Informe o bairro de entrega" }),
    UF: z.string().length(2, { message: "Informe o seu estado. Exemplo: SP" }),
    CEP: z.string().regex(new RegExp(/^[0-9]{5}-[0-9]{3}$/), {
      message: "Informe o cep de entrega",
    }),
    payment: z.nativeEnum(typePayments, {
      errorMap: () => {
        return { message: "Escolha uma das formas de pagamento" };
      },
    }),
    item_order: z.array(itensValidation),
  });

  const formMethods = useForm({
    defaultValues: defaultValuesForm,
    resolver: zodResolver(validationSchema),
  });

  return (
    <>
      <GlobalStyle />
      <StyledCoffe>
        <Header />
        <StyledTitles>
          <span>Complete seu pedido</span> <span>Cafés selecionados</span>
        </StyledTitles>
        <FormProvider {...formMethods}>
          <form
            onSubmit={formMethods.handleSubmit((data) => console.log(data))}
          >
            <Frame />
            <Payment />
            <SelectedCoffe />
          </form>
        </FormProvider>
      </StyledCoffe>
    </>
  );
};

export default CoffeOrdered;
