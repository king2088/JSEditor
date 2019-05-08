import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
declare var ace: any;
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
    @ViewChild('Editor') editorContent: ElementRef;
    // @ViewChild('Result') editorResult: ElementRef;
    constructor() {}

    ngAfterViewInit(): void {
      this.editor = ace.edit('editor');
      this.editor.setTheme('ace/theme/monokai');
      this.editor.session.setMode('ace/mode/javascript');
      this.editor.setOptions({
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        // 是否显示行数
        showLineNumbers: true,
        showGutter: true,
        displayIndentGuides: false,
        fontSize: 14,
        fixedWidthGutter: true,
        autoScrollEditorIntoView: true,
        // maxLines: Infinity
      });
    }

    showResultElement(e?) {
      this.codeText = this.editorContent.nativeElement.querySelector('.ace_scroller').innerText;
      if (!this.codeText) { return; }
      if (e === 'RUN') {
        setTimeout(() => {
          this.runCode();
        }, 100);
      }
    }

    runCode() {
      // 把console.log转换为直接打印到result中
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

      let runcode: any;
      runcode = new Function(this.runConsole + this.codeText);
      runcode();
    }

    clearResult() {
        const editorResult: HTMLElement = document.getElementById('editorResult');
        editorResult.innerText = '';
    }
}
