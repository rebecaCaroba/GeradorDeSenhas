import { PasswordStrength, ShowStrength } from "./style";

export function Strength({ Length }) {
    function calculatePasswordStrength(size){
        switch(size){
            case 1:
                return 'MUITO FRACA'
            case 2:
                return 'FRACA'
            case 3:
                return 'MÉDIA'
            case 4:
                return 'FORTE'
            default:
                return '--'
        }
    }

    const passStrength = calculatePasswordStrength(Length)

    return (
        <PasswordStrength>
            <span>Força</span>
            <section>
            {passStrength}
               {
                Array.from({ length: 4 }).map((_, index) => (
                    <ShowStrength
                        key={index}
                        statusColor={index < Length ? "yellow" : "transparent"}
                        borderColor={index < Length ? "yellow" : "white"}
                    />
                ))
               }
            </section>
        </PasswordStrength>
    )
}