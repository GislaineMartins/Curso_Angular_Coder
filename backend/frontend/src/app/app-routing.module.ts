import { NgModule, ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'



 const API_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    {path: 'products', component: ProductCrudComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(API_ROUTES);





