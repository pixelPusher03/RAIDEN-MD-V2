/**
 * Base Ori By Siputzx Production 
 * Created On 22/2/2024
 * Contact Me on https://siputzx.github.io
 * Supported By Gpt Assistant 
*/

const chalk = require("chalk")
const fs = require("fs")

global.owner = ["256709824720"]
global.botname = '✫𝙍𝘼𝙄𝘿𝙀𝙉 𝙈𝘿 𝙑2⌘' //ur bot name
global.ownername = "𝑇ℎ𝑒 𝐷𝑒𝑣𝑒𝑙𝑜𝑝𝑒𝑟03" //ur owner name
global.botname = "✫𝙍𝘼𝙄𝘿𝙀𝙉 𝙈𝘿 𝙑2⌘"
global.ownernomer = "256709824720" //ur owner number2
//Sosmed 1
global.ytname = "YT: The Developer03" //ur yt chanel name
global.socialm = "GitHub: byte-smith03" //ur github or insta name
//Fake
global.location = "Uganda" //ur location
//watermark 
global.packname = 'Raiden'
global.author = '𝑇ℎ𝑒 𝐷𝑒𝑣𝑒𝑙𝑜𝑝𝑒𝑟03'
global.foter1 = 'Simpel Bot Case'
global.foter2 = 'Created By ✫𝙍𝘼𝙄𝘿𝙀𝙉 𝙈𝘿 𝙑2⌘'
global.foter3 = '𝑇ℎ𝑒 𝐷𝑒𝑣𝑒𝑙𝑜𝑝𝑒𝑟03 Production'
global.foter4 = '✫𝙍𝘼𝙄𝘿𝙀𝙉 𝙈𝘿 𝙑2⌘ Terverifikasi Oleh WhatsApp'
global.idch = ''
global.thumb = 'https://i.imghippo.com/files/trsB1945LRg.png'
//PREFIX
global.prefa = ['','!','.','#','&']
//Fake
global.themeemoji = '🪀'
global.xzn = 'pepek';
global.wm = "Raiden.com"
global.packname = "Sticker By Raiden"
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
