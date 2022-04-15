import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenModalService {
  isModalOpen: boolean = true;

  constructor() { }

  openModal() {
    return this.isModalOpen = true;
  }
}
