import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  years: number[] = Array.from({ length: 2036 - 1980 }, (_, i) => 1980 + i);

  brands: string[] = [
    'Oreo', 'KitKat', 'Snickers', 'Mars', 'Twix', 'Bounty', 'Cadbury Dairy Milk', 'Ferrero Rocher', 'Hershey\'s', 'Toblerone',
    'Lindt', 'Galaxy', 'Milka', 'Kinder', 'Nestle', 'M&M\'s', 'Reese\'s', 'Butterfinger', 'Ghirardelli', 'Godiva'
  ];
  filteredBrands: string[] = [...this.brands];
  searchTerm: string = 'seelct brand';
  selectedBrand: string = 'select Brand';

  filterBrands(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredBrands = this.brands.filter(brand => brand.toLowerCase().includes(term));
  }
}
