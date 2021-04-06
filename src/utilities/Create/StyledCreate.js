import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50px;
    border: 1px solid #ececec;
    border-radius: 5px;
    right: 20%;
    box-shadow: 0 0 5px 1px rgba(var(--jb7,0,0,0),.0975);
    background-color: white;
    width: 120px;

    div {
        cursor: pointer;
        padding: 10px;
    }
`;