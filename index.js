let inquirer = require('inquirer');
let qr = require('qr-image');
let fs = require('fs');

let questions = [
    {
        type: 'input',
        name: 'url',
        message: 'Enter a URL to convert to a QR code image',
    }
];

inquirer.prompt(questions).then(answers => {
    let qr_img = qr.imageSync(answers.url, {type: 'png'});

    fs.writeFileSync('qr_img.png', qr_img);
    console.log("qr_img generated");

    fs.writeFileSync('URL.txt', answers.url);
    console.log("URL.txt generated");
}).catch(error => {
    console.error('Error occurred:', error);
});