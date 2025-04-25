import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule]
})
export class HomePage {
  moods: any[] = [];

  constructor(private storageService: StorageService) {}

  ionViewWillEnter() {
    this.loadMoods();
  }

  async loadMoods() {
    this.moods = await this.storageService.getMoods();
  }
}