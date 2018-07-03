import { Subscription } from 'rxjs';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth: boolean;
  authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange
      .subscribe(data => this.isAuth = data);
  }
  onClose() {
    this.closeSidenav.emit();
  }
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
  onLogout() {
    this.onClose();
    this.authService.logout();
  }
}
