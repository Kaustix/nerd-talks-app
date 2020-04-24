import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NerdTalksApi } from './nerd-talks.api';
import { FakeNerdTalksApi } from './fakes/nerd-talks.api';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(FakeNerdTalksApi, {
      apiBase: ''
    })
  ],
  providers: [
    NerdTalksApi
  ]
})
export class ApiModule {}
