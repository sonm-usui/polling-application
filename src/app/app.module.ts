import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollingHomepageComponent } from './components/polling-homepage/polling-homepage.component';
import { RouterModule } from '@angular/router';
import { EmptyViewComponent } from './components/empty-view/empty-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PollHeaderComponent } from './components/poll-header/poll-header.component';
import { PollFooterComponent } from './components/poll-footer/poll-footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CategoryListingComponent } from './components/category-listing/category-listing.component';
import { ExtendedModule, FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    PollingHomepageComponent,
    EmptyViewComponent,
    PollHeaderComponent,
    PollFooterComponent,
    AboutUsComponent,
    CategoryListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FlexModule,
    ExtendedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
