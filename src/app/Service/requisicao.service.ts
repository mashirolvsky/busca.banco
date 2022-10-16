import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Banco } from '../interface/banco';
@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {
  private apiUrl = 'https://brasilapi.com.br/api/banks/v1'
  constructor(private  http: HttpClient) { }

  getAll(){
    return this.http.get<Banco[]>(this.apiUrl)
  }
}
