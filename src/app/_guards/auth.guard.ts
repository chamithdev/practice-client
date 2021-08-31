import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService:AccountService, private toastr:ToastrService) {

  }
  canActivate(): Observable<boolean>{
    return this.accountService.currentUser$.pipe(
      map((user: User) => {
        if(user) {
          return true;
        }        
        this.toastr.error('Can not navigate');
        return false;
      })
    );
  }
  
}
