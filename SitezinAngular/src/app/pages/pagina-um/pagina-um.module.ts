import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PaginaUmComponent } from "./pagina-um.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        PaginaUmComponent
    ],
    exports: [
        PaginaUmComponent
    ]
})
export class PaginaUmModule {}