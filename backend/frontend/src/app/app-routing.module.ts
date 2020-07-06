import { NgModule, ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './views/home/home.component'
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import {ProductCreateComponent} from './components/product/product-create/product-create.component'



 const API_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    {path: 'products', component: ProductCrudComponent},
    {path: 'products/create', component: ProductCreateComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(API_ROUTES);





