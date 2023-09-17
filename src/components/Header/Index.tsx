import { ContainerHeader } from "./style";
import { FaRegCopy } from 'react-icons/fa'

export function Header() {
    return (
        <div>
            <ContainerHeader>
                <span>$3Nh4!</span>
                <button>
                <FaRegCopy  size={24}/>
                </button>
            </ContainerHeader>
        </div>
    )
}