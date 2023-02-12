import styled from "styled-components";

export const StyledPayment = styled.div`
   display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 32px;

    width: 640px;
    height: 137px;

    background: #F3F2F2;
    border-radius: 6px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    left: 160px;
    margin-top: 650px;
    position: absolute;

    
.radio-toolbar label {

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 12px;
    background: #E6E5E5;
    border-radius: 6px;

    flex: none;
    order: 0;
    flex-grow: 1;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;

    text-transform: uppercase;

    color: #574F4D;
}


.radio-toolbar input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
}


.radio-toolbar input[type="radio"]:checked + label {
    background-color: #d1d1d1;
    border-color: #d1d1d1;
}

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

export const StyledFormTextPayment = styled.div`

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

export const StyledIconPayment= styled.img`
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

export const StyledAllPayments = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 12px;

    width: 560px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

`;
