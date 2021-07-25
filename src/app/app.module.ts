import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card'
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostSmallComponent } from './components/post-small/post-small.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { PostDetailPageComponent } from './pages/post-detail-page/post-detail-page.component';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';
import { PateGroupPageComponent } from './pages/pate-group-page/pate-group-page.component';
@NgModule({
  declarations: [
    AppComponent,
    PostsPageComponent,
    PostSmallComponent,
    PostDetailComponent,
    PostDetailPageComponent,
    ProfileDetailComponent,
    PateGroupPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
