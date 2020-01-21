import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../shared/services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-images-grid-view',
  templateUrl: './images-grid-view.component.html',
  styleUrls: ['./images-grid-view.component.scss']
})
export class ImagesGridViewComponent implements OnInit {
  images: any;

  constructor(private imageService: ImageService, private router: Router ) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
  }

  onImageRedirectHandler(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const id = target.id;

    console.log(event);
    this.router.navigate(['image-detail', id]);
  }

}
