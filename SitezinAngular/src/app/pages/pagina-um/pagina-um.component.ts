import { Component, Input } from '@angular/core';

@Component({
  selector: 'pagina-um',
  templateUrl: './pagina-um.component.html',
  styleUrls: ["./pagina-um.component.css"]
})
export class PaginaUmComponent {
  nome: string;
  email: string;
  link: string;
  pass: string;
  confPass: string;
  Estado: string;
  Cidade: string;
  Bairro: string;
  idade: number;

  olhoUm1(){
    (<HTMLInputElement>document.getElementById('pass')).type = 'text';
  }
  olhoUm2(){
    (<HTMLInputElement>document.getElementById('pass')).type = 'password';
  }
  olhoUm3(){
    (<HTMLInputElement>document.getElementById('pass')).type = 'password';
  }

  olhoDois1(){
    (<HTMLInputElement>document.getElementById('confPass')).type = 'text';
  }
  olhoDois2(){
    (<HTMLInputElement>document.getElementById('confPass')).type = 'password';
  }
  olhoDois3(){
    (<HTMLInputElement>document.getElementById('confPass')).type = 'password';
  }

  objeto(){
    localStorage.setItem('nome', this.nome);
    localStorage.setItem('email', this.email);
    localStorage.setItem('confPass', this.confPass);
    localStorage.setItem('Estado', this.Estado);
    localStorage.setItem('Cidade', this.Cidade);
    localStorage.setItem('Bairro', this.Bairro);
    localStorage.setItem('Idade', String (this.idade));
    localStorage.setItem('link', this.link);
    localStorage.setItem('pass', this.pass);
  }
  
  @Input()
  corTexto = '#000000';

}
