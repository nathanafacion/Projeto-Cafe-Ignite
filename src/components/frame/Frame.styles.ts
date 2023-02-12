import styled from "styled-components";

export const StyledFrame = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;

    position: absolute;
    width: 640px;
    height: 591px;
    left: 160px;
    top: 182px;

`;

export const StyledIconLocation= styled.img`
    width: 22px;
    height: 22px;

    flex: none;
    order: 0;
    flex-grow: 0;

    left: 15.62%;
    right: 15.62%;
    top: 6.25%;
    bottom: 6.25%;
    padding: 20px;
`;

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;

    width: 640px;
    height: 372px;


    background: #F3F2F2;
    border-radius: 6px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

export const StyledFormText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 560px;
    height: 44px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

export const StyledFormTextAddress = styled.div`

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: #403937;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

`;


export const StyledFormTextDescription = styled.div`

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;

    display: flex;
    align-items: center;
    color: #574F4D;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    padding: 0 0 0 62px;
    margin-top: -20px;
`;

export const StyledFormAllFields = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 20px;
    gap: 16px;

    width: 560px;
    height: 216px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`;

export const StyledInputCEP = styled.input`

    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;

    width: 200px;
    height: 42px;

    background: #EEEDED;
    border: 1px solid #E6E5E5;
    border-radius: 4px;

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const StyledInputRua = styled.input`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;

    width: 560px;
    height: 42px;

    background: #EEEDED;

    border: 1px solid #E6E5E5;
    border-radius: 4px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`

export const StyledInfoForm = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;

    width: 560px;
    height: 42px;

    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
`

export const StyledInputNumero = styled.input`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;

    width: 200px;
    height: 42px;

    background: #EEEDED;

    border: 1px solid #E6E5E5;
    border-radius: 4px;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const StyledInputComplemento = styled.input`

    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;

    width: 348px;
    height: 42px;
    background: #EEEDED;

    border: 1px solid #E6E5E5;
    border-radius: 4px;

    flex: none;
    order: 1;
    flex-grow: 1;
`

export const StyledInputBairro = styled.input`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;

    width: 200px;
    height: 42px;

    background: #EEEDED;

    border: 1px solid #E6E5E5;
    border-radius: 4px;

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const StyledInputCidade = styled.input`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;

    width: 276px;
    height: 42px;
    background: #EEEDED;

    border: 1px solid #E6E5E5;
    border-radius: 4px;

    flex: none;
    order: 1;
    flex-grow: 1;
`

export const StyledInputUF = styled.input`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px;
    gap: 4px;

    width: 60px;
    height: 42px;

    background: #EEEDED;
    border: 1px solid #E6E5E5;
    border-radius: 4px;
    flex: none;
    order: 2;
    flex-grow: 0;

`;