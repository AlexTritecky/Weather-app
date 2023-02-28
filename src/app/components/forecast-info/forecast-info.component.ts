import { Component, Input, OnInit } from '@angular/core';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Router } from '@angular/router';
import { IForecastList } from '@models//forecast-response/forecast-list.interface';
import { IForecastResponse } from '@models//forecast-response/forecast-response.interface';
import { WeatherService } from '@services/weather/weather.service';

@Component({
  selector: 'app-forecast-info',
  templateUrl: './forecast-info.component.html',
  styleUrls: ['./forecast-info.component.scss'],
})
export class ForecastInfoComponent implements OnInit {
  @Input() forecast!: IForecastResponse;
  dataSource = new MatTableDataSource<IForecastList>();
  displayedColumns = ['day', 'state', 'high', 'low', 'icon'];
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
