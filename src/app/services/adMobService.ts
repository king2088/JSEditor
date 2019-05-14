import { Injectable } from '@angular/core';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { bannerConfigAndroid, interstitialConfigAndroid } from '../../environments/environment';

@Injectable()
export class AdMobService {
    constructor(
        private adMobFree: AdMobFree
    ) {}

    // 显示banner广告,可定制上下显示
    async bannerAdShow(position?) {
        if (position === 'bottom' || !position) {
            bannerConfigAndroid.bannerAtTop = false;
        } else {
            bannerConfigAndroid.bannerAtTop = true;
        }
        // console.log('bannerConfigAndroid', bannerConfigAndroid);
        try {
            this.adMobFree.banner.config(bannerConfigAndroid);
            await this.adMobFree.banner.prepare();
            await this.adMobFree.banner.show();
            // console.log('adMob show banner');
        } catch (e) {
            // console.log('adMobBannerShow err', e);
        }
    }

    async closeBannerAd() {
        try {
            await this.adMobFree.banner.remove();
            // console.log('close banner ad');
        } catch (e) {
            // console.log('hide banner is err', e);
        }
    }

    // 显示弹窗广告
    async interstitialAdShow() {
        try {
            this.adMobFree.interstitial.config(interstitialConfigAndroid);
            await this.adMobFree.interstitial.prepare();
            await this.adMobFree.interstitial.show();
        } catch (e) {
            // console.log('interstitialAdShow is err', e);
        }
    }

}
