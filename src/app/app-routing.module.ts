import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: "weather/:name/: springN/:springM/: summerN/: summerM/: winterN/:winterM/: autumnN/: autumnM/: visitFrom/: visitTo", component: WeatherDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
