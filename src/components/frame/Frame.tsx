import {
  StyledFrame,
  StyledIconLocation,
  StyledForm,
  StyledFormText,
  StyledFormTextAddress,
  StyledFormTextDescription,
  StyledFormAllFields,
  StyledInputCEP,
  StyledInputRua,
  StyledInfoForm,
  StyledInputNumero,
  StyledInputComplemento,
  StyledInputBairro,
  StyledInputCidade,
  StyledInputUF,
} from "../frame/Frame.styles";
import Localizacao from "../../images/Localizacao.png";
import { useFormCoffee } from "../../context/formContext";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Frame = () => {
  // const createStatus = useFormCoffee();
  const {
    register,
    formState: { errors },
  } = useFormContext();
  console.log("errors", errors);

  return (
    <>
      <StyledFrame>
        <StyledForm>
          <StyledFormText>
            <StyledFormTextAddress>
              <StyledIconLocation src={Localizacao} /> Endereço de Entrega
            </StyledFormTextAddress>
            <StyledFormTextDescription>
              Informe o endereço onde deseja receber o pedido
            </StyledFormTextDescription>
          </StyledFormText>
          <StyledFormAllFields>
            <StyledInputCEP placeholder="CEP" {...register("CEP")} />
            <ErrorMessage errors={errors} name="CEP" as="p" />
            <StyledInputRua placeholder="Rua" {...register("Rua")} />
            <ErrorMessage errors={errors} name="Rua" as="p" />
            <StyledInfoForm>
              <StyledInputNumero
                type="number"
                placeholder="Número"
                {...register("Numero")}
              />
              <ErrorMessage errors={errors} name="Numero" as="p" />
              <StyledInputComplemento
                placeholder="Complemento"
                {...register("Complemento")}
              />
              <ErrorMessage errors={errors} name="Complemento" as="p" />
            </StyledInfoForm>
            <StyledInfoForm>
              <StyledInputBairro placeholder="Bairro" {...register("Bairro")} />
              <ErrorMessage errors={errors} name="Bairro" as="p" />
              <StyledInputCidade placeholder="Cidade" {...register("Cidade")} />
              <ErrorMessage errors={errors} name="Cidade" as="p" />
              <StyledInputUF placeholder="UF" {...register("UF")} />
              <ErrorMessage errors={errors} name="UF" as="p" />
            </StyledInfoForm>
            <StyledInfoForm></StyledInfoForm>
          </StyledFormAllFields>
        </StyledForm>
      </StyledFrame>
    </>
  );
};

export default Frame;
