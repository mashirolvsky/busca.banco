import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../Service/requisicao.service';
import { Banco } from '../interface/banco';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  TodosBancos: Banco[] = [];
  BancosFiltrado: Banco[] = [];
  constructor(private service: RequisicaoService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((items) => {
      this.TodosBancos = items;
      this.BancosFiltrado = this.TodosBancos
        
    });
  }
  ArrayFiltrado = (e: Event) => {
    const bancoNome = e.target as HTMLInputElement;
    this.BancosFiltrado = this.TodosBancos.filter((banco) =>{
        return banco.fullName.includes(bancoNome.value)
    })
  };
}
