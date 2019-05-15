import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { ProductService } from './product.service';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from 'src/app/Shared/shared.module';

@NgModule({
  declarations: [CardComponent, ListComponent, DetailsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListComponent,
    DetailsComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
