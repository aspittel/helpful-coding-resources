import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { ResourcesComponent } from './resources/resources.component'
import { ResourcesService } from './resources.service';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ResourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
