import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
declare var window: any;
@Component({
    selector: 'app-saveModal',
    templateUrl: 'saveModal.page.html',
    styleUrls: ['saveModal.page.scss']
})
export class SaveModalPage implements AfterViewInit, OnDestroy {
    isTouchMove = false;
    fileName: any;
    constructor(private file: File) { }

    ngAfterViewInit() {
        this.hideAndShowMenuDom('none');
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
    }

    // 点击保存
    saveFile() {
        // 去除fileName结尾包含了.js
        if (this.fileName.endsWith('.js')) {
            this.fileName = this.fileName.replace('.js', '');
        }
    }

    createAndWriteFile(name) {
        const fileName = name + '.js';
        window.requestFileSystem(this.file.dataDirectory, 0, (fs) => {
            console.log('打开的文件系统: ' + fs.name);
            fs.root.getDirectory('JSEditor', { create: true }, (dirEntry) => {
                dirEntry.getFile(fileName, { create: true, exclusive: false }, (fileEntry) => {
                    fileEntry.name === fileName;
                    fileEntry.fullPath === 'JSEditor' + fileName;
                    // 文件内容
                    const dataObj = new Blob([this.editor.getValue()], { type: 'text/plain' });
                    // 写入文件
                    this.writeFile(fileEntry, dataObj);
                }, this.onErrorCreateFile);
            }, this.onErrorGetDir);
        }, this.onErrorLoadFs);
    }

    writeFile(fileEntry, dataObj) {
        // Create a FileWriter object for our FileEntry (log.txt).
        fileEntry.createWriter((fileWriter) => {

            fileWriter.onwriteend = () => {
                console.log('Successful file write...');
                this.readFile(fileEntry);
            };
            fileWriter.onerror = (e) => {
                console.log('Failed file write: ' + e.toString());
            };
            // If data object is not passed in,
            // create a new Blob instead.
            if (!dataObj) {
                dataObj = new Blob(['some file data'], { type: 'text/plain' });
            }
            fileWriter.write(dataObj);
        });
    }

    getAndReadFile() {
        window.requestFileSystem(this.file.dataDirectory, 0, (fs) => {
            console.log('打开的文件系统: ' + fs.name);
            fs.root.getDirectory('xbrother', { create: false }, (dirEntry) => {
                dirEntry.getDirectory('assets', { create: false }, (subDirEntry) => {
                    subDirEntry.getFile('task.json', { create: false, exclusive: false }, (fileEntry) => {
                        console.log('是否是个文件？' + fileEntry.isFile.toString());
                        fileEntry.name === 'task.json';
                        fileEntry.fullPath === 'xbrother/assets/task.json';
                        this.readFile(fileEntry);
                    }, this.onErrorCreateFile);
                }, this.onErrorGetDir);
            }, this.onErrorGetDir);
        }, this.onErrorLoadFs);
    }

    readFile(fileEntry) {
        fileEntry.file((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                // $$('#file_content_info').html(this.result);
                // console.log('file read success:' + this.result);
            };
            reader.readAsText(file);
        }, this.onErrorReadFile);
    }

    // FileSystem加载失败回调
    onErrorLoadFs(error) {
        console.log('文件系统加载失败！');
    }

    // 文件夹创建失败回调
    onErrorGetDir(error) {
        console.log('文件夹创建失败！');
    }

    // 文件创建失败回调
    onErrorCreateFile(error) {
        console.log('文件创建失败！');
    }

    // 读取文件失败响应
    onErrorReadFile() {
        console.log('文件读取失败!');
    }

}
