import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public appPages = [{
        title: 'HOME_TITLE',
        url: '/home',
        icon: 'logo-nodejs'
    },
    {
        title: 'EXAMPLE',
        url: '/example',
        icon: 'stats'
    },
        // {
        //     title: 'TUTORIAL',
        //     url: '/tutorial',
        //     icon: 'book'
        // }];
    ];
    lastTimeBackPress = 0;
    timePeriodToExit = 2000;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private translate: TranslateService,
        private appMinimize: AppMinimize
    ) {
        this.initializeApp();
        this.initLocale();
        this.backButtonEvent();
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
    // 初始化本地语言
    initLocale() {
        const langArray: any = [
            'af', // 荷兰语
            'ar', // 阿拉伯语
            'hy', // 亚美尼亚
            'be', // 白俄罗斯
            'zh', // 中国
            'cs', // 捷克
            'da', // 丹麦
            'en', // 英语
            'fr', // 法语
            'de', // 德国
            'it', // 意大利
            'ja', // 日语
            'ko', // 韩语
            'ru', // 俄罗斯
            'es', // 西班牙
            'sv', // 瑞典
            'th', // 泰国
            'uk', // 乌克兰
            'vi', // 越南
        ];
        this.translate.addLangs(langArray);
        // 设置默认语言，一般在无法匹配的时候使用
        this.translate.setDefaultLang('en');
        // 获取当前浏览器环境的语言比如en、 zh
        const browserLang = this.translate.getBrowserLang();
        // 将所有语言重组为正则表达式
        let regString = '';
        for (const item of langArray) {
            regString += item + '|';
        }
        regString = regString.substring(0, regString.length - 1);
        this.translate.use(browserLang.match(RegExp(regString)) ? browserLang : 'en');
    }

    // active hardware back button
    backButtonEvent() {
        this.platform.backButton.subscribe(async () => {
            console.log('back button');
            this.appMinimize.minimize();
        });
    }
}
