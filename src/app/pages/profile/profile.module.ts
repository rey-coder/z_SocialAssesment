import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { FeedsComponent } from './feeds/feeds.component';
import { FeedItemModule } from 'src/app/shared/feed-item/feed-item.module';


@NgModule({
  declarations: [
    FeedsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule, FeedItemModule
  ]
})
export class ProfileModule { }
