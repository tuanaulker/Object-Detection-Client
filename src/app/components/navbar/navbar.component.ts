import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'User Profile',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Username Surname',
            icon: 'pi pi-fw pi-user'
          }
        ]
      },
      {
        label: 'Alerts',
        icon: 'pi pi-fw pi-bell',
        items: [
          {
            label: 'View Alerts',
            icon: 'pi pi-fw pi-bell'
          }
          // Add more items for alerts as needed
        ]
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }
}  