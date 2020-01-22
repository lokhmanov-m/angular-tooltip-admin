import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ImagesGridViewComponent } from './pages/images-grid-view/images-grid-view.component';
import { HeaderComponent } from './components/header/header.component';
import { UploadImageModalComponent } from './components/upload-image-modal/upload-image-modal.component';
import { ImageDetailsViewComponent } from './pages/image-details-view/image-details-view.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ImagesGridViewComponent,
    HeaderComponent,
    UploadImageModalComponent,
    ImageDetailsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  entryComponents: [
    UploadImageModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
