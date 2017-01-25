// Directives
import {Directive, OnInit, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from './security.service';


@Directive({})
export class BaseSecurityDirective implements OnInit
{
    private viewCreated: boolean;

    constructor(
        protected authService: AuthService,
        protected templateRef: TemplateRef<any>,
        protected viewContainer: ViewContainerRef
    ) {
        this.viewCreated = false;
    }

    ngOnInit(): void {
        this.changeVisibility();
        this.authService.onAuthChanged().subscribe(() => { this.changeVisibility(); });
    }

    protected hasPermission(): boolean {
        return false;
    }

    private changeVisibility(): void {
        if (this.hasPermission()) {
            if (!this.viewCreated) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.viewCreated = true;
            }
        }
        else {
            this.viewContainer.clear();
            this.viewCreated = false;
        }
    }
}


@Directive({})
export class BaseAuthenticatedDirective extends BaseSecurityDirective
{
    protected authenticated: boolean;

    ngOnInit() {
        if (this.authenticated == undefined)
            this.authenticated = true;

        super.ngOnInit();
    }

    hasPermission() {
        let isAuthenticated = this.authService.isAuthenticated();
        return (isAuthenticated === this.authenticated);
    }
}



@Directive({ selector: '[secIfAuthenticated]' })
export class IfAuthenticatedDirective extends BaseAuthenticatedDirective
{
    ngOnInit() {
        this.authenticated = true;
        super.ngOnInit();
    }
}



@Directive({ selector: '[secIfAnonymous]' })
export class IfAnonymousDirective extends BaseAuthenticatedDirective
{
    ngOnInit() {
        this.authenticated = false;
        super.ngOnInit();
    }
}



@Directive({ selector: '[secIfRole]' })
export class IfRoleDirective extends BaseSecurityDirective
{
    @Input('secIfRole') role: string;

    hasPermission() {
        return this.authService.hasRole(this.role);
    }
}



@Directive({ selector: '[secIfNotRole]' })
export class IfNotRoleDirective extends BaseSecurityDirective
{
    @Input('secIfNotRole') role: string;

    hasPermission() {
        return !this.authService.hasRole(this.role);
    }
}

