import styled from 'styled-components'

export const PostWrapper = styled.div`
    border: 1px solid #dbdbdb;
    display: flex;
    border-radius: 3px;
    background-color: white;
    flex-direction: column;
    margin-bottom: 60px;
`;

export const UserInfo = styled.div`
    display: flex;
    margin: 5px 10px;
    align-items: center;
    justify-content: space-between;
`;

export const Logos = styled.div`
    display: flex;  
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;

    div {
        img {
            margin-right: 10px;
        }
    }

`;

export const CommentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #dbdbdb;
    margin-top: 10px;
    padding: 12px;

    div {
        input {
            border: 0;
            outline: none;
        }
    }
`;