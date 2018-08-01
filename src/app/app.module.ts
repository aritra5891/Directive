import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BackgroundHighlightDirective } from './BackgroundHighlight/background-highlight.directive';
import { BetterHighlightDirective } from './BetterHighlight/better-highlight.directive';
import { UnlessDirective } from './Unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
