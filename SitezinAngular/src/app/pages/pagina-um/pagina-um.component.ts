import { Component } from '@angular/core';

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
  genero: string;
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
  
    craftingTable(){
      localStorage.setItem('link', this.link);
      const brothers: Object[] = JSON.parse(localStorage.getItem('brothers')) || []
      if(this.genero == 'fem'){
        this.genero = "Feminino"
      }else if(this.genero == 'masc'){
        this.genero = "Masculino"
      }else{
        this.genero = 'Neutro'
      }
      brothers.push({
        nome: this.nome,
        email: this.email,
        link: this.link,
        pass: this.pass,
        confPass: this.confPass,
        Estado: this.Estado,
        Cidade: this.Cidade,
        Bairro: this.Bairro,
        idade: this.idade,
        genero: this.genero
      })
      localStorage.setItem('brothers', JSON.stringify(brothers))
    }

}
