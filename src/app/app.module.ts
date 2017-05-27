import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SearchBoxDirective } from './search-box.directive';
import { UserService } from './user.service';
import { SalesModule } from "app/sales/sales.module";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SearchBoxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SalesModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
