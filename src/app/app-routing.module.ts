import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetPortfolioComponent } from '../app/portfolio/get-portfolio/get-portfolio.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './shared/component/home/home.component';
import { LoginComponent } from './shared/component/login/login.component';
import { LogoutComponent } from './shared/component/logout/logout.component';

const routes: Routes = [
  {
    path: 'home/get-portfolio',
    component: GetPortfolioComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
