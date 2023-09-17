import styled from "styled-components";

export const ContainerForm = styled.div`
    background-color: ${(props) => props.theme['gray-700']};
    width: 100%;
    padding: 0.938rem;
    margin: 2rem 0;
`

export const FormPass = styled.form`
    color: ${(props) => props.theme['white']};

`

export const ContainerCaracter = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
`