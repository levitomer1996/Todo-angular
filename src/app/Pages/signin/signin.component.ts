import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import { FormBuilder } from "@angular/forms";
import { Auth } from "../../Model/Auth.model";
import * as AuthActions from "../../actions/Auth.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"],
})
export class SigninComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {}
  SigninForm = this.formBuilder.group({
    email: "",
    password: "",
  });

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl("", [Validators.required]);

  onSubmit(email, password) {
    this.store.dispatch(
      new AuthActions.SigninUser({ user: { email, password }, isLogged: true })
    );
  }

  ngOnInit(): void {}
}
