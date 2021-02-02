import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { authReducer } from "./reducers/Auth.reducer";

import { RouterModule } from "@angular/router";
//Material
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";

//Pages
import { SigninComponent } from "./Pages/signin/signin.component";
//Components
import { HeaderComponent } from "./Components/header/header.component";
import Routes from "./Routes";
import { SignupComponent } from './Pages/signup/signup.component';

@NgModule({
  declarations: [AppComponent, SigninComponent, HeaderComponent, SignupComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    NoopAnimationsModule,
    StoreModule.forRoot({ auth: authReducer }),
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
