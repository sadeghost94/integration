import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if(currentUser){
            if (currentUser.profile=="ADMIN") {
                // authorised so return true
                this.router.navigate(['admin']);
                return true;
            } else if(currentUser.profile=="PROFESSIONAL")
            {
                this.router.navigate(['expert']);
                return true;
    
            } else if(currentUser.profile=="SEARCHER"){
                this.router.navigate(['chercheur']);
                return true;
            }

        }else{
            this.router.navigate(['/']);

        }
       
       
        
       
    
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
