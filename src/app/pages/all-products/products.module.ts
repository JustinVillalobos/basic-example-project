import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { InputFormComponent } from 'src/app/shared/components/input-form/input-form.component';
import { ButtonToggleFormComponent } from 'src/app/shared/components/button-toggle-form/button-toggle-form.component';
import { HeaderSectionComponent } from 'src/app/shared/components/header-section/header-section.component';
import { AllProductsComponent } from './all-products.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { TopBarComponent } from 'src/app/shared/components/top-bar/top-bar.component';
import { LeftSideBarComponent } from 'src/app/shared/components/left-side-bar/left-side-bar.component';

@NgModule({
  declarations: [
  InputFormComponent,
  ButtonToggleFormComponent,
  HeaderSectionComponent,
  AllProductsComponent,
  HeaderComponent,
  TopBarComponent,
  LeftSideBarComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    MatSlideToggleModule
  ]
})
export class ProductsModule { }
