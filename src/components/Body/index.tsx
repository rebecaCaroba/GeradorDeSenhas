import { Forca } from "../Força";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { ContainerCaracter, ContainerForm, ContainerPass, FormPass } from "./style";
import { useState } from "react";
import { Header } from "../Header/Index";

export function Body() {
    const [CharacterLength, setCharacterLength] = useState(15)
    const [selectedValues, setSelectedValues] = useState([]);

    function handleCharacterLength(e) {
        setCharacterLength(e.target.value)
    }

    function handleCheckboxChange(e) {
        const value = e.target.value;
        if (e.target.checked) {
          setSelectedValues([...selectedValues, value])
        } else {
          setSelectedValues(selectedValues.filter((item) => item !== value))
        }
      }

    function handleListPass(e) {
        e.preventDefault()
        console.log("Valores selecionados:", selectedValues)
    }

    return (
        <ContainerPass>
            <Header />
            <ContainerForm>
                <FormPass onSubmit={handleListPass}>
                    <ContainerCaracter>
                        <p>Comprimento dos caracteres</p>
                        <span>{CharacterLength}</span>
                    </ContainerCaracter>
                    <input type="range" id="strLength" onChange={handleCharacterLength}  min={5} max={25} />
                    <div>
                        <input
                        type="checkbox"
                        name="include-uppercase"
                        value="uppercase"
                        onChange={handleCheckboxChange}
                        />
                        <label htmlFor="include-uppercase">Incluir letras maiúsculas</label>
                    </div>
                    <div>
                        <input
                        type="checkbox"
                        name="include-lowercase"
                        value="lowercase"
                        onChange={handleCheckboxChange}
                        />
                        <label htmlFor="include-lowercase">Incluir letras minúsculas</label>
                    </div>
                    <div>
                        <input
                        type="checkbox"
                        name="include-numbers"
                        value="numbers"
                        onChange={handleCheckboxChange}
                        />
                        <label htmlFor="include-numbers">Incluir numbers</label>
                    </div>
                    <div>
                        <input
                        type="checkbox"
                        name="include-symbols"
                        value="symbols"
                        onChange={handleCheckboxChange}
                        />
                        <label htmlFor="include-symbols">Incluir símbolos </label>
                    </div>
                    <Forca />
                    <button type="submit">
                        GERAR
                        <AiOutlineArrowRight size={14}/>
                    </button>
                </FormPass>
            </ContainerForm>
        </ContainerPass>
    )
}