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
import { CreatePollComponent } from './components/create-poll/create-poll.component';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { CategoryDetailsComponent } from './components/category-listing/category-details/category-details.component';
import { MatDialogModule } from '@angular/material/dialog';

const firebaseConfig = {
  apiKey: "AIzaSyAnnx3ZfwOuoi3LC-qgq-vvVPjvzzo0Ofk",
  authDomain: "polling-canditates.firebaseapp.com",
  databaseURL: "https://polling-canditates-default-rtdb.firebaseio.com",
  projectId: "polling-canditates",
  storageBucket: "polling-canditates.appspot.com",
  messagingSenderId: "281471167085",
  appId: "1:281471167085:web:2e95844cc342656aafed64",
  measurementId: "G-RCP5X68PN5"
};

@NgModule({
  declarations: [
    AppComponent,
    PollingHomepageComponent,
    EmptyViewComponent,
    PollHeaderComponent,
    PollFooterComponent,
    AboutUsComponent,
    CategoryListingComponent,
    CreatePollComponent,
    CategoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FlexModule,
    ExtendedModule,
    MatRadioModule,
    ReactiveFormsModule,
     AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
