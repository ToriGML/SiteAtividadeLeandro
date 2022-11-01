import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MeuBotaoModule } from "../meu-botao/meu-botao.module";
import { PaginaDoisComponent } from "./pagina-dois.component";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MeuBotaoModule
    ],
    declarations: [
        PaginaDoisComponent
    ],
    exports: [
        PaginaDoisComponent
    ]
})
export class PaginaDoisModule {}