import styled from "styled-components";

export const SubmitInput = styled.input`
    border-radius: 4px;
    border: none;
    padding: 12px 25px;
    font-size: 20px;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); */
    margin: 0 auto;
    display: block;
    cursor: pointer;
    background-color: ${({ bg }) => bg || '#fff'};
    color: ${({color}) => color || '#333'};

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`