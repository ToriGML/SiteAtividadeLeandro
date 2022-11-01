import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MeuBotaoComponent } from "./meu-botao.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MeuBotaoComponent
    ],
    exports: [
        MeuBotaoComponent
    ]
})
export class MeuBotaoModule {}