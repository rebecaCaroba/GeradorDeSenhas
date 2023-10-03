import { ContainerHeader } from "./style"
import { FaRegCopy } from 'react-icons/fa'

interface HeaderProps {
    showPassword: string
}

export function Header({ showPassword }: HeaderProps) {
    function handleCopyText() {
        const textArea = document.createElement('textarea');
        textArea.value = showPassword;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Texto copiado para a área de transferência!');

    }

    return (
        <div>
            <ContainerHeader>
                <div><span>{showPassword}</span></div>
                <button onClick={handleCopyText}>
                    <FaRegCopy size={24} />
                </button>
            </ContainerHeader>
        </div>
    )
}