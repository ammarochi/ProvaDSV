import { Formapagamento } from './forma-pagamento';

export interface Pagamento {
    id?: number;
    Formaid?: number;
    Formapagamento?: Formapagamento;
    Cliente: string;
    CriadoEm?: Date;

}