import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getStorageValue(key: string) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
  }

  setStorageValue(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeFromStorage(key: string) {
    localStorage.removeItem(key);
  }

  clearStorage() {
    localStorage.clear();
  }
}
