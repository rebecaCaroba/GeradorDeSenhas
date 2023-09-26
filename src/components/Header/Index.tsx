import { ContainerHeader } from "./style";
import { FaRegCopy } from 'react-icons/fa'

export function Header({ showPassword }) {
    return (
        <div>
            <ContainerHeader>
                <span>{showPassword}</span>
                <button>
                <FaRegCopy  size={24}/>
                </button>
            </ContainerHeader>
        </div>
    )
}