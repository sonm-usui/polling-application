import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollingHomepageComponent } from './components/polling-homepage/polling-homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CategoryListingComponent } from './components/category-listing/category-listing.component';
import { CreatePollComponent } from './components/create-poll/create-poll.component';

const routes: Routes = [
  { path: '',
  pathMatch: 'full',
  redirectTo: 'home' },
  {
    path: 'home',
    component: PollingHomepageComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'category-listing',
    component: CategoryListingComponent
  },
  {
    path: 'new-poll',
    component: CreatePollComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
