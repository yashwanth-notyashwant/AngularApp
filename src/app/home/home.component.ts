import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
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
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `https://r.bing.com/rp/bh44AmEP6-vpc413zKIP0fMCrCU.png`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: `https://r.bing.com/rp/bh44AmEP6-vpc413zKIP0fMCrCU.png`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: `https://r.bing.com/rp/bh44AmEP6-vpc413zKIP0fMCrCU.png`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `https://r.bing.com/rp/bh44AmEP6-vpc413zKIP0fMCrCU.png`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: `https://r.bing.com/rp/bh44AmEP6-vpc413zKIP0fMCrCU.png`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: `https://r.bing.com/rp/bh44AmEP6-vpc413zKIP0fMCrCU.png`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `https://r.bing.com/rp/bh44AmEP6-vpc413zKIP0fMCrCU.png`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: `https://r.bing.com/rp/bh44AmEP6-vpc413zKIP0fMCrCU.png`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: `https://r.bing.com/rp/bh44AmEP6-vpc413zKIP0fMCrCU.png`,
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: `https://r.bing.com/rp/bh44AmEP6-vpc413zKIP0fMCrCU.png`,
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];
}
