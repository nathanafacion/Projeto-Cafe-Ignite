import {
  StyledHeader,
  StyledImage,
  StyledInformation,
  StyledLocation,
  StyledIconLocation,
  StyledCart,
  StyledIconCart,
  StyledCounter,
} from "./Header.styles";
import Logo from "../../images/Logo.png";
import Localizacao from "../../images/Localizacao.png";
import Carrinho from "../../images/Carrinho.png";

const Header = () => {
  return (
    <StyledHeader>
      <StyledImage src={Logo} />
      <StyledInformation>
        <StyledLocation>
          <StyledIconLocation src={Localizacao} /> Campinas, SP
        </StyledLocation>
        <StyledCart>
          <StyledIconCart src={Carrinho} />
        </StyledCart>
        <StyledCounter> 2 </StyledCounter>
      </StyledInformation>
    </StyledHeader>
  );
};

export default Header;
