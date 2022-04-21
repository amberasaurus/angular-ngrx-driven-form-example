import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { userReducer } from './state/reducers';
import { SmartViewComponent } from './components/smart-view-component/smart-view.component';
import { DumbComponent } from './components/dumb-component/dumb.component';

@NgModule({
  declarations: [AppComponent, SmartViewComponent, DumbComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ user: userReducer }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
