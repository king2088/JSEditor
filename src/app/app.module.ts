import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { WebIntent } from '@ionic-native/web-intent/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// modal page
import { SaveModalPage } from './saveModal/saveModal.page';
import { LocalCodePage } from './localCode/localCode.page';

// import services
import { UtilsService } from './services/utils';
import { FileService } from './services/fileService';
import { ExampleData } from './services/exampleData';
@NgModule({
  declarations: [AppComponent, SaveModalPage, LocalCodePage],
  entryComponents: [SaveModalPage, LocalCodePage],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    File,
    AppVersion,
    WebIntent,
    UtilsService,
    FileService,
    ExampleData,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
