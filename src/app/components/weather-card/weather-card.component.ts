import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '@services/weather-service/weather-service.service';
import { IStorage } from '@models//localstorage-obj.interface';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@shared/buttons/buttons.module';
import { ZipCodesStorageService } from '@services/zip-codes/zip-codes-storage.service';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  @Input() weatherArray!: IStorage[];

  constructor(
    private zipService: ZipCodesStorageService,
    private service: WeatherService
  ) {}

  getByIdIcon(id: number): string {
    return this.service.getIcons(id);
  }

  remove(zipcode: string): void {
    this.zipService.removeZipCode(zipcode);
  }
}
