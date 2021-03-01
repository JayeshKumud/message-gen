import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetPortfolioComponent } from './portfolio/get-portfolio/get-portfolio.component';
import { CreatePortfolioComponent } from './portfolio/create-portfolio/create-portfolio.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './shared/component/login/login.component';
import { LogoutComponent } from './shared/component/logout/logout.component';
import { HomeComponent } from './shared/component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GetPortfolioComponent,
    CreatePortfolioComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
