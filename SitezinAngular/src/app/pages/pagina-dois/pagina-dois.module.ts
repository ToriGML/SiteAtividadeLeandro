import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PaginaDoisComponent } from "./pagina-dois.component";

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        PaginaDoisComponent
    ],
    exports: [
        PaginaDoisComponent
    ]
})
export class PaginaDoisModule {}