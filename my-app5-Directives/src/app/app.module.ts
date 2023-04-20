import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { Basic2HighlightDirective } from './basic2-highlight/basic2-highlight.directive';
import { AdvancedHighlightDirective } from './advanced-highlight/advanced-highlight.directive';
import Advanced2HighlightDirective from './advanced2-highlight/advanced2-highlight.directive';
import { Advanced3HighlightDirective } from './advanced3-highlight/advanced3-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    Basic2HighlightDirective,
    AdvancedHighlightDirective,
    Advanced2HighlightDirective,
    Advanced3HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
