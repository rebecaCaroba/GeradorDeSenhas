import styled from "styled-components";

export const ContainerPass = styled.div`
    width: 500px;
    h1 {
        color: ${(props) => props.theme['gray-200']};
        text-align: center;
        margin: 2rem;
    }

    @media (max-width: 550px) {
        max-width: 330px;
    }

`

export const ContainerForm = styled.div`
    background-color: ${(props) => props.theme['gray-700']};
    width: 100%;
    padding: 0.938rem;
    margin: 2rem 0;
`

export const FormPass = styled.form`
    color: ${(props) => props.theme['white']};
    margin: 0.625rem;

    input {
        margin: 0.625rem 0;
    }

    div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    input[type="range"]{
        margin: 2rem 0;
        width: 100%;
        height: 8px;
        -webkit-appearance: none;
        appearance: none;
        background-color: ${(props) => props.theme['gray-800']};
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px; 
        height: 20px; 
        background: ${(props) => props.theme['white']};
        border-radius: 50%;
        cursor: pointer;
    }


    input[type="checkbox"]{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.3em;
        height: 1.3em;
        line-height: 1.3em;
        border: 3px solid ${(props) => props.theme['green']};
        vertical-align: middle;
        appearance: none;
        -webkit-appearance: none;
        outline: none;
        cursor: pointer;
        text-align: center;
    }

    input[type="checkbox"]:checked {
        background: ${(props) => props.theme['green']};
    }

    input[type="checkbox"]:checked:before {
        content: url('/src/assets/icon-check.svg');
    }

    button {
        width: 100%;
        height: 55px;
        background: ${(props) => props.theme['green']};
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        cursor: pointer;
    }

    button:hover {
        background: transparent;
        border: 4px solid ${(props) => props.theme['green']};
        color: ${(props) => props.theme['green']};
        transition: 0.5s;
    }
`

export const ContainerCaracter = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: 1.875rem;
        font-weight: bold;
        color: ${(props) => props.theme['green']};
    }

`