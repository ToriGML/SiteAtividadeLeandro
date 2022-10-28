import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],

  declarations: [
    HomeComponent
  ],

  exports: [
    HomeComponent
  ]
})
export class HomeModule {}
