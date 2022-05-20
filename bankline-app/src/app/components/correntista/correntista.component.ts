import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';

@Component({
  selector: 'app-correntista',
  templateUrl: './correntista.component.html',
  styleUrls: ['./correntista.component.scss'],
})
export class CorrentistaComponent implements OnInit {
  correntistas: any;
  cpf: any;
  nome: any;
  constructor(private correntistaService: CorrentistaService) {}
  ngOnInit(): void {
    this.exibirCorrentistas();
  }
  exibirCorrentistas(): void {
    this.correntistaService.list().subscribe((data) => {
      this.correntistas = data;
      console.log(data);
    });
  }
  save(): void {
    const correntista = {
      cpf: this.cpf,
      nome: this.nome,
    };
    console.log(correntista);
    this.correntistaService.create(correntista).subscribe((response) => {
      console.log(response);
      this.exibirCorrentistas();
    });
  }
}
