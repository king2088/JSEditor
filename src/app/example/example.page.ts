import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ExampleData } from '../services/exampleData';
import { AdMobService } from '../services/adMobService';

@Component({
  selector: 'app-example',
  templateUrl: 'example.page.html',
  styleUrls: ['example.page.scss']
})
export class ExamplePage {
  list: any;
  lang: string;
  constructor(
      private exampleList: ExampleData,
      private router: Router,
      private translate: TranslateService,
      private adMob: AdMobService
  ) {
      this.list = this.exampleList.localExample;
      this.lang = this.translate.currentLang ? this.translate.currentLang : 'en';
      this.adMob.bannerAdShow();
  }

  async goEditor(title, code) {
    code = `//${title}\r\n${code}`;
    await this.adMob.closeBannerAd();
    this.router.navigate(['/home'], {
        queryParams: {
            code
          }
    });
  }
}
