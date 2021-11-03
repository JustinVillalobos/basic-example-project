import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products.component';
const routes: Routes = [
 {
    path: '',
    component: AllProductsComponent,
    children: [
      {
        path: 'add-product',
        children: []
      }
    ]
  },
  {
        path: 'add-product',
		component: AllProductsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
