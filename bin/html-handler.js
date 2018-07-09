const fs = require('fs');
const path = require('path');

const CONFIG = require('./../database/config.json');
const MODE = process.env.MODE;

CONFIG.forEach(function(item, index) {
    let src;
    let pageName = item.pageName;
    let htmlPath;
    let content;

    switch (MODE) {
        case 'DEVELOPMENT':
            src = item.devSrc;
            break;
        case 'PRODUCTION':
            src = item.prodSrc;
            break;
        default:
            throw new Error('不存在此模式!');
    }

    htmlPath = path.resolve(__dirname, './../dist/pages/' + pageName + '/index.html');
    content = fs.readFileSync(htmlPath, 'utf-8');

    // 替换特殊标记
    content = content.replace(/[SRC]/g, src);
    content = content.replace(/[PAGE]/g, pageName);
    fs.writeFileSync(htmlPath, content, 'utf-8');
});
