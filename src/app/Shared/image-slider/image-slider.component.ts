import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  @Input() images: string[]

  currentIndex: number
  constructor() { }

  ngOnInit() {
    this.currentIndex = 0;
  }

  next() {
    this.currentIndex = this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : this.currentIndex;
  }
  prev() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.currentIndex;
  }

  select(index) {
    this.currentIndex = index;
  }
}
