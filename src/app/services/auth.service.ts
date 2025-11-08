import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticated: boolean = false;
    private userName: string = '';

    login(email: string, password: string): boolean {
        if (email === 'admin@local.com' && password === '123456') {
            this.isAuthenticated = true;
            this.userName = 'Admin';
            return true;
        }
        return false;
    }

    logout(): void {
        this.isAuthenticated = false;
        this.userName = '';
    }

    isLoggedIn(): boolean {
        return this.isAuthenticated;
    }
    
    getUserName(): string {
        return this.userName;
    }
}