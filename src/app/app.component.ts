import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img
            src="https://r.bing.com/rp/bh44AmEP6-vpc413zKIP0fMCrCU.png"
            alt="logo"
            aria-hidden="true"
          />
        </header>
      </a>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Title';
}

// <router-outlet></router-outlet>;
