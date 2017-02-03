# ng2-security
## A set of directives to hide or show elements based on an AuthService.

[![npm version](https://badge.fury.io/js/ng2-security.svg)](https://badge.fury.io/js/ng2-security) [![Build Status](https://travis-ci.org/mselerin/ng2-security.svg?branch=master)](https://travis-ci.org/mselerin/ng2-security)

## Directives

`*secIfAuthenticated` and `*secIfAnonymous`
are based on `AuthService.isAuthenticated(): boolean`

`*secIfRole`, `*secIfAnyRoles`, `*secIfAllRoles`, `*secIfNotRole`
are based on `AuthService.hasRole(role: string): boolean`

Example :
```
<a *secIfAnonymous [routerLink]="['/login']">Login</a>
<a *secIfAuthenticated [routerLink]="['/logout']">Logout</a>
<a *secIfAnyRoles="['manager', 'admin']" [routerLink]="['/logout']">Logout</a>
```

## Service
You have to implement your own AuthService class. A Dummy implementation is provided as an example :
```
@Injectable()
export class DummyAuthService extends AuthService {
    private credentials: any = null;

    public login(credentials: any): Promise<any> {
        console.warn('Dummy login - FOR TESTING PURPOSE ONLY');
        this.credentials = credentials;
        return super.login(credentials);
    }

    public logout(): Promise<any> {
        console.warn('Dummy logout - FOR TESTING PURPOSE ONLY');
        this.credentials = null;
        return super.logout();
    }

    public isAuthenticated(): boolean { return this.credentials != null; }
    public getUsername(): string { return (this.credentials ? this.credentials['username'] : ''); }
}
```

In your implementation, when the authentication changes, don't forget to call `AuthService.authChanged()`.

This method is already called in the `super.login()` and `super.logout()`.


## Installation

To install this library, run:

```bash
$ npm install ng2-security --save
```


## Importing

In order to use this module, you have to import/export the SecurityModule and provide an implementation for AuthService.
A sample 'DummyAuthService' is included within this module.


```
@NgModule({
    imports: [
      CommonModule,
      SecurityModule
    ],
    exports: [
      SecurityModule
    ],
    providers: [
      { provide: AuthService, useClass: DummyAuthService }
    ]

})
export class MyAwesomeModule { }
```

If you follow the "shared / core" module pattern from the [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-11) (and you should), just import / export the module in the SharedModule and provide the AuthService in the CoreModule.

```
@NgModule({
    imports: [
      CommonModule,
      SecurityModule
    ],
    exports: [
      SecurityModule
    ]

})
export class SharedModule { }
```

```
@NgModule({
    imports: [
      CommonModule,
      /* Other Modules */
    ],
    providers: [
      { provide: AuthService, useClass: DummyAuthService }
    ]

})
export class CoreModule { }
```


## License

MIT © [Michel Selerin](mailto:michel.selerin@outlook.com)
