import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';

export abstract class AuthService
{
    private eventBus: Subject<any>;

    constructor() {
        this.eventBus = new Subject<any>();
    }

    public login(credentials: any): Promise<any> { this.authChanged(); return Promise.resolve(null); }
    public logout(): Promise<any> { this.authChanged(); return Promise.resolve(null); }
    public touch(): Promise<any> { return Promise.resolve(null); }
    public getAuthHeader(): string { return null; }
    public isAuthenticated(): boolean { return false; }
    public hasRole(role: string): boolean { return false; }
    public getUsername(): string { return null; }


    protected authChanged(): void {
        this.eventBus.next(null);
    }

    public onAuthChanged(): Observable<any> {
        return this.eventBus.asObservable();
    }
}

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
