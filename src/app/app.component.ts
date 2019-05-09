import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'JS Editor',
      url: '/home',
      icon: 'code'
    },
    {
      title: 'Tutorial',
      url: '/tutorial',
      icon: 'laptop'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
        if (this.platform.is('android')) {
            this.statusBar.backgroundColorByHexString('#b40c0c');
        } else {
            this.statusBar.styleDefault();
        }
        this.splashScreen.hide();
    });
  }
}
