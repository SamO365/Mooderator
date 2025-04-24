import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  async addMood(entry: { date: string, moodValue: number, note?: string }) {
    const moods = await this._storage?.get('moods') || [];
    moods.unshift(entry);
    await this._storage?.set('moods', moods);
  }

  async getMoods(): Promise<any[]> {
    return await this._storage?.get('moods') || [];
  }
}
