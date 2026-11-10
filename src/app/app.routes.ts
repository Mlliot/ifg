import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DneComponent } from './components/dne/dne.component';
import { BusinessComponent } from './components/business/business.component';
import { ClaimsComponent } from './components/claims/claims.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'learn_more',
        title: 'Learn More',
        component: LearnMoreComponent
    },
    {
        path: "business",
        component: BusinessComponent
    },
    {
        path: 'claims',
        component: ClaimsComponent
    },
    {
        path: 'contactUs',
        component: ContactUsComponent
    },
    {
        path:'user',
        component: UserComponent
    },
    {
        path:'user/claims',
        component: ClaimsComponent
    },
    {
        path:'login',
        component: LoginPageComponent
    },
    {
        path:"**",
        component: DneComponent
    },
];
