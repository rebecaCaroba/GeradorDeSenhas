import { PasswordStrength, Strength } from "./style";

export function Forca() {
    return (
        <PasswordStrength>
            <span>Força</span>
            <section>
                MÉDIO
                <Strength statusColor="yellow" borderColor="yellow"/>
                <Strength statusColor="yellow" borderColor="yellow"/>
                <Strength statusColor="yellow" borderColor="yellow"/>
                <Strength statusColor="transparent" borderColor="white"/>
            </section>
        </PasswordStrength>
    )
}