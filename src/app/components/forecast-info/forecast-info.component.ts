import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

import { MatTableModule } from '@angular/material/table'; // Ensure MatTableModule is imported for standalone usage
import { IForecastResponse } from '@models//forecast-response/forecast-response.interface';
import { IForecastList } from '@models//forecast-response/forecast-list.interface';
import { WeatherService } from '@services/weather-service/weather-service.service';

@Component({
  selector: 'app-forecast-info',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './forecast-info.component.html',
  styleUrls: ['./forecast-info.component.scss'],
})
export class ForecastInfoComponent {
  @Input() forecast!: IForecastResponse;
  dataSource = new MatTableDataSource<IForecastList>();
  displayedColumns: string[] = ['day', 'state', 'high', 'low', 'icon'];

  constructor(public service: WeatherService, private router: Router) {}

  ngOnInit(): void {
    this.dataSource.data = this.forecast.list;
  }

  getByIdIcon(id: number): string {
    return this.service.getIcons(id);
  }
  navigate(): void {
    this.router.navigate(['']);
  }
}
