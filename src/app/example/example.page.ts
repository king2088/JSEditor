import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleData } from '../services/exampleData';

@Component({
  selector: 'app-example',
  templateUrl: 'example.page.html',
  styleUrls: ['example.page.scss']
})
export class ExamplePage {
  private list: any;
  constructor(
      private exampleList: ExampleData,
      private router: Router
  ) {
      this.list = this.exampleList.localExample;
  }

  goEditor(code) {
    this.router.navigate(['/home'], {
        queryParams: {
            code
          }
    });
  }
}
