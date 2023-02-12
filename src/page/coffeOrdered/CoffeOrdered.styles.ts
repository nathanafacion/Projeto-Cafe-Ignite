import styled, {createGlobalStyle } from "styled-components";

export const StyledCoffe = styled.div`

        background: #FAFAFA;

`;

export const StyledTitles = styled.div`

  display: flex;        
  justify-content: space-between;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  z-index: 8;
  width:930px;
  color: #403937;
  position: fixed;
  top: 150px;

  left: 160px;

  z-index: 1;


`;


export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    
        position: relative;

        background: #FAFAFA;
    }

    p {
        color: #bf1650;
        padding:0;
        margin:0;
        font-size: 12px;
      }

      p::before {
        display: inline;
        content: "⚠ ";

      }
`;