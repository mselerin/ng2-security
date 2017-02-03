import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
    IfAuthenticatedDirective,
    IfAnonymousDirective,
    IfRoleDirective,
    IfNotRoleDirective,
    IfAnyRolesDirective, IfAllRolesDirective,
} from "./src/security.directive";

export * from './src/security.directive';
export * from './src/security.service';


const DIRECTIVES: any[] = [
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
