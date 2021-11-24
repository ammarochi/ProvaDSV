import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Formapagamento} from "../models/forma-pagamento";

@Injectable({
    providedIn: "root",
})
export class FormapagamentoService {
    private baseURL = "http://localhost:5000/api/forma-pagamento";

    constructor(private http: HttpClient) {}

    list(): Observable<Formapagamento[]> {
        return this.http.get<Formapagamento[]>(`${this.baseURL}/list`);
    }
}