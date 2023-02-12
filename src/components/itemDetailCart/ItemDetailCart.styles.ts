import styled from "styled-components";

export const StyledItemDetailCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 171px;
    height: 61px;

    flex: none;
    order: 1;
    flex-grow: 0;

`;

export const  StyledTitle = styled.div`

    height: 21px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;

    display: flex;
    align-items: center;
    color: #403937;

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const StyledActions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;

    width: 171px;
    height: 32px;
    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const StyledCounter = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;

    width: 72px;
    // height: 32px;
    background: #E6E5E5;
    border-radius: 6px;

    flex: none;
    order: 0;
    flex-grow: 0;
    border: none;

    :hover {
        border: none;
    }
`;

export const StyledButtonRemove = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    gap: 4px;

    width: 91px;
    height: 32px;

    background: #E6E5E5;
    border-radius: 6px;
    font-size:12px;
    flex: none;
    order: 1;
    flex-grow: 0;
    border: none;
    transition: background-color 0.5s;

    :hover {
       background: #cfcece;
    }

`;

export const StyledIcon = styled.img`
    width: 16px;
    height: 16px;

    flex: none;
    order: 0;
    flex-grow: 0;
`