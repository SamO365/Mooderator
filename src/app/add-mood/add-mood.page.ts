import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  standalone: true,
  selector: 'app-add-mood',
  templateUrl: './add-mood.page.html',
  styleUrls: ['./add-mood.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule]
})
export class AddMoodPage {
  moodValue = 3;
  note = '';

  constructor(private storageService: StorageService, private router: Router) {}

  async saveMood() {
    await this.storageService.addMood({
      date: new Date().toLocaleDateString(),
      moodValue: this.moodValue,
      note: this.note
    });
    this.router.navigateByUrl('/');
  }
}
