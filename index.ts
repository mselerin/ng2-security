import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";

import {IfAuthenticatedDirective, IfAnonymousDirective, IfRoleDirective, IfNotRoleDirective} from "./src/security.directive";
import {AuthService, DummyAuthService} from "./src/security.service";

export * from './src/security.directive';
export * from './src/security.service';


const DIRECTIVES: any[] = [
    IfAuthenticatedDirective,
    IfAnonymousDirective,
    IfRoleDirective,
    IfNotRoleDirective
];


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: DIRECTIVES,
    exports: DIRECTIVES
})
export class SecurityModule {}
