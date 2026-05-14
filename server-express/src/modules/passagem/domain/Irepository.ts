import { Passagem } from "./passagenEntity";

export interface IPassagemRepository{
    getPassagens(): Promise<Passagem[]>
    getMaioresDescontos(): Promise<Passagem[]>
    getMaisVisitados(): Promise<Passagem[]>
}