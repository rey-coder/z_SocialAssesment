import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedItemComponent } from './feed-item.component';
import { ProfileAvatorModule } from '../profile-avator/profile-avator.module';



@NgModule({
  declarations: [
    FeedItemComponent
  ],
  imports: [
    CommonModule, ProfileAvatorModule
  ],
  exports: [
    FeedItemComponent
  ]
})
export class FeedItemModule { }
