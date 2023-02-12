import {
  StyledItemCart,
  StyledInfoCoffe,
  StyledImageCoffe,
  StyledHorizontalLine,
} from "./ItemCart.styles";
import Coffe1 from "../../images/Coffe1.png";
import ItemDetailCart from "../itemDetailCart/ItemDetailCart";
import { useFormContext } from "react-hook-form";

const ItemCart = ({ item }) => {
  const { register } = useFormContext();

  return (
    <>
      <StyledItemCart>
        <StyledInfoCoffe>
          <StyledImageCoffe src={Coffe1} />
          <ItemDetailCart item={item} />
        </StyledInfoCoffe>
        R$9,90
      </StyledItemCart>
      <StyledHorizontalLine />
    </>
  );
};

type Props = {
  item: Object;
};

export default ItemCart;
