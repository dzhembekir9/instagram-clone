import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
`;

export const UserWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SuggestionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;

    p {
        color: #c7c7c7;
        font-size: 15px;
        font-weight: 400;
        line-height: 13px   ;
        margin-right: 5px;
        cursor: pointer;
    }
`;