import styled from "styled-components";

export const StyledSelectedCoffe = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 24px;

    position: absolute;
    width: 400px;
    height: auto;
    left: 832px;
    top: 182px;

    /* Base/Card */

    background: #F3F2F2;
    border-radius: 6px 44px;
    margin-left:90px;
`;

export const StyledContentTotal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 12px;

    width: 368px;
    height: 92px;

    flex: none;
    order: 4;
    align-self: stretch;
    flex-grow: 0;
`

export const StyledSumValueItens = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 368px;
    height: 21px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

`;

export const StyledDelivery = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 368px;
    height: 21px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`

export const StyledTotal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 368px;
    height: 26px;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    font-weight: 700;
`

export const StyledButtonConfirm = styled.button`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;

    width: 368px;
    height: 46px;

    background: #DBAC2C;
    border-radius: 6px;

    flex: none;
    order: 5;
    align-self: stretch;
    flex-grow: 0;
    border: none;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    transition: background-color 0.5s;

    :hover {
        filter: brightness(85%);
    }
`