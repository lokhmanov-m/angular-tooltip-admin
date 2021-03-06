import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImageModel } from '../models/image.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private basedUri: string = environment.basedUri;

  constructor(private http: HttpClient) {}

  getImages(): Observable<ImageModel[]> {
    const endpoint = `${this.basedUri}/images`;
    return this.http.get<ImageModel[]>(endpoint);
  }

  getImageById(imageId: string): Observable<ImageModel> {
    const endpoint = `${this.basedUri}/images?id=${imageId}`;
    return this.http.get<ImageModel>(endpoint).pipe(
      map((item => item[0]))
    );
  }

  uploadImage(imageData: ImageModel): Observable<ImageModel> {
    const endpoint = `${this.basedUri}/images`;
    return this.http.post<ImageModel>(endpoint, imageData, httpOptions);
  }

  updateImage(imageData: ImageModel): Observable<ImageModel> {
    const endpoint = `${this.basedUri}/images/${imageData.id}`;
    return this.http.patch<ImageModel>(endpoint, imageData, httpOptions);
  }

  deleteImage(imageId: string): Observable<ImageModel> {
    const endpoint = `${this.basedUri}/images/${imageId}`;
    return this.http.delete<ImageModel>(endpoint);
  }
}
