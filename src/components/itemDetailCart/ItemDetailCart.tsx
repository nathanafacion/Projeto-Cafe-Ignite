import {
  StyledItemDetailCart,
  StyledTitle,
  StyledActions,
  StyledCounter,
  StyledButtonRemove,
  StyledIcon,
} from "./ItemDetailCart.styles";
import Remove from "../../images/Remove.png";
import { useFormContext } from "react-hook-form";

const ItemDetailCart = ({ item, remove }: Props) => {
  const { register } = useFormContext();
  console.log("item", item);
  return (
    <StyledItemDetailCart>
      <StyledTitle> Expresso Tradicional</StyledTitle>
      <StyledActions>
        <StyledCounter
          type="number"
          {...register(`item_order.${item?.id}.item_number`)}
        />
        <StyledButtonRemove>
          <StyledIcon src={Remove} />
          REMOVE
        </StyledButtonRemove>
      </StyledActions>
    </StyledItemDetailCart>
  );
};

type Props = {
  item: Object;
};

export default ItemDetailCart;
