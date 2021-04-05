import styled from 'styled-components'

export const NavbarWrapper = styled.div`
    background-color: white;
    border: 1px solid #dbdbdb;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 60px;
    font-size: 14px;
    padding: 0 220px;
    position: sticky;
    top: 0;
`;

export const InputWrapper = styled.div`
    border: 1px solid #dbdbdb;
    padding: 5px;
    background-color: #fafafa;
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    border: none;
    height: 100%;
    background-color: #fafafa;
    margin-left: 5px;
    outline: none;
`;
