import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StockService } from 'src/app/stock.service';

const Routes =
  [
    {
      path: '',
      redirectTo: 'stock',
      pathMatch: 'full'
    },
    {
      path: 'stock', component: StockComponent
    }
  ];


@NgModule({
  declarations: [
    AppComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
