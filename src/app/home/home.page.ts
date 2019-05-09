import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
declare var CodeMirror: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
    codeText = '';
    runConsole = '';
    editor: any;
    // 设置本页console使用其他自定义关键词代替,以下要使用console的地方只能使用iConsole.
    iConsole = console ? {log: console.log} : {log: () => {}};
    @ViewChild('editor') editorContent: ElementRef;
    @ViewChild('content') content: ElementRef;
    @ViewChild('editorResult') editorResult: ElementRef;
    constructor() {}

    ngAfterViewInit(): void {
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
        smartIndent: true
      });
      this.content.nativeElement.querySelector('.CodeMirror').style.height = '70%';
      this.content.nativeElement.querySelector('.CodeMirror').style.fontFamily = '"Consolas", "Arial", "微软雅黑"';
    }

    showResultElement(e?) {
      this.codeText = this.editor.getValue();
      this.iConsole.log( this.codeText);
      if (!this.codeText) { return; }
      if (e === 'RUN') {
        setTimeout(() => {
          this.runCode();
        }, 100);
      }
    }

    runCode() {
      // 把console.log转换为直接打印到result中
    //   this.runConsole = `
    //     var editorResult = document.getElementById('editorResult');
    //     editorResult.innerText = ''
    //     console.log = (...str) => {
    //       var node = document.createElement('div');
    //       node.setAttribute('style', 'border-bottom: 1px rgb(235, 232, 232) solid;font-size:14px;padding:5px 5px;');
    //       var textNode = ''
    //       textNode = document.createTextNode([...str].join('  '))
    //       node.appendChild(textNode)
    //       editorResult.appendChild(node);
    //     };
    //   `;

    //   let runcode: any;
    //   runcode = new Function(this.runConsole + this.codeText);
    //   runcode();

      const editorResult = this.editorResult.nativeElement;
      editorResult.innerText = '';
      const node = document.createElement('div');
      node.setAttribute('style', 'border-bottom: 1px rgb(235, 232, 232) solid;font-size:14px;padding:5px 5px;');
    //   let consoleText: any;
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

    clearResult() {
        const editorResult: HTMLElement = document.getElementById('editorResult');
        editorResult.innerText = '';
    }
}
