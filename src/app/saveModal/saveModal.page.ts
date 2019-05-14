import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { FileService } from '../services/fileService';
import { AdMobService } from '../services/adMobService';
@Component({
    selector: 'app-saveModal',
    templateUrl: 'saveModal.page.html',
    styleUrls: ['saveModal.page.scss']
})
export class SaveModalPage implements AfterViewInit, OnDestroy {
    isTouchMove = false;
    fileName: any;
    JScode: string;
    modifyFileName: string;
    constructor(
        private navParams: NavParams,
        private file: FileService,
        private adMobFree: AdMobService
        ) {
        this.JScode = this.navParams.get('editorValue');
        this.modifyFileName = this.navParams.get('fileName');
        if (this.modifyFileName) {
            this.fileName = this.modifyFileName.replace('.js', '');
        }
    }

    ngAfterViewInit() {
        this.hideAndShowMenuDom('none');
        this.adMobBannerShow();
    }

    hideAndShowMenuDom(display?) {
        // 移除menu class show-menu
        const menuDom = document.getElementsByTagName('ion-menu')[0];
        menuDom.style.display = display ? display : '';
        if (menuDom.classList.value.indexOf('show-menu') > -1) {
            menuDom.classList.remove('show-menu');
        }
        // 移除路由class menu-content-open
        const routerDom = document.getElementsByTagName('ion-router-outlet')[0];
        if (routerDom.classList.value.indexOf('menu-content-open') > -1) {
            routerDom.classList.remove('menu-content-open');
        }
    }
    // 处理滑动事件
    swipeView() {
        if (this.isTouchMove) { return; }
        this.isTouchMove = true;
        this.hideAndShowMenuDom('none');
    }

    ngOnDestroy() {
        this.hideAndShowMenuDom();
        this.closeBannerAd();
    }

    // 点击保存
    saveFile() {
        // 去除fileName结尾包含了.js
        if (this.fileName.endsWith('.js')) {
            this.fileName = this.fileName.replace('.js', '');
        }
        this.file.createAndWriteFile(this.fileName, this.JScode);

    }
    // 展示banner广告
    async adMobBannerShow() {
        await this.adMobFree.bannerAdShow();
    }

    async closeBannerAd() {
        await this.adMobFree.closeBannerAd();
    }
}
