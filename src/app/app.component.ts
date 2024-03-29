import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, MatTabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  routes: {title: string, link: string}[] = [
    {
      title: 'Wireframe',
      link: '/wireframe',
    },
    {
      title: 'Architecture',
      link: '/architecture',
    },
    {
      title: 'Best Practices',
      link: '/best-practices'
    }
  ];
}
