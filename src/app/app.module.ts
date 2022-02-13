import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LeftAsideComponent } from './layout/left-aside/left-aside.component';
import { HomeComponent } from './pages/home/home.component';
import { FeedItemModule } from './shared/feed-item/feed-item.module';
import { ProfileAvatorModule } from './shared/profile-avator/profile-avator.module';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, HomeComponent, LeftAsideComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule, FeedItemModule, ProfileAvatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
