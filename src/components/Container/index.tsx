import { Body } from "../Body";
import { Header } from "../Header/Index";
import { ContainerPass } from "./style";

export function Container() {
    return (
        <ContainerPass>
            <h1>Gerador de senha</h1>
            <Header />
            <Body />
        </ContainerPass>
    )
}