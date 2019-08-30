import { Component, AfterViewInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { FileService } from '../services/fileService';
import { UtilsService } from '../services/utils';
import { AdMobService } from '../services/adMobService';
@Component({
    selector: 'app-localCode',
    templateUrl: 'localCode.page.html',
    styleUrls: ['localCode.page.scss']
})
export class LocalCodePage implements AfterViewInit {
    fileList: Array<any> = [];
    constructor(
        private file: FileService,
        private utils: UtilsService,
        private events: Events,
        private adMobFree: AdMobService
        ) {
        this.getFilesList();
    }

    ngAfterViewInit() {
        this.adMobBannerShow();
    }

    getFilesList() {
        this.file.getDirListFile().then(res => {
            this.fileList = res || [];
            console.log(this.fileList);
        }, err => {
            console.log('getDirListFile', err);
        });
    }

    editorFile(name) {
        this.file.readFile(name).then(res => {
            console.log(res);
            this.utils.dismissModal();
            this.events.publish('editorLocalCode', {code: res, fileName: name});
        }, err => {
            console.log('read file err ', err);
        });
    }

    remove(name) {
        this.file.removeFile(name).then(res => {
            console.log(res);
            this.getFilesList();
        }, err => {
            console.log('remove file err ', err);
        });
    }

    ngOnDestroy() {
        this.closeBannerAd();
    }

    // 展示banner广告
    async adMobBannerShow() {
        await this.adMobFree.bannerAdShow();
    }

    async closeBannerAd() {
        await this.adMobFree.closeBannerAd();
    }
}
