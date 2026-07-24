const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
let changed = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    content = content.replace(/LucSar/g, 'LuSam');
    content = content.replace(/lucsar/g, 'lusam');
    content = content.replace(/LUCSAR/g, 'LUSAM');
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
        changed++;
    }
});
console.log(`Successfully updated ${changed} files.`);
