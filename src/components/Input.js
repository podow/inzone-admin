import styled from 'styled-components';

const Input = styled.input`
    background-color: #FFFFFF;
    background-image: none;
    border: 1px solid #e5e6e7;
    border-radius: 1px;
    color: inherit;
    display: block;
    padding: 6px 12px;
    transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
    width: 100%;
    font-size: 0.9rem;
    line-height: 1.5;
    &:focus {
        outline: 0;
        border-color: #1ab394;
    }
`;

export default Input;