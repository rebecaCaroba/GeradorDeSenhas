import { Forca } from "../Força";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { ContainerCaracter, ContainerForm, ContainerPass, FormPass } from "./style";
import { useState } from "react";
import { Header } from "../Header/Index";

export function Body() {
    const [password, setPassword] = useState('')
    const [CharacterLength, setCharacterLength] = useState(10)
    const [selectedValues, setSelectedValues] = useState([])

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const symbols = [ '@','!', '$', '%', '&', '#', '*']
    const caracters = Array.from(Array(26)).map((_, i) => i + 97)
    const LowercaseCaracters = caracters.map((item) => String.fromCharCode(item))
    const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase())

    function handleCharacterLength(e) {
        setCharacterLength(e.target.value)
    }

    function createPassword(selectedValues) {
        let passwordChar = ''
    
        if (selectedValues.includes('uppercase')) {
            passwordChar += UppercaseCaracters.join('')
        }
        if (selectedValues.includes('lowercase')) {
            passwordChar += LowercaseCaracters.join('')
        }
        if (selectedValues.includes('numbers')) {
            passwordChar += numbers.join('')
        }
        if (selectedValues.includes('symbols')) {
            passwordChar += symbols.join('')
        }
    
        let passwordGenerate = "";
        for (let i = 0; i < CharacterLength; i++) {
            const randomIndex = Math.floor(Math.random() * passwordChar.length)
            passwordGenerate += passwordChar[randomIndex]
        }
    
        setPassword(passwordGenerate)
    }


    function handleCheckboxChange(e) {
        const value = e.target.value
        if (e.target.checked) {
            setSelectedValues((state) => [...state, value])
        } else {
            setSelectedValues(selectedValues.filter((item) => item !== value))
        }
    }

    function handleListTypePass(e) {
        e.preventDefault()
        createPassword(selectedValues)
    }

    return (
        <ContainerPass>
            <Header showPassword={password} />
            <ContainerForm>
                <FormPass onSubmit={handleListTypePass}>
                    <ContainerCaracter>
                        <p>Comprimento dos caracteres</p>
                        <span>{CharacterLength}</span>
                    </ContainerCaracter>
                    <input type="range" id="strLength" onChange={handleCharacterLength} min={10} max={25} />
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
                        <AiOutlineArrowRight size={14} />
                    </button>
                </FormPass>
            </ContainerForm>
        </ContainerPass>
    )
}