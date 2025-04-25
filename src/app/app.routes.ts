import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AddMoodPage } from './add-mood/add-mood.page';
import { QuotePage } from './quote/quote.page';

export const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'add', component: AddMoodPage },
  { path: 'quote', component: QuotePage }
];
