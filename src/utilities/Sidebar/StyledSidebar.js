import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    position: sticky;
    top: 105px;
    margin-left: 30px;
    margin-top: 15px;
    max-width: 300px;
`;

export const UserWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;

    div {
        div {
            margin-left: 5px;
        }
    }
`;

export const SuggestionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    p {
        color: #c7c7c7;
        font-size: 11px;
        font-weight: 400;
        line-height: 13px   ;
        margin-right: 5px;
        cursor: pointer;
    }
`;

export const Button = styled.div`
    color: #0095f6;
    font-size: 12px;
    font-weight: bold;
`;