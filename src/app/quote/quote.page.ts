import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
  imports: [CommonModule, IonicModule, RouterModule]
})
export class QuotePage {
  quote = '';

  constructor(private http: HttpClient, private router: RouterModule) {}

  ionViewWillEnter() {
    this.loadQuote();
  }
//API service used for giving quotes to the user
  loadQuote() {
    this.http.get<any>('https://api.quotable.io/random').subscribe(data => {
      this.quote = `"${data.content}" — ${data.author}`;
    });
  }

}
