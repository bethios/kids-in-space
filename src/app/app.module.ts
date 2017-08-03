import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalComponent } from './console.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
