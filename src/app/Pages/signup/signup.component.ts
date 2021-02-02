import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  constructor() {}

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl("", [Validators.required]);
  firstNameFormControl = new FormControl("", [Validators.required]);
  lastNameFormControl = new FormControl("", [Validators.required]);
  ngOnInit(): void {}
}
