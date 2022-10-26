import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { PaginaDoisComponent } from "./pages/pagina-dois/pagina-dois.component";
import { PaginaUmComponent } from "./pages/pagina-um/pagina-um.component";

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'pagina-um',
        component: PaginaUmComponent
    },
    {
        path: 'pagina-dois',
        component: PaginaDoisComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRountingModule { }
