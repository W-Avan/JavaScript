'use strict';

const fs = require('fs');

var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用Stream写入二进制数据...\n');
ws1.write('END');
ws1.end();

console.log('done');
