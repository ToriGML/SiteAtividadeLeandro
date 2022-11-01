import { Component, Input } from '@angular/core';

@Component({
  selector: 'pagina-dois',
  templateUrl: './pagina-dois.component.html',
  styleUrls: ['./pagina-dois.component.css']
})
export class PaginaDoisComponent {

  @Input()
  nome: string;

  cor: string = 'red';

  brothers: Object[] = JSON.parse(localStorage.getItem("brothers")) || []
}
