import { Formapagamento } from './../../../models/forma-pagamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagamentoService } from '../../../services/pagamento.service';
import { Pagamento } from 'src/app/models/pagamento'
import { FormapagamentoService } from 'src/app/services/forma-pagamento.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

    Cliente!: string;
    Formaid!: number;
    formapag!: Formapagamento[];

    constructor(private pagamentoService: PagamentoService, private formapagamentoService: FormapagamentoService, private router: Router) {}

    ngOnInit(): void {
        this.formapagamentoService.list().subscribe((formapagamento) => {
            this.formapag = formapagamento;
            console.table(formapagamento);
        });
    }

    cadastrarpag(): void {
        let pagamento: Pagamento = {
            Cliente: this.Cliente,
            Formaid: this.Formaid,

        };
        this.pagamentoService.create(pagamento).subscribe((pagamento) => {
            console.log(pagamento);
            this.router.navigate([""]);
        });
    }
}
