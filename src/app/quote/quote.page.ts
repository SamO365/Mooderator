import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class QuotePage {
  quote = '';

  constructor(private http: HttpClient) {}

  ionViewWillEnter() {
    this.loadQuote();
  }

  loadQuote() {
    this.http.get<any>('https://api.quotable.io/random').subscribe(data => {
      this.quote = `"${data.content}" — ${data.author}`;
    });
  }
}
