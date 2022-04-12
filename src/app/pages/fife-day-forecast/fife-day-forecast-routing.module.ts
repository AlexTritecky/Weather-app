import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FifeDayForecastComponent } from './fife-day-forecast.component';

const routes: Routes = [{ path: ':id', component: FifeDayForecastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FifeDayForecastRoutingModule {}
