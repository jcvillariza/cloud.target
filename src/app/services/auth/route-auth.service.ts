import { Injectable } from '@angular/core';
import { Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteAuthService implements CanActivateChild {

  private validRoutes: string[];

    constructor(public router: Router) { }

    async canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // if (!this.validRoutes) {
        //     let menuList = await this.menuDataService.getMenuList();
        //     this.validRoutes = this.getValidRoutes(menuList);
        // }

        //if ((this.validRoutes && this.validRoutes) && this.checkIfRouteValid(state.url)) {
        if (localStorage.getItem('token')) {
            return true;
        } else {
            this.router.navigate(['login']);
        }
    }

    private checkIfRouteValid(url: string): boolean {
        return this.validRoutes.find(x => x === url.trim()) !== undefined;
    }
}
