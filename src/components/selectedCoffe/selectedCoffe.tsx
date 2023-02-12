import { useForm, useFieldArray } from "react-hook-form";
import ItemCart from "../itemCart/ItemCart";
import {
  StyledSelectedCoffe,
  StyledSumValueItens,
  StyledDelivery,
  StyledTotal,
  StyledContentTotal,
  StyledButtonConfirm,
} from "../selectedCoffe/selectedCoffe.styles";

const SelectedCoffe = () => {
  const { fields: itens, remove } = useFieldArray({
    name: "item_order", // unique name for your Field Array
  });

  return (
    <StyledSelectedCoffe>
      {itens.map((item, index) => {
        return <ItemCart key={index} item={item} />;
      })}
      <StyledContentTotal>
        <StyledSumValueItens>
          <span>Total de Itens</span> <span> R$18,80</span>
        </StyledSumValueItens>
        <StyledDelivery>
          <span>Entrega</span> <span> R$4,20</span>
        </StyledDelivery>
        <StyledTotal>
          <span>Total</span> <span> R$23,00</span>
        </StyledTotal>
      </StyledContentTotal>
      <StyledButtonConfirm type="submit">Confirmar Pedido</StyledButtonConfirm>
    </StyledSelectedCoffe>
  );
};

export default SelectedCoffe;
