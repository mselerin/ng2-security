# ng2-security

## Installation

To install this library, run:

```bash
$ npm install ng2-security --save
```

## Using

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
      { provide: AuthService, useClass: JWTAuthService }
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
      { provide: AuthService, useClass: JWTAuthService }
    ]

})
export class CoreModule { }
```


## License

MIT © [Michel Selerin](mailto:michel.selerin@outlook.com)
