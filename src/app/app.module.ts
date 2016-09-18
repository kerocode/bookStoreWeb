import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule } from '@angular2-material/button';
import {MdCardModule}from '@angular2-material/card';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdSliderModule } from '@angular2-material/slider';
import { MdTooltipModule } from '@angular2-material/tooltip';
import { MdMenuModule } from '@angular2-material/menu';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
import { MdRadioModule } from '@angular2-material/radio';
 
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdGridListModule,
    MdInputModule,
    MdCardModule,
    MdListModule,
    MdMenuModule,
    MdProgressCircleModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdRadioModule,
    MdTabsModule,
    MdTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
