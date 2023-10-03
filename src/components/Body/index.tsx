import React, { useState } from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { ContainerCaracter, ContainerForm, ContainerPass, FormPass } from "./style"
import { Header } from "../Header/Index"
import { Strength } from "../Strength"

interface SelectedValues {
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  symbols: boolean
}

export function Body() {
  const [password, setPassword] = useState<string>("")
  const [CharacterLength, setCharacterLength] = useState<number>(10)
  const [selectedValues, setSelectedValues] = useState<SelectedValues>({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  })
  const [selectedValuesLength, setselectedValuesLength] = useState<number>(0)

  const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const symbols: string[] = ["@", "!", "$", "%", "&", "#", "*", "_", "-"]
  const caracters: number[] = Array.from(Array(26)).map((_, i) => i + 97)
  const LowercaseCaracters: string[] = caracters.map((item) =>String.fromCharCode(item))
  const UppercaseCaracters: string[] = LowercaseCaracters.map((item) =>item.toUpperCase())

  function handleCharacterLength(e: React.ChangeEvent<HTMLInputElement>) {
    setCharacterLength(Number(e.target.value))
  }

  function createPassword(selectedValues: SelectedValues) {
    let passwordChar = ""
    
    if (selectedValues.uppercase) {
      passwordChar += UppercaseCaracters.join("")
    }
    if (selectedValues.lowercase) {
      passwordChar += LowercaseCaracters.join("")
    }
    if (selectedValues.numbers) {
      passwordChar += numbers.join("")
    }
    if (selectedValues.symbols) {
      passwordChar += symbols.join("")
    }

    if (passwordChar === "") {
      passwordChar = '----';
    }

    let passwordGenerate = ""
    for (let i = 0;i < CharacterLength;i++) {
      const randomIndex = Math.floor(Math.random() * passwordChar.length)
      passwordGenerate += passwordChar[randomIndex]
    }

    setPassword(passwordGenerate)
  }

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }))
  }

  function handleListTypePass(e: React.FormEvent) {
    e.preventDefault()
    createPassword(selectedValues)
    setselectedValuesLength(
      Object.values(selectedValues).filter((value) => value).length
    )
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
                    <input
                    type="range"
                    id="strLength"
                    onChange={handleCharacterLength}
                    min={10}
                    max={25}
                    value={CharacterLength}
                    />
                    <div>
                        <input
                        type="checkbox"
                        name="uppercase"
                        id="uppercase"
                        checked={selectedValues.uppercase}
                        onChange={handleCheckboxChange}
                        />
                        <label htmlFor="uppercase">Incluir letras maiúsculas</label>
                    </div>
                    <div>
                    <input
                        type="checkbox"
                        name="lowercase"
                        id="lowercase"
                        checked={selectedValues.lowercase}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="lowercase">Incluir letras minúsculas</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="numbers"
                            id="numbers"
                            checked={selectedValues.numbers}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="numbers">Incluir números</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="symbols"
                            id="symbols"
                            checked={selectedValues.symbols}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="symbols">Incluir símbolos</label>
                    </div>
                    <Strength Length={selectedValuesLength} />
                        <button type="submit">
                        GERAR
                        <AiOutlineArrowRight size={14} />
                    </button>
                </FormPass>
            </ContainerForm>
        </ContainerPass>
    )
}