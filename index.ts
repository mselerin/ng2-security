import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
    BaseAuthenticatedDirective,
    BaseSecurityDirective,
    IfAllRolesDirective,
    IfAnonymousDirective,
    IfAnyRolesDirective,
    IfAuthenticatedDirective,
    IfNotRoleDirective,
    IfRoleDirective
} from "./src/security.directive";

export * from './src/security.directive';
export * from './src/security.service';


const DIRECTIVES: any[] = [
    BaseSecurityDirective,
    BaseAuthenticatedDirective,
    IfAuthenticatedDirective,
    IfAnonymousDirective,
    IfRoleDirective,
    IfNotRoleDirective,
    IfAnyRolesDirective,
    IfAllRolesDirective
];


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: DIRECTIVES,
    exports: DIRECTIVES
})
export class SecurityModule {}
