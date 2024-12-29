/**
 * Base Ori By Siputzx Production 
 * Created On 22/2/2024
 * Contact Me on https://siputzx.github.io
 * Supported By Gpt Assistant 
*/

const chalk = require("chalk")
const fs = require("fs")

global.owner = ["6288297877862"]
global.botname = '𝙎𝙖𝙨𝙪𝙠𝙚' //ur bot name
global.ownername = "𝗙𝗮𝗿𝗶𝘀 𝗗𝗲𝘃𝗶𝗰𝗲" //ur owner name
global.botname = "𝙎𝙖𝙨𝙪𝙠𝙚"
global.ownernomer = "6288297877862" //ur owner number2
//Sosmed 1
global.ytname = "YT: faris ofcc" //ur yt chanel name
global.socialm = "GitHub: Farisofc" //ur github or insta name
//Fake
global.location = "Indonesia" //ur location
//watermark 
global.packname = 'Di Buat Oleh'
global.author = '𝗙𝗮𝗿𝗶𝘀 𝗗𝗲𝘃𝗶𝗰𝗲'
global.foter1 = 'Simpel Bot Case'
global.foter2 = 'Created By 𝗙𝗮𝗿𝗶𝘀 𝗗𝗲𝘃𝗶𝗰𝗲'
global.foter3 = '𝗙𝗮𝗿𝗶𝘀 𝗗𝗲𝘃𝗶𝗰𝗲 Production'
global.foter4 = '𝗙𝗮𝗿𝗶𝘀 𝗗𝗲𝘃𝗶𝗰𝗲 Terverifikasi Oleh WhatsApp'
global.idch = ''
global.thumb = 'https://telegra.ph/file/b09a6baab737808f5fe48.jpg'
//PREFIX
global.prefa = ['','!','.','#','&']
//Fake
global.themeemoji = '🪀'
global.xzn = 'pepek';
global.wm = "Faris.com"
global.packname = "Sticker By Faris"
// => PTERODACTYL
global.domain = '-' // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
//media target
global.thumb = { url: 'https://telegra.ph/file/c2e84a4776ee6c47aa3a5.jpg' }//ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus Owner',
    private: 'Khusus Private',
    group: 'Khusus Group',
    wait: 'Sebentar..',
}
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});
