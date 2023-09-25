import styled from "styled-components";

export const PasswordStrength = styled.div`
    margin: 1.25rem 0;
    padding: 0 1.25rem;
    background-color: ${(props) => props.theme['gray-800']};
    width: 450px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    span {
        color: ${(props) => props.theme['gray-200']};
        font-weight: 600;
    }

    section {
        display: flex;
        align-items: center;
        gap: 0.625rem;
        font-weight: 700;
        font-size: 20px;
    }
`

const STATUS_COLORS = {
    yellow: 'yellow-100',
    transparent: 'gray-800',
} as const

const BORDER_COLORS = {
    yellow: 'yellow-100',
    white: 'white',
}as const


interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS
    borderColor: keyof typeof BORDER_COLORS
}

export const Strength = styled.div<StatusProps>`
    background-color: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    border: 2px solid  ${(props) => props.theme[BORDER_COLORS[props.borderColor]]};
    height: 30px;
    width: 10px;

`