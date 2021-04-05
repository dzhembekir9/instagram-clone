import styled from 'styled-components'

export const StoriesWrapper = styled.div`
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    background-color: white;
    padding: 15px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;

    div {
        margin-right: 30px;

        p {
            margin: 0;
        }
    }
`;

export const ProfilePic = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 100px;
    border: 1px solid #ddd;
    padding: 3px;
`;