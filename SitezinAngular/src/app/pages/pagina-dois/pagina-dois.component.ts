import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pagina-dois',
  templateUrl: './pagina-dois.component.html'
})
export class PaginaDoisComponent implements OnInit{
  ngOnInit(): void {
    this.funcao();
    this.add();
  }
  
  people: Object[];
  

  add() {
    console.log("oi")
    let text = "";
    const pessoas = JSON.parse(localStorage.getItem("pessoas"));
    console.log(this.people.length);
    for (let i = 0; i < this.people.length; i++) {
     const person = `
            <div style="width: 350px;">
            <fieldset>
            <legend>Dados</legend>
             <li>Nome: ${pessoas[i].nome}</li>
             <li>Email: </li>
             <li>Estado: </li>
             <li>Cidade:</li>
             <li>Bairro: </li>
             <li>Idade: </li>
             <li><img src=""></li>
              <input type="button" value="Editar" onclick="">
               <input type="button" value="Remover" onclick="">
            </fieldset>
         </div>
        `;
    text += person;
    }
    document.getElementById("cadastros").innerHTML = text;
  }

funcao(){

  const pessoas = {

    nome: localStorage.getItem('nome'),
    email: localStorage.getItem('email'),
    Estado: localStorage.getItem('Estado'),
    Cidade: localStorage.getItem('Cidade'),
    Bairro: localStorage.getItem('Bairro'),
    Idade: localStorage.getItem('Idade'),
    link: localStorage.getItem('link')

  }

  localStorage.setItem("pessoas", JSON.stringify(pessoas));
  
  console.log(JSON.parse(localStorage.getItem('pessoas')))
  this.people.push(JSON.parse(localStorage.getItem('pessoas')))
  localStorage.setItem('people', String (this.people))
  
 

  }


  @Input()
  corTexto = '#000000';

}
