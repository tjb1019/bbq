import { Component, OnInit } from '@angular/core';

import { PHOTOS } from '../../utilities/constants';
import { Photo } from '../../models/photo';

@Component({
  selector: 'bbq-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos: Photo[];
  modalOverlay: HTMLElement;
  close: HTMLElement;
  modalTitle: string;
  modalImage: string;
  imageLoading: boolean = true;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.photos = PHOTOS;
    this.modalOverlay = <HTMLElement>document.querySelector('.modal-overlay');
    this.close = <HTMLElement>document.querySelector('.close');
  }

  openModal(photo: Photo): void {
    this.modalOverlay.setAttribute('style', 'display: flex');
    this.modalTitle = photo.title;
    this.modalImage = photo.src;
  }

  closeClick() {
    this.modalOverlay.setAttribute('style', 'display: none');
  }

  outsideClick(e) {
    if (e.target == this.modalOverlay) {
      this.modalOverlay.setAttribute('style', 'display: none');
    }
  }

}
