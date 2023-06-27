import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './views/shared/sidebar/sidebar.component';
import { HomeComponent } from './views/pages/home/home.component';
import { TestsComponent } from './views/pages/tests/tests.component';
import { HttpClientModule } from '@angular/common/http';
import { SettingsWidgetComponent } from './views/shared/sidebar/settings-widget/settings-widget.component';
import { CreateTestComponent } from './views/pages/create-test/create-test.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    TestsComponent,
    SettingsWidgetComponent,
    CreateTestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
