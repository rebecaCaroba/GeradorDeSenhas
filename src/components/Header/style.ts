import styled from "styled-components";

export const ContainerHeader = styled.header`
    background-color: ${(props) => props.theme['gray-700']};
    width: 100%;
    padding: 0.938rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        color: ${(props) => props.theme['gray-300']};
        font-weight: 700;
        font-size: 25px;
    }

    button {
        background: transparent;
        border: 0;
    }

    button {
        color: ${(props) => props.theme['purple']};
        cursor: pointer;
    }

    button:focus {
        color: ${(props) => props.theme['white']};
    }

`