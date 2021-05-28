const fs = require('fs');

let content = fs.promises.readFile("./public/atom.xml").then(buffer => {
    let rawText = buffer.toString();
    let fixedText = rawText.split("https://picorims.github.io/").join("https://picorims.github.io/wav2bar-blog/public/");

    fs.promises.writeFile("./public/atom.xml", fixedText).then(() => {console.log("done! atom.xml has been fixed.")});
});