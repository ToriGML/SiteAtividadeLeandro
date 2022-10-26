import { Component, Input } from '@angular/core';

@Component({
  selector: 'pagina-dois',
  templateUrl: './pagina-dois.component.html'
})
export class PaginaDoisComponent {

  // Usado para criar uma propriedade customizada para o nosso componente customizado.
  // Dessa forma, conseguimos pegar 'inputar' valores para que o componente faça tarefas com esses valores.
  // Nesse exemplo, estamos passando uma formatação de cor e conteúdo para um botão no nosso template.
  @Input()
  corTexto = '#000000';

  @Input()
  texto = '';

}
