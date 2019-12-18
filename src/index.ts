import doSomething from '@/test1';
import {text} from '@/ts/index';
import {abc} from '@pages/regessit.ts';
import url from 'url';



console.log('url:',url);
console.log(url.parse(window.location.href));

const num = doSomething(20);

console.log(num,text,abc());
