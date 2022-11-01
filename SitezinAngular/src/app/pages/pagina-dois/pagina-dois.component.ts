import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagina-dois',
  templateUrl: './pagina-dois.component.html'
})
export class PaginaDoisComponent implements OnInit{
  ngOnInit(): void {
  }
  
  pessoas: Object[] = JSON.parse(localStorage.getItem("pessoas")) || []

}
