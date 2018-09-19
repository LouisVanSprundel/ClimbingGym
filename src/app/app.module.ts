import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { GymListComponent } from './gym-list/gym-list.component';
import { SingleGymComponent } from './gym-list/single-gym/single-gym.component';
import { GymFormComponent } from './gym-list/gym-form/gym-form.component';
import { HeaderComponent } from './header/header.component';
import {GymsService} from './services/gyms.service';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuardService} from './services/auth-guard.service';
import {ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: 'gyms', canActivate: [AuthGuardService], component: GymListComponent},
  { path: '', redirectTo: 'gyms', pathMatch: 'full'},
  { path: 'gyms/:id', canActivate: [AuthGuardService], component: SingleGymComponent},
  { path: 'new', canActivate: [AuthGuardService], component: GymFormComponent},
  { path: 'modify/:id', canActivate: [AuthGuardService], component: GymFormComponent},
  { path: 'auth', component: SigninComponent},
  { path: 'not-found', component: FourOhFourComponent },
  //{ path: '**', redirectTo: 'not-found' }
]
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    GymListComponent,
    SingleGymComponent,
    GymFormComponent,
    HeaderComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GymsService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
