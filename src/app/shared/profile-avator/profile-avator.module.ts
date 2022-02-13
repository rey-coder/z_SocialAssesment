import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileAvatorComponent } from './profile-avator.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProfileAvatorComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    ProfileAvatorComponent
  ]
})
export class ProfileAvatorModule { }
