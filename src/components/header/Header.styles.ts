import styled from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 32px 160px;
    gap: 820px;

    position: absolute;
    height: 84px;
    width:1260px;
    left: 0px;
    right: 0px;
    top: 0px;

    background: #FAFAFA;

`;

export const StyledInformation = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 12px;

    width: 193px;
    height: 38px;

    flex: none;
    order: 1;
    flex-grow: 0;
`;

export const StyledLocation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;

    width: 143px;
    height: 38px;

    background: #EBE5F9;
    border-radius: 6px;

    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const StyledIconLocation = styled.img`

`;

export const StyledImage = styled.img`
    width: 84.95px;
    height: 40px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const StyledCart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;
    isolation: isolate;

    width: 38px;
    height: 38px;

    background: #F1E9C9;
    border-radius: 6px;
    top: -20px;
    flex: none;
    order: 1;
    flex-grow: 0;
    transition: background-color 0.5s;

    :hover {
        filter: brightness(85%);
    }
`;

export const StyledIconCart=styled.img`

    width: 22px;
    height: 22px;
    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;
    
`;

export const StyledCounter = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 30px;
    height: 30px;
    right: -8.35px;
    top: -120px;

    background: #C47F17;
    // position: relative;
    flex: none;
    order: 1;
    flex-grow: 0;
    z-index: 1;
    border-radius: 50%;
    align-self:baseline;
    margin-top: -20px;
    margin-left: -25px;
    color: white;

    
`;