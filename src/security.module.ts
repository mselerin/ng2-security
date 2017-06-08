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
} from "./security.directive";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BaseSecurityDirective,
        BaseAuthenticatedDirective,
        IfAuthenticatedDirective,
        IfAnonymousDirective,
        IfRoleDirective,
        IfNotRoleDirective,
        IfAnyRolesDirective,
        IfAllRolesDirective
    ],
    exports: [
        IfAuthenticatedDirective,
        IfAnonymousDirective,
        IfRoleDirective,
        IfNotRoleDirective,
        IfAnyRolesDirective,
        IfAllRolesDirective
    ]
})
export class SecurityModule { }
