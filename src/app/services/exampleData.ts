import { Injectable } from '@angular/core';

@Injectable()
export class ExampleData {
    localExample: any = [
        {
            name_cn: '获取当前日期',
            name_en: 'Get current date time',
            code: `function getCurrentDate(){
    let date = new Date()
    console.log('data',date);
    console.log('toDateString', date.toDateString());
    console.log('toISOString', date.toISOString());
    console.log('getFullYear', date.getFullYear());
    console.log('getMonth', date.getMonth());
    console.log('getDate', date.getDate());
    console.log('getHours', date.getHours());
    console.log('getMinutes', date.getMinutes());
    console.log('getSeconds', date.getSeconds());
};
getCurrentDate()
`
        }
    ];
}
