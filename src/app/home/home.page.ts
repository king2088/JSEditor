import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SaveModalPage } from '../saveModal/saveModal.page';

declare var CodeMirror: any;
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
    showResult = false;
    codeText = '';
    runConsole = '';
    editor: any;
    showTools = false;
    // 设置本页console使用其他自定义关键词代替,以下要使用console的地方只能使用iConsole.
    iConsole = console ? { log: console.log } : { log: () => { } };
    @ViewChild('editor') editorContent: ElementRef;
    @ViewChild('content') content: ElementRef;
    @ViewChild('editorResult') editorResult: ElementRef;
    constructor(
        private socialSharing: SocialSharing,
        private toastCtl: ToastController,
        private modalCtl: ModalController
    ) { }

    ngAfterViewInit(): void {
        this.initEditor();
    }

    initEditor() {
        // 为了防止编辑器初始化时无法进行自动获取焦点，采用setTimeout延后执行
        setTimeout(() => {
            this.editor = CodeMirror.fromTextArea(this.editorContent.nativeElement, {
                lineNumbers: true,
                styleActiveLine: true,
                matchBrackets: true,
                theme: 'material',
                mode: 'javascript',
                indentWithTabs: true,
                autofocus: true,
                lineWrapping: true,
                completeSingle: false,
                selectionsMayTouch: true,
                inputStyle: 'textarea',
                autoCloseBrackets: true,
                smartIndent: true,
            });
            this.editor.on('focus', () => {
                if (!this.showResult) { return; }
                this.showResultElement();
            });
            // 自动代码提示
            this.editor.on('keyup', (cm, event) => {
                const editorValue = this.editor.getValue();
                const key = event.keyCode;
                // 当输入特殊字符、数字键以及ctrl、alt、esc、space等按键的时候，无需进行代码提示(主要针对PC端，移动端主要仅能识别enter、backspace等极少的按键)
                // tslint:disable-next-line:max-line-length
                const keycode = [8, 9, 12, 13, 16, 17, 18, 20, 17, 32, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 186, 187, 188, 189, 190, 191, 192, 219, 220, 221, 222, 106, 107, 108, 109, 110, 111];
                let pressKeyCodes = true;
                for (const code of keycode) {
                    if (key === code) {
                        pressKeyCodes = false;
                    }
                }
                // 正则匹配数字与特殊字符
                const reg = / |\d|[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、﹉¥€]/im;
                // 匹配最后输入的字符是否是特殊字符或者数字
                const lastKey = editorValue[editorValue.length - 1];
                if (reg.test(lastKey)) {
                    this.editor.closeHint();
                    pressKeyCodes = false;
                }
                console.log(key, pressKeyCodes);
                if (!cm.state.completionActive && pressKeyCodes) {
                    CodeMirror.commands.autocomplete(cm, null, { completeSingle: false });
                }
            });
            // 编辑器获取焦点时，键盘弹起，隐藏工具条
            this.editor.on('focus', cm => {
                this.showTools = false;
                this.content.nativeElement.querySelector('.CodeMirror').style.height = '100%';
            });
            this.content.nativeElement.querySelector('.CodeMirror').style.height = '100%';
            this.content.nativeElement.querySelector('.CodeMirror').style.fontFamily = '"Consolas", "Arial", "微软雅黑"';
        }, 100);
    }

    showResultElement(e?) {
        this.codeText = this.editor.getValue();
        if (!this.codeText) { return; }
        let editorHeight = '100%';
        if (e === 'RUN') {
            editorHeight = '70%';
            this.showResult = true;
            this.showTools = false;
            setTimeout(() => {
                this.runCode();
            }, 0);
        } else {
            this.showResult = false;
        }
        this.content.nativeElement.querySelector('.CodeMirror').style.height = editorHeight;
    }

    runCode() {
        // 把console.log转换为直接打印到result中
        const editorResult = this.editorResult.nativeElement;
        editorResult.innerText = '';
        const node = document.createElement('div');
        node.setAttribute('style', 'border-bottom: 1px rgb(235, 232, 232) solid;font-size:14px;padding:5px 5px;');
        this.runConsole = `
        var editorResult = document.getElementById('editorResult');
        editorResult.innerText = ''
        console.log = (...str) => {
          var node = document.createElement('div');
          node.setAttribute('style', 'border-bottom: 1px rgb(235, 232, 232) solid;font-size:14px;padding:5px 5px;');
          var textNode = ''
          textNode = document.createTextNode([...str].join('  '))
          node.appendChild(textNode)
          editorResult.appendChild(node);
        };
      `;
        try {
            let runcode: any;
            runcode = new Function(this.runConsole + this.codeText);
            runcode();
        } catch (err) {
            // 获取异常
            node.setAttribute('style', 'border-bottom: 1px rgb(235, 232, 232) solid;font-size:14px;padding:5px 5px;color:red');
            const textNode = document.createTextNode(err);
            node.appendChild(textNode);
            editorResult.appendChild(node);
        }
    }

    // 撤销操作
    undo() {
        this.editor.undo();
    }

    // 取消撤销操作
    redo() {
        this.editor.redo();
    }

    showTool() {
        this.showTools = true;
        this.content.nativeElement.querySelector('.CodeMirror').style.height = '92%';
    }

    // 分享
    share() {
        const code = this.editor.getValue();
        if (code.length <= 0) {
            const message = '没有可以分享的代码';
            this.presentToast(message);
            return;
        }
        this.socialSharing.share(code, null, null, null);
    }

    clearResult() {
        const editorResult: HTMLElement = document.getElementById('editorResult');
        editorResult.innerText = '';
    }

    async presentToast(message) {
        const toast = await this.toastCtl.create({
            message,
            duration: 2000
        });
        toast.present();
    }

    async saveModal() {
        const modal = await this.modalCtl.create({
            component: SaveModalPage,
            cssClass: 'half-modal'
        });
        return await modal.present();
    }

}
