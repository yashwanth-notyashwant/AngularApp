import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { inject } from '@angular/core';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,

  styleUrl: './home.component.css',
})

// here we have done property binding in this line  <app-housing-location [housingLocation]="housingLocation"></app-housing-location>

//     <app-housing-location
//   *ngFor="let housingLocation of housingLocationList"
//   [housingLocation]="housingLocation"
// ></app-housing-location>  usign ngfor to pass a list to the next child
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
