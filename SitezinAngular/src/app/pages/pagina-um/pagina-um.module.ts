import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PaginaUmComponent } from "./pagina-um.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PaginaUmComponent
    ],
    exports: [
        PaginaUmComponent
    ]
})
export class PaginaUmModule {}