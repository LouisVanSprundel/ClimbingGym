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
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';


const appRoutes: Routes = [
  { path: 'gyms', canActivate: [AuthGuardService], component: GymListComponent},
  { path: '', redirectTo: 'gyms', pathMatch: 'full'},
  { path: 'gyms/:id', canActivate: [AuthGuardService], component: SingleGymComponent},
  { path: 'new', canActivate: [AuthGuardService], component: GymFormComponent},
  { path: 'modify/:id', canActivate: [AuthGuardService], component: GymFormComponent},
  { path: 'login', component: SigninComponent},
  { path: 'register', component: SignupComponent},
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
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
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [GymsService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
