import { Component } from '@angular/core';
import { Events } from '@ionic/angular';
import { FileService } from '../services/fileService';
import { UtilsService } from '../services/utils';
@Component({
    selector: 'app-localCode',
    templateUrl: 'localCode.page.html',
    styleUrls: ['localCode.page.scss']
})
export class LocalCodePage {
    fileList: any;
    constructor(
        private file: FileService,
        private utils: UtilsService,
        private events: Events
        ) {
        this.getFilesList();
    }

    getFilesList() {
        this.file.getDirListFile().then(res => {
            this.fileList = res;
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
}
