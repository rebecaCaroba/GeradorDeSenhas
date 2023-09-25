import { Forca } from "../Força";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { ContainerCaracter, ContainerForm, FormPass } from "./style";

export function Body() {
    return (
        <ContainerForm>
            <FormPass>
                <ContainerCaracter>
                    <p>Comprimento dos caracteres</p>
                    <span>10</span>
                </ContainerCaracter>
                <input type="range" id="strLength" />
                <div>
                    <input type="checkbox" name="include-uppercase" id="uppercase" />
                    <label htmlFor="include-uppercase">Incluir letras maiúsculas</label>
                </div>
                <div>
                    <input type="checkbox" name="include-lowercase" id="lowercase" />
                    <label htmlFor="include-lowercase">Incluir letras minúsculas</label>
                </div>
                <div>
                    <input type="checkbox" name="include-numbers" id="numbers" />
                    <label htmlFor="include-numbers">Incluir numbers</label>
                </div>
                <div>
                    <input type="checkbox" name="include-symbols" id="symbols" />
                    <label htmlFor="include-symbols">Incluir símbolos </label>
                </div>
                <Forca />
                <button>
                    GERAR
                    <AiOutlineArrowRight size={14   }/>
                </button>
            </FormPass>
        </ContainerForm>
    )
}