import { Component, inject, input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { from, map, tap } from 'rxjs';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  authService: AuthService = inject(AuthService);

  form = new FormGroup({
    username: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null, Validators.required),
  });

  // constructor() {
  //   from([1, 2, 3, 4, 5, 6, 7, 8, 9])
  //     .pipe(
  //       map((v) => v * 2),
  //       tap((v: number) => {
  //         this.form.patchValue({ username: v.toString() });
  //       })
  //     )
  //     .subscribe((val) => {
  //       console.log(val);
  //     });
  // }

  onSubmit() {
    if (this.form.valid) {
      // console.log(this.form.value);
      //@ts-ignore
      this.authService.login(this.form.value).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
