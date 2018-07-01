let fs = require("fs");
let path = require("path");

if (process.env.MODE === "PRODUCTION") {
    let content = fs.readFileSync(path.resolve(__dirname, "./../index.html"), "utf-8");
    content = content.replace(/\.\/\.\.\/dist\//g, "https://weijietao.github.io/wjt20/dist/");
    fs.writeFileSync(path.resolve(__dirname, "./../index.html"), content, "utf-8");
}
