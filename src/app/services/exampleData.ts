import { Injectable } from '@angular/core';

@Injectable()

export class ExampleData {
    localExample: any = [
        {
            name_af: 'Hello World',
            name_ar: 'Hello World',
            name_hy: 'Hello World',
            name_be: 'Hello World',
            name_cs: 'Hello World',
            name_da: 'Hello World',
            name_fr: 'Hello World',
            name_de: 'Hello World',
            name_it: 'Hello World',
            name_ja: 'Hello World',
            name_ko: 'Hello World',
            name_ru: 'Hello World',
            name_es: 'Hello World',
            name_sv: 'Hello World',
            name_th: 'Hello World',
            name_uk: 'Hello World',
            name_vi: 'Hello World',
            name_zh: 'Hello World',
            name_en: 'Hello World',
            code: `function helloWorld(){
    alert('Hello World')
};
helloWorld()
`
        },
        {
            name_af: 'Krijg de huidige tijd',
            name_ar: 'الحصول على الوقت الحالي',
            name_hy: 'Ստացեք ժամանակ',
            name_be: 'Атрымаць бягучы час',
            name_cs: 'Získejte aktuální čas',
            name_da: 'Få den aktuelle tid',
            name_fr: 'Obtenir l\'heure actuelle',
            name_de: 'Aktuelle Uhrzeit abrufen',
            name_it: 'Ottieni l\'ora corrente',
            name_ja: '現在時刻を取得する',
            name_ko: '현재 시간 가져 오기',
            name_ru: 'Получить текущее время',
            name_es: 'Obtener hora actual',
            name_sv: 'Få aktuell tid',
            name_th: 'รับเวลาปัจจุบัน',
            name_uk: 'Отримати поточний час',
            name_vi: 'Nhận thời gian hiện tại',
            name_zh: '获取当前时间',
            name_en: 'Get current time',
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
        },
        {
            name_af: 'Variabelen en matrices',
            name_ar: 'المتغيرات والمصفوفات',
            name_hy: 'Փոփոխականներ եւ զանգվածներ',
            name_be: 'Зменныя і масівы',
            name_cs: 'Proměnné a pole',
            name_da: 'Variabler og arrayer',
            name_fr: 'Variables et tableaux',
            name_de: 'Variablen und Arrays',
            name_it: 'Variabili e array',
            name_ja: '変数と配列',
            name_ko: '변수 및 배열',
            name_ru: 'Переменные и массивы',
            name_es: 'Variables y matrices',
            name_sv: 'Variabler och arrays',
            name_th: 'ตัวแปรและอาร์เรย์',
            name_uk: 'Змінні та масиви',
            name_vi: 'Biến và mảng',
            name_zh: '变量和数组',
            name_en: 'Variables and arrays',
            code: `var x;
console.log(x)
x=5
console.log(x)
x='this is string'
console.log(x)
var arr = []
arr[0]=1
arr[1]=2
arr[2]=3
arr[3]=4
console.log(arr)
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
`
        },
        {
            name_af: 'Maken en gebruiken van objecten',
            name_ar: 'إنشاء كائن واستخدامه',
            name_hy: 'Օբյեկտի ստեղծում եւ օգտագործում',
            name_be: 'Стварэнне аб\'екта і выкарыстанне',
            name_cs: 'Vytváření a používání objektů',
            name_da: 'Oprettelse og brug af objekt',
            name_fr: 'Création et utilisation d\'objets',
            name_de: 'Objekterstellung und -nutzung',
            name_it: 'Creazione e uso di oggetti',
            name_ja: 'オブジェクトの作成と使用',
            name_ko: '객체 생성 및 사용',
            name_ru: 'Создание и использование объекта',
            name_es: 'Creación y uso de objetos.',
            name_sv: 'Objekt skapande och användning',
            name_th: 'การสร้างและการใช้วัตถุ',
            name_uk: 'Створення та використання об\'єктів',
            name_vi: 'Tạo và sử dụng đối tượng',
            name_zh: '对象创建与使用',
            name_en: 'Object creation and use',
            code: `var obj = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
obj.firstName = 'Tony'
obj['birthday'] = '1990-01-05'
console.log(JSON.stringify(obj))
console.log('lastName',obj.lastName)
console.log('eyeColor',obj['eyeColor'])
`
        },
        {
            name_af: 'Gebruik van JavaScript-functies',
            name_ar: 'استخدام وظائف جافا سكريبت',
            name_hy: 'JavaScript գործառույթների օգտագործումը',
            name_be: 'Выкарыстоўвайце функцыю JavaScript',
            name_cs: 'Využití funkcí JavaScriptu',
            name_da: 'Brug af JavaScript-funktioner',
            name_fr: 'Utilisation des fonctions JavaScript',
            name_de: 'Verwendung von JavaScript-Funktionen',
            name_it: 'Uso delle funzioni JavaScript',
            name_ja: 'JavaScript関数の使用',
            name_ko: 'JavaScript 함수 사용',
            name_ru: 'Использование функций JavaScript',
            name_es: 'Uso de funciones de JavaScript',
            name_sv: 'Användning av JavaScript-funktioner',
            name_th: 'การใช้ฟังก์ชั่น JavaScript',
            name_uk: 'Використання функцій JavaScript',
            name_vi: 'Sử dụng các hàm JavaScript',
            name_zh: 'JavaScript函数的使用',
            name_en: 'Use of JavaScript functions',
            code: `let fun
function aXb(a, b) {
    return a * b;
}
fun = aXb(10, 2)
console.log(fun)
var obj = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
fun = obj.fullName();
console.log(fun)
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}
var x = new myFunction("John","Doe");
fun = x.firstName;
console.log(fun)
            `
        },
        {
            name_af: 'JavaScript-array deduplicatie',
            name_ar: 'جافا سكريبت مجموعة إلغاء البيانات المكررة',
            name_hy: 'JavaScript array deduplication',
            name_be: 'JavaScript дедупликации масіва',
            name_cs: 'JavaScript deduplikace',
            name_da: 'JavaScript-array deduplication',
            name_fr: 'Déduplication de tableaux JavaScript',
            name_de: 'Deduplizierung von JavaScript-Arrays',
            name_it: 'Deduplicazione di array JavaScript',
            name_ja: 'JavaScript配列の重複排除',
            name_ko: '자바 스크립트 배열 중복 제거',
            name_ru: 'Дедупликация массива JavaScript',
            name_es: 'Desduplicación de matriz de JavaScript',
            name_sv: 'JavaScript-array deduplication',
            name_th: 'การทำซ้ำอาร์เรย์ JavaScript',
            name_uk: 'Дедуплікація масиву JavaScript',
            name_vi: 'Sao chép mảng JavaScript',
            name_zh: 'JavaScript数组去重',
            name_en: 'JavaScript array deduplication',
            code: `function unique1(arr) {
    return Array.from(new Set(arr))
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique1(arr))

function unique2(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array .indexOf(arr[i]) === -1) {
            array .push(arr[i])
        }
    }
    return array;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique2(arr))
`
        },
        {
            name_af: 'JavaScript-bellen sorteren',
            name_ar: 'جافا سكريبت فقاعة الفرز',
            name_hy: 'JavaScript պղպջակների դասավորում',
            name_be: 'JavaScript пузырьковый сартавання',
            name_cs: 'JavaScript třídění tříd',
            name_da: 'JavaScript boblesortering',
            name_fr: 'Tri de bulles JavaScript',
            name_de: 'JavaScript-Blasensortierung',
            name_it: 'Ordinamento di bolle JavaScript',
            name_ja: 'JavaScriptバブルソート',
            name_ko: 'JavaScript 버블 정렬',
            name_ru: 'JavaScript пузырьковая сортировка',
            name_es: 'Clasificación de burbujas de JavaScript',
            name_sv: 'JavaScript bubblesortering',
            name_th: 'การเรียงลำดับฟอง JavaScript',
            name_uk: 'JavaScript сортування бульбашок',
            name_vi: 'Sắp xếp bong bóng JavaScript',
            name_zh: 'JavaScript冒泡排序',
            name_en: 'JavaScript bubble sorting',
            code: `Array.prototype.bulesort = function () {
let arr = this,
    len = arr.length;
for (let outer = len; outer >= 2; outer--) {
    for (let inner = 0; inner <= outer - 1; inner++) {
        if (arr[inner] > arr[inner + 1]) {
            [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]];
        }
    }
}
    return arr;
}
[3, 4, 2,1].bulesort()//[1,2,3,4]
`
        },
        {
            name_af: 'JavaScript-sommatie',
            name_ar: 'جافا سكريبت تلخيص',
            name_hy: 'JavaScript ամփոփում',
            name_be: 'сума JavaScript',
            name_cs: 'Souhrn JavaScript',
            name_da: 'JavaScript summation',
            name_fr: 'Sommation JavaScript',
            name_de: 'JavaScript-Summierung',
            name_it: 'Sommatoria JavaScript',
            name_ja: 'JavaScriptのまとめ',
            name_ko: 'JavaScript 합계',
            name_ru: 'JS суммирование',
            name_es: 'JS summation',
            name_sv: 'JS summering',
            name_th: 'การรวม JavaScript',
            name_uk: 'Підсумок JavaScript',
            name_vi: 'Tóm tắt JavaScript',
            name_zh: 'JavaScript求和',
            name_en: 'JavaScript summation',
            code: `// ES6
let sumArray = [1, 2, 3, 4].reduce((prev,cur)=>{
    return prev+cur;
},0); //10
console.log(sumArray)
// ES5
function sum(arr){
    if (arr.length==0){
        return 0;
    } else if (arr.length == 1){
        return arr[0];
    }else{
        return arr[0]+sum(arr.slice(1));
    }
}
let sumResult = sum([1, 2, 3, 4]);//10
console.log(sumResult)
`
        },
        {
            name_af: 'Generators',
            name_ar: 'Generators',
            name_hy: 'JavaScript Generators',
            name_be: 'Generators',
            name_cs: 'Generators',
            name_da: 'Generators',
            name_fr: 'Generators',
            name_de: 'Generators',
            name_it: 'Generators',
            name_ja: 'Generators',
            name_ko: 'Generators',
            name_ru: 'Generators',
            name_es: 'Generators',
            name_sv: 'Generators',
            name_th: 'Generators',
            name_uk: 'Generators',
            name_vi: 'Generators',
            name_zh: 'Generators(生成器)',
            name_en: 'JavaScript Generators',
            code: `function* greeter() {
    yield 'Hi';
    yield 'How are you?';
    yield 'Bye';
}
const greet = greeter();
console.log(greet.next().value);
// 'Hi'
console.log(greet.next().value);
// 'How are you?'
console.log(greet.next().value);
// 'Bye'
console.log(greet.next().value);
// undefined
`
        },
        {
            name_af: 'Promises',
            name_ar: 'Promises',
            name_hy: 'JavaScript Promises',
            name_be: 'Promises',
            name_cs: 'Promises',
            name_da: 'Promises',
            name_fr: 'Promises',
            name_de: 'Promises',
            name_it: 'Promises',
            name_ja: 'Promises',
            name_ko: 'Promises',
            name_ru: 'Promises',
            name_es: 'Promises',
            name_sv: 'Promises',
            name_th: 'Promises',
            name_uk: 'Promises',
            name_vi: 'Promises',
            name_zh: 'Promises异步',
            name_en: 'JavaScript Promises',
            code: `const myPromise = new Promise(function(res, rej) {
setTimeout(function(){
    if (Math.random() < 0.9) {
    return res('Hooray!');
    }
    return rej('Oh no!');
}, 1000);
});
myPromise.then(function(data) {
    console.log('Success: ' + data);
}).catch(function(err) {
    console.log('Error: ' + err);
});
`
        },
        {
            name_af: 'Async/Await',
            name_ar: 'Async/Await',
            name_hy: 'JavaScript Async/Await',
            name_be: 'Async/Await',
            name_cs: 'Async/Await',
            name_da: 'Async/Await',
            name_fr: 'Async/Await',
            name_de: 'Async/Await',
            name_it: 'Async/Await',
            name_ja: 'Async/Await',
            name_ko: 'Async/Await',
            name_ru: 'Async/Await',
            name_es: 'Async/Await',
            name_sv: 'Async/Await',
            name_th: 'Async/Await',
            name_uk: 'Async/Await',
            name_vi: 'Async/Await',
            name_zh: 'Async/Await',
            name_en: 'JavaScript Async/Await',
            code: `const greeter = new Promise((res, rej) => {
    setTimeout(() => res('Hello world!'), 2000);
})
async function myFunc() {
    const greeting = await greeter;
    console.log(greeting);
}
myFunc();
`
        },
        {
            name_af: 'JavaScript Ondiep exemplaar',
            name_ar: 'JavaScript نسخة ضحلة',
            name_hy: 'JavaScript Ներկառուցված օրինակը',
            name_be: 'JavaScript Малая копія',
            name_cs: 'JavaScript Mělká kopie',
            name_da: 'JavaScript Lille kopi',
            name_fr: 'JavaScript Copie peu profonde',
            name_de: 'JavaScript Flache Kopie',
            name_it: 'JavaScript Copia superficiale',
            name_ja: 'JavaScript 浅いコピー',
            name_ko: 'JavaScript 얕은 사본',
            name_ru: 'JavaScript Мелкая копия',
            name_es: 'JavaScript Copia superficial',
            name_sv: 'JavaScript Grunt kopia',
            name_th: 'JavaScript คัดลอกตื้น',
            name_uk: 'JavaScript Дрібні копії',
            name_vi: 'JavaScript  Bản sao nông',
            name_zh: 'JavaScript浅拷贝',
            name_en: 'JavaScript Shallow copy',
            code: `var person = {
    name: 'tt',
    age: 18,
    friends: ['oo', 'cc', 'yy']
}

function shallowCopy(source) {
    if (!source || typeof source !== 'object') {
        throw new Error('error');
    }
    var targetObj = source.constructor === Array ? [] : {};
    for (var keys in source) {
        if (source.hasOwnProperty(keys)) {
            targetObj[keys] = source[keys];
        }
    }
    return targetObj;
}

var p1 = shallowCopy(person);

console.log(p1)
console.log(JSON.stringify(p1))
`
        },
        {
            name_af: 'JavaScript Diepe kopie',
            name_ar: 'JavaScript نسخة عميقة',
            name_hy: 'JavaScript Deep պատճենը',
            name_be: 'JavaScript глыбокая копія',
            name_cs: 'JavaScript Hluboká kopie',
            name_da: 'JavaScript Deep copy',
            name_fr: 'JavaScript Copie profonde',
            name_de: 'JavaScript Tiefe Kopie',
            name_it: 'JavaScript Copia profonda',
            name_ja: 'JavaScript ディープコピー',
            name_ko: 'JavaScript 딥 카피',
            name_ru: 'JavaScript Глубокая копия',
            name_es: 'JavaScript Copia profunda',
            name_sv: 'JavaScript Deep copy',
            name_th: 'JavaScript สำเนาลึก',
            name_uk: 'JavaScript Глибока копія',
            name_vi: 'JavaScript Bản sao sâu',
            name_zh: 'JavaScript深拷贝',
            name_en: 'JavaScript deep copy',
            code: `function deepCopy(source){
if(!source || typeof source !== 'object'){
    throw new Error('error');
}
var targetObj = source.constructor === Array ? [] : {};
for(var keys in source){
    if(source.hasOwnProperty(keys)){
        if(source[keys] && typeof source[keys] === 'object'){
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepCopy(source[keys]);
        }else{
        targetObj[keys] = source[keys];
        }
    }
}
return targetObj;
}
var obj1 = {
    arr: [1, 2, 3],
    key: {
        id: 22
    },
    func: function() {
        console.log(123)
    }
}

var obj2 = deepCopy(obj1);

obj1.arr.push(4);

console.log(obj1.arr)
console.log(obj2.arr)
console.log(obj1.key === obj2.key)
console.log(obj1.func === obj2.func)
`
        },
        {
            name_af: 'JavaScript Regular expression',
            name_ar: 'JavaScript Regular expression',
            name_hy: 'JavaScript Regular expression',
            name_be: 'JavaScript Regular expression',
            name_cs: 'JavaScript Regular expression',
            name_da: 'JavaScript Regular expression',
            name_fr: 'JavaScript Regular expression',
            name_de: 'JavaScript Regular expression',
            name_it: 'JavaScript Regular expression',
            name_ja: 'JavaScript Regular expression',
            name_ko: 'JavaScript 정규식',
            name_ru: 'JavaScript Regular expression',
            name_es: 'JavaScript Regular expression',
            name_sv: 'JavaScript Regular expression',
            name_th: 'JavaScript การแสดงออกปกติ',
            name_uk: 'JavaScript Regular expression',
            name_vi: 'JavaScript Biểu thức chính quy',
            name_zh: 'JavaScript正则表达式',
            name_en: 'JavaScript Regular expression',
            code: `var pattern = /^[a-zA-Z][a-zA-Z0-9_-]{3,15}$/;
console.log("ifat3 ： "+pattern.test('ifat3'));
console.log("Ifat3 ： "+pattern.test('Ifat3'));
console.log("ke30 ： "+pattern.test('ke30'));
console.log("30ke ： "+pattern.test('30ke'));
console.log("ke3 ： "+pattern.test('ke3'));
console.log("ke30@ ： "+pattern.test('ke30@'));
console.log("ke30ke30ke30ke30ke30 ： "+pattern.test('ke30ke30ke30ke30ke30'));
var pwdPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
console.log("iFat3#："+pwdPattern.test("iFat3#"));
var datePattern = /^((19[2-9]\d{1})|(20((0[0-9])|(1[0-8]))))\-((0?[1-9])|(1[0-2]))\-((0?[1-9])|([1-2][0-9])|30|31)$/;
console.log(datePattern.test("1923-3-18"));
var emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
console.log(emailPattern.test('zh30ke@163.com'));
`
        },
        {
            name_af: 'JavaScript prototype',
            name_ar: 'JavaScript prototype',
            name_hy: 'JavaScript prototype',
            name_be: 'JavaScript prototype',
            name_cs: 'JavaScript prototype',
            name_da: 'JavaScript prototype',
            name_fr: 'JavaScript prototype',
            name_de: 'JavaScript prototype',
            name_it: 'JavaScript prototype',
            name_ja: 'JavaScript prototype',
            name_ko: 'JavaScript 프로토 타입 체인 상속',
            name_ru: 'JavaScript prototype',
            name_es: 'JavaScript prototype',
            name_sv: 'JavaScript prototype',
            name_th: 'JavaScript การสืบทอดสายโซ่ต้นแบบ',
            name_uk: 'JavaScript prototype',
            name_vi: 'JavaScript Kế thừa chuỗi nguyên mẫu',
            name_zh: 'JavaScript原型链继承',
            name_en: 'JavaScript prototype',
            code: `function SuperType() {
    this.name = 'tt';
}
SuperType.prototype.sayName = function() {
    return this.name
}

function SubType() {
    this.name = 'oo';
}
SubType.prototype = new SuperType()

var instance = new SubType()
let log
log = instance.sayName() // oo
console.log(log)
log = instance instanceof SubType // true
console.log(log)
log = instance instanceof SuperType // ture
console.log(log)
`
        },
        {
            name_af: 'JavaScript throttle',
            name_ar: 'JavaScript throttle',
            name_hy: 'JavaScript throttle',
            name_be: 'JavaScript throttle',
            name_cs: 'JavaScript throttle',
            name_da: 'JavaScript throttle',
            name_fr: 'JavaScript throttle',
            name_de: 'JavaScript throttle',
            name_it: 'JavaScript throttle',
            name_ja: 'JavaScript throttle',
            name_ko: 'JavaScript 스로틀 밸브',
            name_ru: 'JavaScript throttle',
            name_es: 'JavaScript throttle',
            name_sv: 'JavaScript throttle',
            name_th: 'JavaScript วาล์วปีกผีเสื้อ',
            name_uk: 'JavaScript throttle',
            name_vi: 'JavaScript Van tiết lưu',
            name_zh: 'JavaScript节流阀',
            name_en: 'JavaScript throttle',
            code: `function throttle( func, wait ) {
    let timer
    function throttled( ...args ) {
        const self = this
        if ( timer == null ) {
            invokeFunc()
            addTimer()
        }
        function addTimer() {
            timer = setTimeout( () => {
                clearTimer()
            }, wait )
        }
        function invokeFunc() {
            func.apply( self, args )
        }
    }
    return throttled

    function clearTimer() {
        clearTimeout( timer )
        timer = null
    }
}
`
        }
// 'af', // 荷兰语
// 'ar', // 阿拉伯语
// 'hy', // 亚美尼亚
// 'be', // 白俄罗斯
// 'zh', // 中国
// 'cs', // 捷克
// 'da', // 丹麦
// 'en', // 英语
// 'fr', // 法语
// 'de', // 德国
// 'it', // 意大利
// 'ja', // 日语
// 'ko', // 韩语
// 'ru', // 俄罗斯
// 'es', // 西班牙
// 'sv', // 瑞典
// 'th', // 泰国
// 'uk', // 乌克兰
// 'vi', // 越南
    ];
}
