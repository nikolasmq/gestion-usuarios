import { ModuleWithProviders } from "@angular/compiler/src/core";
import { Routes, RouterModule } from "@angular/router";
// importamos componentes del programa
import { CrearComponent } from "./components/crear/crear.component";
import { ListarComponent } from "./components/listar/listar.component";
import { HomeComponent } from "./components/home/home.component";
// Array de rutas para el sistema

const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'listar', component:ListarComponent},
    {path:'crear', component:CrearComponent},
    {path: '**',component:HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);