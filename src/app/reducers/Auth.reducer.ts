import { Action } from "@ngrx/store";
import { Auth } from "../Model/Auth.model";
import * as Authactions from "../actions/Auth.actions";

// Section 1
const initialState: Auth = {
  user: { email: "", password: "" },
  isLogged: false,
};

// Section 2
export function authReducer(
  state: Auth = initialState,
  action: Authactions.SigninUser
) {
  // Section 3
  switch (action.type) {
    case Authactions.SIGNIN:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
