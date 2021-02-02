// Section 1
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Auth } from "../Model/Auth.model";

// Section 2
export const SIGNIN = "[AUTH] Signin";
export const REMOVE_TUTORIAL = "[AUTH] Remove";

// Section 3
export class SigninUser implements Action {
  readonly type = SIGNIN;

  constructor(public payload: Auth) {}
}

// Section 4
export type Actions = SigninUser;
