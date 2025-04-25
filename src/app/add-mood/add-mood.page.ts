import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-add-mood',
  templateUrl: './add-mood.page.html',
  styleUrls: ['./add-mood.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddMoodPage {
  selectedMood: any = null;
  note: string = '';

  moodOptions = [
    { icon: '😢', value: 1 },
    { icon: '😞', value: 2 },
    { icon: '😐', value: 3 },
    { icon: '🙂', value: 4 },
    { icon: '😄', value: 5 }
  ];

  constructor(private storageService: StorageService, private router: Router, private alertController: AlertController) {}

  selectMood(mood: any) {
    this.selectedMood = mood;
  }

  async saveMood() {
    if (!this.selectedMood) return;
  
    const newMood = {
      moodValue: this.selectedMood.value,
      date: new Date().toISOString(),
      note: this.note.trim() || undefined
    };
  
    await this.storageService.addMood(newMood);
  
    const alert = await this.alertController.create({
      header: 'Nice Work!',
      message: 'Would you like a quote to make you feel even better?',
      buttons: [
        {
          text: 'No thanks',
          role: 'cancel',
          handler: () => {
            this.router.navigateByUrl('/home');
          }
        },
        {
          text: 'Yes please!',
          handler: () => {
            this.router.navigateByUrl('/quote');
          }
        }
      ]
    });
  
    await alert.present();
  }
  
}
