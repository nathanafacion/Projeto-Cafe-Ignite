import {
  StyledPayment,
  StyledFormText,
  StyledFormTextPayment,
  StyledFormTextDescription,
  StyledIconPayment,
  StyledAllPayments,
} from "../payment/Payment.styles";
import CartaoCredito from "../../images/CartaoCredito.png";
import CartaoDebito from "../../images/CartaoDebito.png";
import Dinheiro from "../../images/Dinheiro.png";
import Pagamento from "../../images/Pagamento.png";
import { useFormContext } from "react-hook-form";

const Payment = () => {
  const { register } = useFormContext();

  return (
    <StyledPayment>
      <StyledFormText>
        <StyledFormTextPayment>
          <StyledIconPayment src={Pagamento} /> Pagamento
        </StyledFormTextPayment>
        <StyledFormTextDescription>
          O pagamento é feito na entrega. Escolha a forma de pagamento
        </StyledFormTextDescription>
      </StyledFormText>
      <StyledAllPayments className="radio-toolbar">
        <input
          type="radio"
          id="CARTAO_CREDITO"
          value="CARTAO_CREDITO"
          {...register("payment")}
        />
        <label htmlFor="CARTAO_CREDITO">
          <img src={CartaoCredito} /> Cartão de Crédito
        </label>
        <input
          type="radio"
          id="CARTAO_DEBITO"
          value="CARTAO_DEBITO"
          {...register("payment")}
        />
        <label htmlFor="CARTAO_DEBITO">
          <img src={CartaoDebito} /> Cartão de Débito
        </label>
        <input
          id="DINHEIRO"
          type="radio"
          {...register("payment")}
          value="DINHEIRO"
        />
        <label htmlFor="DINHEIRO">
          <img src={Dinheiro} /> Dinheiro
        </label>
      </StyledAllPayments>
    </StyledPayment>
  );
};

export default Payment;
