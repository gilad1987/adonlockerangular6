import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    public invalidCredentials: boolean = false;

    private navigateAfterLogin: string;

    constructor(private auth: AuthService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    get f() {
        return this.form.controls;
    }

    get formIsInvalid() {
        return this.form.invalid;
    }

    ngOnInit() {

        this.navigateAfterLogin = this.route.snapshot.queryParams['referrer'] || '/dashboard';

        this.form = new FormGroup({
            password: new FormControl('', [
                Validators.minLength(2),
                Validators.required
            ]),
            username: new FormControl('', [
                Validators.minLength(2),
                Validators.required
            ])
        });


    }

    submit() {

        if (this.form.invalid) {
            return;
        }
        this.auth
            .login(this.f.username.value, this.f.password.value)
            .subscribe(
                (res) => {
                    this.router.navigateByUrl(this.navigateAfterLogin);
                },
                (error) => {
                    if (error.status === 401) {
                        this.invalidCredentials = true;
                    }
                });

    }

    reset() {
        this.form.reset();
    }

}
