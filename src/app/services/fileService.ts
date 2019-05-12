import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { UtilsService } from './utils';

@Injectable()

export class FileService {
    dir = 'JSEditor';
    rootPath = this.file.externalRootDirectory;
    JScode: any;
    constructor(
        private file: File,
        private utils: UtilsService) {}
    // 获取目录下的文件列表
    async getDirListFile() {
        return await this.file.listDir(this.rootPath, this.dir);
    }

    // 创建并保存文件
    createAndWriteFile(name, data) {
        const fileName = name + '.js';
        this.JScode = data;
        this.file.checkDir(this.rootPath, this.dir).then(res => {
            console.log('Directory exists', res);
            // 文件夹存在直接创建文件
            const path = this.rootPath + this.dir;
            this.createFile(path, fileName);
        }, () => {
            console.log(`Directory don't exists ${this.rootPath}`);
            // 文件夹不存在则创建
            this.createDirectory(this.rootPath, this.dir, fileName);
        });
    }

    // 创建文件夹
    createDirectory(path, dir, fileName) {
        this.file.createDir(path, dir, false).then(res => {
            console.log('createDir', res);
            path = path + dir;
            this.createFile(path, fileName);
        }, () => {
            this.utils.presentToast('创建文件夹错误');
        });
    }

    // 创建文件
    createFile(path, fileName) {
        this.file.createFile(path, fileName, true).then(res => {
            if (res.isFile) {
                this.writerFile(path, fileName);
            }
        }, () => {
            this.utils.presentToast('文件名已经存在');
        });
    }

    // 写入JS代码到文件中
    writerFile(path, fileName) {
        this.file.writeExistingFile(path, fileName, this.JScode).then(res => {
            this.utils.dismissModal();
            this.utils.presentToast('保存到/JSEditor/' + fileName);
        }, () => {
            this.utils.presentToast('写入文件失败');
        });
    }

    // 读取文件
    async readFile(fileName) {
        return await this.file.readAsText(this.rootPath + this.dir, fileName);
    }

    // 删除文件
    async removeFile(fileName) {
        await this.file.removeFile(this.rootPath + this.dir, fileName);
    }
}
