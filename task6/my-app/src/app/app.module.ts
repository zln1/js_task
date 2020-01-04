import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { BackstageComponent } from './backstage/backstage.component';

import {NzMenuModule} from "ng-zorro-antd";
import { NzMenuComponent } from './nz-menu/nz-menu.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailsComponent,
    BackstageComponent,
    NzMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
