require('./config')
const { default: makeWaSocket, downloadContentFromMessage, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const { modul } = require('./module')
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, PhoneNumber, process, ms, speed, syntaxerror, util, ytdl, openai } = modul
const { exec, spawn, execSync } = child_process
const { Configuration, OpenAIApi } = openai

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const moment = require('moment-timezone')
const { clockString, parseMention, 
formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, jsonformat, format, reSize, generateProfilePicture, getRandom, fetchBuffer, } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const user = JSON.parse(fs.readFileSync('./user.json'))

module.exports = farisofc = async (farisofc, m, msg, chatUpdate, store) => {
try {
const { type, quotedMsg, mentioned, now, fromMe } = m
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
const messagesC = pes.slice(0).trim()
const content = JSON.stringify(m.message)
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await farisofc.decodeJid(farisofc.user.id)
  const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const XeonTheDeveloper = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const isGroup = from.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = sender.split('@')[0]
const groupMetadata = m.isGroup ? await farisofc.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = user.includes(sender)
const banUser = await farisofc.fetchBlocklist()
const isBanned = banUser ? banUser.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
const isEval = body.startsWith('=>')
const userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
//Const
const { pipeline } = require('stream')  
const { util, promisify } = require("util");  
const yts = require ("yt-search")
const { exec, spawn, execSync } = require("child_process")
const { sticker5 } = require('./lib/stickerr.js')
const uploadImage = require('./lib/uploadImage')
//TIME
const fs = require("fs")
const os = require('os')
const fg = require('api-dylux')
const totalFitur = () =>{
            var mytext = fs.readFileSync("./case.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
//Premium
const prem = JSON.parse(fs.readFileSync("./premium.json"))
//Tanggal
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    //Time
let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wibh = moment.tz('Asia/Jakarta').format('HH')
const wibm = moment.tz('Asia/Jakarta').format('mm')
const wibs = moment.tz('Asia/Jakarta').format('ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')

    if(time2 < "23:59:00"){
var Ucapanwaktu = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var Ucapanwaktu = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var Ucapanwaktu = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var Ucapanwaktu = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var Ucapanwaktu = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var Ucapanwaktu = `Good Morning 🌄`
 } 
 //Function Loading
async function loading () {
var nedd = [
"ʟᴏᴀᴅɪɴɢ...",
"ʟᴏᴀᴅɪɴɢ...",
"《 🕛 》",
"《 🕐 》",
"《 🕑 》",
"《 🕒 》",
"《 🕓 》",
"《 🕔 》",
"《 🕕 》",
"《 🕖 》",
"《 🕗 》",
"《 🕘 》",
"《 🕙 》",
"《 🕚 》",    
"《 🕛 》",
"ʟᴏᴀᴅɪɴɢ  ᴄᴏᴍᴘʟᴇᴛᴇ..."
]
let { key } = await farisofc.sendMessage(m.chat, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < nedd.length; i++) {
/*await delay(10)*/
await farisofc.sendMessage(m.chat, {text: nedd[i], edit: key });
}
}
//Buat Pushkontak
const contacts = JSON.parse(fs.readFileSync("./contacts.json"))
const isContacts = contacts.includes(sender)

//premium
const isPremium = prem.includes(sender)

//Fake Reply
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}

const reply = (teks) => {
farisofc.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : fdoc })
}
if (isCmd && isBanned) {
return
}   
let list = []
for (let i of owner) {
list.push({
displayName: await farisofc.getName(i),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await farisofc.getName(i)}\nFN:${await farisofc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}
//chat counter (console log)
if (isCmd && m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); 
}
if (isCmd && !m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); 
}
if (isCmd && !isUser) {
user.push(sender)
fs.writeFileSync('./user.json', JSON.stringify(user, null, 2))
}
farisofc.sendPresenceUpdate('unavailable', from)
//Sticker Reply
const farisstickowner = () => {
        let farisstickrep = fs.readFileSync('./own.webp')
        farisofc.sendMessage(from, { sticker: farisstickrep }, { quoted: m })
        }
        const farissticktag = () => {
        let farisstickrep = fs.readFileSync('./own.webp')
        farisofc.sendMessage(from, { sticker: farisstickrep }, { quoted: m })
        }
        //Public/Self
if (!farisofc.public) {
if (!m.key.fromMe) return
}
//Function
async function sendfarisofcMessage(chatId, message, options = {}){
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await farisofc.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
    if (budy.match("@256709824720")) {
        farissticktag()
    }
        async function ssweb(url, device = "desktop") {
      return new Promise((resolve, reject) => {
        const base = "https://www.screenshotmachine.com";
        const param = {
          url: url,
          device: device,
          cacheLimit: 0,
        };
        axios({
          url: base + "/capture.php",
          method: "POST",
          data: new URLSearchParams(Object.entries(param)),
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
          .then((data) => {
            const cookies = data.headers["set-cookie"];
            if (data.data.status == "success") {
              axios
                .get(base + "/" + data.data.link, {
                  headers: {
                    cookie: cookies.join(""),
                  },
                  responseType: "arraybuffer",
                })
                .then(({ data }) => {
                  result = {
                    status: 200,
                    result: data,
                  };
                  resolve(result);
                });
            } else {
              reject({
                status: 404,
                statuses: `Link Error`,
                message: data.data,
              });
            }
          })
          .catch(reject);
      });
    }

    const downloadMp3 = async (Link) => {
      try {
        await ytdl.getInfo(Link);
        let mp3File = getRandom(".mp3");
        console.log(color("Download Audio With ytdl-core"));
        ytdl(Link, { filter: "audioonly" })
          .pipe(fs.createWriteStream(mp3File))
          .on("finish", async () => {
            await farisofc.sendMessage(
              from,
              { audio: fs.readFileSync(mp3File), mimetype: "audio/mp4" },
              { quoted: m },
            );
            fs.unlinkSync(mp3File);
          });
      } catch (err) {
        reply(`${err}`);
      }
    };



    try {
ppuser = await farisofc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://i.imghippo.com/files/trsB1945LRg.png'
}

const fkethmb = await reSize(ppuser, 300, 300)    

// menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

switch (command) {
case 'menu': {
const owned = `${owner}@s.whatsapp.net`
let tekss = `ʜɪ sɪs, ʙᴇғᴏʀᴇ ɢᴏɪɴɢ ᴛᴏ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇs ᴍᴇɴᴜ, ᴘʟᴇᴀsᴇ ʀᴇᴀᴅ ᴛʜᴇ ʀᴜʟᴇs ғᴏʀ ᴜsɪɴɢ ᴛʜᴇ ʙᴏᴛ 

╭─「 INFO BOT 」
│ʙᴏᴛ : ${botname}
│𝗦𝗽𝗲𝗲𝗱 : ${latensi.toFixed(4)} miliseconds
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗠𝗼𝗱𝗲 : ${farisofc.public ? 'Public' : `Self`}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼: ${owner}
│𝗡𝗮𝗺𝗲 : ${pushname}
│𝗧𝗼𝘁𝗮𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 : ${totalFitur()}
│ꜱᴛᴀᴛᴜꜱ : ${isOwner ? 'owner' : 'user'}
│ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│𝗧𝗶𝗺𝗲 : ${xtime}
│𝗗𝗮𝘁𝗲 : ${xdate}
╰━━━━━━━━━━━━━━━━

╭─「 𝗟𝗶𝘀𝘁 𝗺𝗲𝗻𝘂 」
│${prefix}allmenu
│${prefix}menu
│*ᴘᴏᴡᴇʀᴇᴅ ʙʏ : The Developer03*
╰━━━━━━━━━━━━━━━━
`
//throw listMessage.sections[0].rows
farisofc.sendMessage(m.chat, {
text: tekss,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: 'Raiden Md V2',
thumbnailUrl: 'https://i.imghippo.com/files/trsB1945LRg.png',
sourceUrl: "https://whatsapp.com/channel/0029Va7qmJ4LNSa4HAXqg10u",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:m})
await farisofc.sendMessage(m.chat, {audio: fs.readFileSync('./nj.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case 'public': {
if (!isOwner) return mess.owner
farisofc.public = true
reply('*Successful in Changing To Public Usage*')
}
break
case 'self': {
if (!isOwner) return mess.owner
farisofc.public = false
reply('*Successful in Changing To Self Usage*')
}
break

   case 'spotify':{
        if (!text) return reply(`*Please enter a song name*`)
    try {
        const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(text)}`
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log('Error searching for song:', response.statusText)
            return reply('Error searching for song')
        }
        const data = await response.json()
        const coverimage = data.spty.results.thumbnail
        const name = data.spty.results.title
        const slink = data.spty.results.url
        const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(text)}`
        const audioResponse = await fetch(dlapi)
        if (!audioResponse.ok) {
            console.log('Error fetching audio:', audioResponse.statusText)
            return reply('Error fetching audio')
        }
        const audioBuffer = await audioResponse.buffer()
        const tempDir = os.tmpdir()
        const audioFilePath = path.join(tempDir, 'audio.mp3')
        try {
            await fs.promises.writeFile(audioFilePath, audioBuffer)
        } catch (writeError) {
            console.error('Error writing audio file:', writeError)
            return reply( 'Error writing audio file')
        }
        let doc = {
            audio: {
              url: audioFilePath
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform:  [100, 0, 100, 0, 100, 0, 100],
            fileName: "file",
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: `PLAYING TO ${name}`,
                body: botname,
                thumbnailUrl: coverimage,
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
        }        
        await farisofc.sendMessage(m.chat, doc, { quoted: m })
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return reply('*Error*')
    }
    }
    break

case 'allmenu': {
const owned = `${owner}@s.whatsapp.net`
let teks = `ʜɪ sɪs, ʙᴇғᴏʀᴇ ɢᴏɪɴɢ ᴛᴏ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇs ᴍᴇɴᴜ, ᴘʟᴇᴀsᴇ ʀᴇᴀᴅ ᴛʜᴇ ʀᴜʟᴇs ғᴏʀ ᴜsɪɴɢ ᴛʜᴇ ʙᴏᴛ 

╭─「 INFO BOT 」
│ʙᴏᴛ : ${botname}
│𝗦𝗽𝗲𝗲𝗱 : ${latensi.toFixed(4)} miliseconds
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗠𝗼𝗱𝗲 : ${farisofc.public ? 'Public' : `Self`}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼: ${owner}
│𝗡𝗮𝗺𝗲 : ${pushname}
│𝗧𝗼𝘁𝗮𝗹 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀 : ${totalFitur()}
│ꜱᴛᴀᴛᴜꜱ : ${isOwner ? 'owner' : 'user'}
│ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│𝗧𝗶𝗺𝗲 : ${xtime}
│𝗗𝗮𝘁𝗲 : ${xdate}
╰━━━━━━━━━━━━━━━━

╭───❏ Mᴀɪɴ ᴍᴇɴᴜ ❏───⊷
│⏤͟͟͞͞★ ${prefix}=>
│⏤͟͟͞͞★ ${prefix}<
│⏤͟͟͞͞★ ${prefix}vv
│⏤͟͟͞͞★ ${prefix}$
│⏤͟͟͞͞★ ${prefix}disk
│⏤͟͟͞͞★ ${prefix}uu
╰━━━━━━━━━━━━━━━━*


╭───❏ Oᴡɴᴇʀ Mᴇɴᴜ ❏───⊷
│⏤͟͟͞͞★ ${prefix}tes
│⏤͟͟͞͞★ ${prefix}get
│⏤͟͟͞͞★ ${prefix}status
│⏤͟͟͞͞★ ${prefix}setcmd
│⏤͟͟͞͞★ ${prefix}public
│⏤͟͟͞͞★ ${prefix}self
│⏤͟͟͞͞★ ${prefix}readvo
│⏤͟͟͞͞★ ${prefix}kickall
╰━━━━━━━━━━━━━━━━*


╭───❏ Cᴘᴀɴᴇʟ ᴍᴇɴᴜ ❏───⊷
│⏤͟͟͞͞★ ${prefix}1gb
│⏤͟͟͞͞★ ${prefix}2gb
│⏤͟͟͞͞★ ${prefix}3gb
│⏤͟͟͞͞★ ${prefix}4gb
│⏤͟͟͞͞★ ${prefix}5gb
│⏤͟͟͞͞★ ${prefix}6gb
│⏤͟͟͞͞★ ${prefix}7gb
│⏤͟͟͞͞★ ${prefix}8gb
│⏤͟͟͞͞★ ${prefix}9gb
│⏤͟͟͞͞★ ${prefix}unli
╰━━━━━━━━━━━━━━━━*


╭───❏ Sᴇᴀʀᴄʜ ᴍᴇɴᴜ ❏───⊷
│⏤͟͟͞͞★ ${prefix}ttsearch 
│⏤͟͟͞͞★ ${prefix}play
│⏤͟͟͞͞★ ${prefix}google
│⏤͟͟͞͞★ ${prefix}tiktokstalk
╰━━━━━━━━━━━━━━━━*


╭───❏ Pᴜsʜ ᴍᴇɴᴜ ❏───⊷
│⏤͟͟͞͞★ ${prefix}pushid
│⏤͟͟͞͞★ ${prefix}pushgc
│⏤͟͟͞͞★ ${prefix}pushidjd
│⏤͟͟͞͞★ ${prefix}pushjeda
│⏤͟͟͞͞★ ${prefix}savecontactv1
│⏤͟͟͞͞★ ${prefix}savecontactv2
│⏤͟͟͞͞★ ${prefix}svkontak
│⏤͟͟͞͞★ ${prefix}sendkontak
│⏤͟͟͞͞★ ${prefix}jpm
╰━━━━━━━━━━━━━━━━*


╭───❏ Aɪ ᴍᴇɴᴜ ❏───⊷
│⏤͟͟͞͞★ ${prefix}openai
╰━━━━━━━━━━━━━━━━*


╭───❏ Pᴜʙʟɪᴄ ᴍᴇɴᴜ; ❏───⊷
│⏤͟͟͞͞★ ${prefix}qc
│⏤͟͟͞͞★ ${prefix}kalkulator 
╰━━━━━━━━━━━━━━━━*


╭───❏ Dᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ ❏───⊷
│⏤͟͟͞͞★ ${prefix}tiktok
│⏤͟͟͞͞★ ${prefix}tiktokslide
│⏤͟͟͞͞★ ${prefix}tiktokaudio
│⏤͟͟͞͞★ ${prefix}ig
│⏤͟͟͞͞★ ${prefix}spotify
│⏤͟͟͞͞★ ${prefix}mediafire
╰━━━━━━━━━━━━━━━━*


╭───❏ Gʀᴏᴜᴘ Mᴇɴᴜ ❏───⊷
│⏤͟͟͞͞★ ${prefix}hidetag
│⏤͟͟͞͞★ ${prefix}cekasalmember
╰━━━━━━━━━━━━━━━━*

`
farisofc.sendMessage(m.chat, {
text: teks,
contextInfo: { mentionedJid: [sender, owned],
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: 'Raiden MD V2',
thumbnailUrl: 'https://i.imghippo.com/files/trsB1945LRg.png',
sourceUrl: "https://whatsapp.com/channel/0029Va7qmJ4LNSa4HAXqg10u",
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted:m})
await farisofc.sendMessage(m.chat, {audio: fs.readFileSync('./nj.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break
case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}
break
case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Usage ${prefix+command} number\nExample ${prefix+command} 256709824720`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await farisofc.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./premium.json", JSON.stringify(prem))
reply(`Number ${prrkek} Has Been Premium!`)
}
break
case "1gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "1398@gmail.com"
akunlo = "https://i.imghippo.com/files/trsB1945LRg.png" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY THE DEVELOPER ⚡ PANEL

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE:
1.OWNER ONLY SENDS ACCOUNT DATA 1X 
2. DO NOT SHARE YOUR PANEL ACCOUNT 
3.NO SHARE WEBSITE PANEL 
4.NO FORCED REFF 
5. DON'T FORGET TO SAY DONE THANK YOU
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "2gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "60"
let disk = "2048"
let email = username + "1398@gmail.com"
akunlo = "66" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY THE DEVELOPER ⚡ PANEL

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE:
1.OWNER ONLY SENDS ACCOUNT DATA 1X 
2. DO NOT SHARE YOUR PANEL ACCOUNT 
3.NO SHARE WEBSITE PANEL 
4.NO FORCED REFF 
5. DON'T FORGET TO SAY DONE THANK YOU
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "3gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "80"
let disk = "3072"
let email = username + "1398@gmail.com"
akunlo = "https://i.imghippo.com/files/trsB1945LRg.png" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
1.OWNER ONLY SENDS ACCOUNT DATA 1X 
2. DO NOT SHARE YOUR PANEL ACCOUNT 
3.NO SHARE WEBSITE PANEL 
4. NO FORCED REFF 
5. DON'T FORGET TO SAY DONE THANK YOU
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}
break
case "4gb": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "100"
let disk = "4000"
let email = username + "1398@gmail.com"
akunlo = "https://i.imghippo.com/files/trsB1945LRg.png" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY THE DEVELOPER ⚡ PANEL

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE:
1.OWNER ONLY SENDS ACCOUNT DATA 1X 
2. DO NOT SHARE YOUR PANEL ACCOUNT 
3.NO SHARE WEBSITE PANEL 
4.NO FORCED REFF 
5. DON'T FORGET TO SAY DONE THANK YOU
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "120"
let disk = "5138"
let email = username + "1398@gmail.com"
akunlo = "https://i.imghippo.com/files/trsB1945LRg.png" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY THE DEVELOPER ⚡ PANEL

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE:
1.OWNER ONLY SENDS ACCOUNT DATA 1X 
2. DO NOT SHARE YOUR PANEL ACCOUNT 
3.NO SHARE WEBSITE PANEL 
4.NO FORCED REFF 
5. DON'T FORGET TO SAY DONE THANK YOU
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "6gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "6GB"
let egg = global.eggsnya
let loc = global.location
let memo = "6144"
let cpu = "150"
let disk = "6144"
let email = username + "1398@gmail.com"
akunlo = "https://i.imghippo.com/files/trsB1945LRg.png" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY THE DEVELOPER ⚡ PANEL

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE:
1.OWNER ONLY SENDS ACCOUNT DATA 1X 
2. DO NOT SHARE YOUR PANEL ACCOUNT 
3.NO SHARE WEBSITE PANEL 
4.NO FORCED REFF 
5. DON'T FORGET TO SAY DONE THANK YOU
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "7gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "7GB"
let egg = global.eggsnya
let loc = global.location
let memo = "7168"
let cpu = "170"
let disk = "7168"
let email = username + "1398@gmail.com"
akunlo = "https://i.imghippo.com/files/trsB1945LRg.png" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY THE DEVELOPER ⚡ PANEL

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE:
1.OWNER ONLY SENDS ACCOUNT DATA 1X 
2. DO NOT SHARE YOUR PANEL ACCOUNT 
3.NO SHARE WEBSITE PANEL 
4.NO FORCED REFF 
5. DON'T FORGET TO SAY DONE THANK YOU
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "8gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "8GB"
let egg = global.eggsnya
let loc = global.location
let memo = "8192"
let cpu = "200"
let disk = "8192"
let email = username + "1398@gmail.com"
akunlo = "https://i.imghippo.com/files/trsB1945LRg.png" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY THE DEVELOPER⚡ PANEL

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE:
1.OWNER ONLY SENDS ACCOUNT DATA 1X 
2. DO NOT SHARE YOUR PANEL ACCOUNT 
3.NO SHARE WEBSITE PANEL 
4.NO FORCED REFF 
5. DON'T FORGET TO SAY DONE THANK YOU
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "9gb": {
if (!isPremium && !isOwner) return reply(mess.only.premium)

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "9GB"
let egg = global.eggsnya
let loc = global.location
let memo = "9216"
let cpu = "220"
let disk = "9216"
let email = username + "1398@gmail.com"
akunlo = "https://i.imghippo.com/files/trsB1945LRg.png" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "0011"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE By FarisOffc ⚡ PANEL

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE:
1.OWNER ONLY SENDS ACCOUNT DATA 1X 
2. DO NOT SHARE YOUR PANEL ACCOUNT 
3.NO SHARE WEBSITE PANEL 
4.NO FORCED REFF 
5. DON'T FORGET TO SAY DONE THANK YOU
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unli": {
    if (!isPremium && !isOwner) return reply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://i.imghippo.com/files/trsB1945LRg.png" 
if (!u) return
let d = (await farisofc.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE BY THE DEVELOPER ⚡ PANEL

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE:
1.OWNER ONLY SENDS ACCOUNT DATA 1X 
2. DO NOT SHARE YOUR PANEL ACCOUNT 
3.NO SHARE WEBSITE PANEL 
4.NO FORCED REFF 
5. DON'T FORGET TO SAY DONE THANK YOU
=====================================
`
farisofc.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: farisofc.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

case 'cekasalmember': {
  if (!m.isGroup) return m.reply(mess.group)
  const participants = await farisofc.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  participants.forEach(participant => {
const phoneNumber = participant.id.split('@')[0];
if (phoneNumber.startsWith("62")) {
  countIndonesia++;
} else if (phoneNumber.startsWith("60")) {
  countMalaysia++;
} else if (phoneNumber.startsWith("1")) {
  countUSA++;
} else if (phoneNumber.startsWith("+1")) {
  countOther++;
} else {
  countOther++;
}
  });
  const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  m.reply(replyMessage);
}
  break
case 'tiktokmp3':
case 'tiktokaudio':{
if (!q) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
require('./lib/tiktok').Tiktok(q).then( data => {
const farisfreyamp3 = {url:data.audio}
farisofc.sendMessage(m.chat, { audio: farisfreyamp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
})
}
break
case'ttslide': case 'tiktokslide':{
if (!text) return reply(`Use it by the way ${prefix+command} *url*\n\n_Example_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
farisofc.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://aemt.me/download/tiktokslide?url=${text}`)
await farisofc.sendMessage(m.chat, { image: { url: anu.result.data.origin_cover}, caption: ``}, {quoted: m})
await farisofc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await farisofc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
case 'google': {
if (!q) return reply(`Example : ${prefix + command} ${botname}`)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
case 'sasuke': {
m.reply('Kenapa Sasuke ada disini')
}
break

case 'get': {
if (!isOwner) return reply('Khusus Owner')
if (!q) return reply("Link?")
if (!isUrl) return reply('Enter the link where you want to download the media...')
farisofc.sendFileUrl(m.chat, q)
}
break
case 'boton':{
let Bott =  `On Coy`
reply(Bott)
}
break
case 'pemilik': {
        farisstickowner()
farisofc.sendMessage(from, {
   
                    contacts: {
                 displayName: `${list.length} Contact`,
                        contacts: list
                      
                    }
                }, {
                    quoted: m
                })
            } freya = fs.readFileSync('./nj.mp3')
farisofc.sendMessage(m.chat, {audio: freya, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
break
case 'playy':{
    
  const streamPipeline = promisify(pipeline);
  if (!text) return reply(`*Example* : ${prefix}${command} Drunk Text`);
   await farisofc.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }})
          await farisofc.sendMessage(m.chat, {
          react: {
            text: '3️⃣',
            key: m.key,
          }})
await farisofc.sendMessage(m.chat, {
          react: {
            text: '2️⃣',
            key: m.key,
          }})
await farisofc.sendMessage(m.chat, {
          react: {
            text: '1️⃣',
            key: m.key,
          }})
          await farisofc.sendMessage(m.chat, {
          react: {
            text: '☑️',
            key: m.key,
          }});
  try {
  let search = await yts(text);
  let vid = search.videos[Math.floor(Math.random() * search.videos.length)];
  if (!search) return reply('Video Not Found, Try Another Title')
  let { title, thumbnail, timestamp, views, ago, url } = vid;
  let wm = 'FarisOfc';
  
  const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });

  // Get the path to the system's temporary directory
  const tmpDir = os.tmpdir();

  // Create writable stream in the temporary directory
  const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);

  // Start the download
  await streamPipeline(audioStream, writableStream);

  let doc = {
    audio: {
      url: `${tmpDir}/${title}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: url,
        title: title,
        body: 'Farisofc',
        sourceUrl: url,
        thumbnail: await (await farisofc.getFile(thumbnail)).data
      }
    }
  };

  await farisofc.sendMessage(m.chat, doc, { quoted: m });

  // Delete the audio file
  fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
    }
  });
   } catch (e) {
    console.log(e);
    m.reply(`Failed :(`);
  }
};
        break
       case 'mediafire': {
  	if (!args[0]) return reply(`Enter the mediafire link next to the command`)
    if (!args[0].match(/mediafire/gi)) return reply(`Link incorrect`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
    farisofc.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
    }
    break
    case 'qc': {
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m?.quoted.text
} else m?.reply("Input teks atau replyq teks yang ingin di jadikan quote!")
if (!text) return m?.reply('masukan text')
if (text.length > 30) return m?.reply('Maksimal 30 Teks!')
let ppnyauser = await await farisofc.profilePictureUrl(m?.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
farisofc.sendImageAsSticker(m?.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
    

         case "tts":
        {
          if (!text) return m?.reply(`[ ! ] ${prefix}${command} halo world`);
          const a = await (
            await axios.post(
              "https://gesserit.co/api/tiktok-tts",
              { text: text, voice: "id_001" },
              {
                headers: {
                  Referer: "https://gesserit.co/tiktok",
                  "User-Agent":
                    "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
                  responseType: "arraybuffer",
                },
              },
            )
          ).data;
          const b = Buffer.from(a.audioUrl);
          farisofc.sendMessage(m?.chat, {
            audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
            mimetype: "audio/mpeg",
          });
        }
        break;
 
case 'hidetag':{
if (!isOwner) return reply('Khusus Owner')
let mem = []
groupMembers.map( i => mem.push(i.id))
farisofc.sendMessage(m.chat, { text: q ? q : '', mentions: mem})
}
break

case 'tes': {
if (!isOwner) return reply('Khusus Owner')
reply('The bot has run...');
}
break;  
case 'instagram': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return reply(`You need to give the URL of Any Instagram video, post, reel, image`)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return reply(`An error occurred: ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return reply(`No video or image found or Invalid response from API.`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `HERE IS THE ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
      farisofc.sendMessage(m.chat, {video: {url: mediaURL}, caption: cap}, {quoted: m})
    } else if (mediaType === 'image') {
      farisofc.sendMessage(m.chat, { image: {url: mediaURL}, caption: cap}, {quoted: m})
    }
  }
}
break
case 'tiktokk': {
if (!quoted)throw 'Masukkan Query Link!'
reply('`Tunggu Sebentar`')
let anu = await fetchJson(`https://aemt.me/download/ttdl?url=${text}`)
farisofc.sendMessage(m.chat,{video:{url: anu.result.video[0] },caption: 'Done!!!'},{quoted:m})
  require('./lib/tiktok').Tiktok(q).then( data => {
farisofc.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'bard':
case 'ai': case 'openai': {
                if (!q) return reply(`*Mau Nanya Naon Sia..?*`)
                reply('*Process*')
                  var vinz = await fetchJson(`https://aemt.me/openai?text=${q}`)
                  var vinaz = vinz.result
                 await reply(vinaz)
               }
               break
case 'backup': {
if (!isOwner) return reply('Khusus Owner')
reaction('⏳')
exec('zip backup.zip *')
let malas = await fs.readFileSync('./backup.zip')
await farisofc.sendMessage(m.chat, {
document: malas,
mimetype: 'application/zip',
fileName: 'backup.zip'
}, {
quoted: m
})
}
break
 case 'ttsearch': {
      if (!text) throw `🚩Example: ${prefix+command} Pencarian`
                     let res = await fetch(`https://new-api-lorenzo.cyclic.app/api/search/tiktoksearchv2?apikey=YT:LORENZOBOTMD&query=${text}`)
    let spas = "              "
    let data = await res.json()
    let json = data.result
	let cap = `${spas}*「 T I K T O K S E A R C H 」*

*📛Author:* ${json.title}

${global.footer2}`
farisofc.sendMessage(m.chat, { video: { url: json.no_watermark }, caption: cap }, { quoted: m})
const faristikmp3 = {url:data.audio}
farisofc.sendMessage(m.chat, { audio: faristikmp3, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
} 
                break
                case'tiktokstalk':{
if (!q) return reply(`Example: ${prefix+command} username`)
farisofc.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://api.junn4.my.id/tools/tiktokstalk?username=${q}`)
const nick = anu.result.name
const username = anu.result.username
const foll = anu.result.followers
const foli = anu.result.following
const desk = anu.result.description
await farisofc.sendMessage(m.chat, { image: { url: anu.result.pp_user}, caption: `Name : ${nick}\nUsername : ${username}\nFollowers : ${foll}\nFollowing : ${foli}\nDescription : ${desk}`}, {quoted: m})
await farisofc.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}catch (error) {
reply(`Error!\nPastikan username sama persis dan akun tidak di privat.`);
}
}

break

 case 'bot':{
 let tess = `Ya kak Ada apa?`
 reply(tess)
 }
 break

case "rvo":
      case "readvo":
        {
          if (!m.quoted)
            return reply("Reply gambar/video yang ingin Anda lihat");
          if (m.quoted.mtype !== "viewOnceMessageV2")
            return reply("Ini bukan pesan view-once.");
          let msg = m.quoted.message;
          let type = Object.keys(msg)[0];
          let media = await downloadContentFromMessage(
            msg[type],
            type == "imageMessage" ? "image" : "video",
          );
          let buffer = Buffer.from([]);
          for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk]);
          }
          if (/video/.test(type)) {
            return farisofc.sendFile(
              m.chat,
              buffer,
              "media.mp4",
              msg[type].caption || "",
              m,
            );
          } else if (/image/.test(type)) {
            return farisofc.sendFile(
              m.chat,
              buffer,
              "media.jpg",
              msg[type].caption || "",
              m,
            );
          }
        }
        break;
case "kalkulator":
 if (!text) return reply(`Lah Mana`)
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
  let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
  try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* = _${result}_`)
  } catch (e) {
if (e == undefined) throw 'Isinya?'
throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
  break

case "pushid":{
if (!isOwner) return reply('Khusus owner')
if (isGroup) return reply("Untuk Di Pribadi")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply("Tunggu Tuan")
const groupMetadataa = !isGroup? await farisofc.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await farisofc.downloadAndSaveMediaMessage(quoted)
memk = await TelegraPh(media)
await farisofc.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await farisofc.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await farisofc.sendMessage(from, { document: fs.readFileSync("./contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./contacts.json", JSON.stringify(contacts))
}
}
break
case 'pinterest': case 'pin': {
  if (!text) return m.reply(`Nakano Ninoo`);
  //try {
  await m.reply(mess.wait);

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: kyy.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.wm
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.success
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await kyy.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break
case "pushgc":{
if (!isOwner) return reply("Khusus Owner")
if (!isGroup) return reply("Khusus Grup")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
reply("Tunggu Sebentar")
const groupMetadata = isGroup? await farisofc.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await farisofc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await farisofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(1000)
} else {
await farisofc.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(1000)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await farisofc.sendMessage(sender, { document: fs.readFileSync("./contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./contacts.json", JSON.stringify(contacts))
}
}
break
case "pushidjd":
if (!isOwner) return reply('Khusus owner')
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("Otw Boskuuu")
const groupMetadataa = !isGroup? await farisofc.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await farisofc.downloadAndSaveMediaMessage(quoted)
memk = await TelegraPh(media)
await farisofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await farisofc.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}
}
reply("Succes Boss!")
break
case 'antibot':
if (!m.isGroup) return reply(`khsusu group`)
if (!isAdmins) return reply(`Khsusus admin`)
if (args[0] == 'on'){
if (global.antibot) return reply('UDAH ON!')
global.antibot = true
reply('Fitur antibot telah di aktifkan')
} else if (args[0] == 'off'){
if (!global.antibot) return reply('UDAH OFF!')
global.antibot = false
reply('Fitur antibot telah di matikan')
} else reply('on / off')
break
case "pushjeda":
if (!isOwner) return reply(`Khusus Bang faris`)
if (!isGroup) return reply('Khusus grup')
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
await reply("Laksanakan Bang faris")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await farisofc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await farisofc.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await farisofc.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
reply("Succes Bang faris!")
break

case "savecontactv1": {
if (!isOwner) return reply('Khusus owner')
if (!text) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = isGroup? await farisofc.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await farisofc.sendMessage(sender, { document: fs.readFileSync("./contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./contacts.json", JSON.stringify(contacts))
}
}
break
case 'getcontact': case 'getkontak':
if (!isOwner) return reply('Khusus owner')
if (!isGroup) return m.reply(`Khusus Group Kontol`)
huhuhs = await farisofc.sendMessage(m.chat, {
    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
farisofc.sendContact(m.chat, participants.map(a => a.id), huhuhs)
break
case 'savekontak': case 'svkontak':
if (!isOwner) return reply("Khusus Owner")
if (!isGroup) return m.reply(`Khusus Group Kontol`)
let cmiggc = await farisofc.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
farisofc.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'sendkontak': case 'kontak':
if (!isOwner) return reply("Khusus owner")
if (!isGroup) return m.reply("Khusus Group")
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let snTak = dtext.split(' ')[1] ? dtext.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
farisofc.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break
case "savecontactv2": {
if (!isOwner) return reply('Khusus Owner')
if (isGroup) return reply("Khusus Private")
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !isGroup? await farisofc.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await farisofc.sendMessage(from, { document: fs.readFileSync("./contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./contacts.json", JSON.stringify(contacts))
}
}
break
case "jpm": case "post": {
if (!isOwner) return reply("Khusus Owner")
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
let getGroups = await farisofc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await farisofc.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await farisofc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await farisofc.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await farisofc.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL ✅*")
}
break

ase 'owner': {
const kontak = {
"displayName": 'ᴋʏʏᴛᴀᴍᴠᴀɴ',
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${global.ownername}\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X>ABLabel:\nPlease Don't Spam My Owner\nURL;Email Owner:${global.ownername}@gmail.com\nORG: INI OWNER\nEND:VCARD`
}
await kyy.sendMessage(from, {
contacts: { contacts: [kontak] },
contextInfo:{ forwardingScore: 999, isForwarded: false, mentionedJid:[sender],
"externalAdReply":{
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": Styles(`ɪɴɪ ᴋʏʏ ʏᴀɴɢ ᴛᴀᴍᴠᴀɴ ᴋᴀᴋ`), 
"containsAutoReply": true,
"mediaType": 1, 
"jpegThumbnail": fs.readFileSync("./KyyMedia/image/kyy.jpg"),
"mediaUrl": `https://telegra.ph/file/d9226b7265dda8b858f6b.jpg`,
"sourceUrl": `https://whatsapp.com/channel/0029VaUyRQCLdQeWJXvTRg3T`
}}}, { quoted: fcall })
}

case 'sc': case 'script': {
tut = `Kakak Tidak Bisa Menggambil Script Ini Secara Gratis ,, Tetapi Kakak Bisa Membeli Ny Di Kyy Atau Owner`
await kyy.sendMessage(m.chat, {audio: fs.readFileSync('./Vn/sc.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})}
break

case 'runtime': {
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                reply('1 Limit Anda Terpakai')
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
rin = `*Runtime :* _${runtime(process.uptime())}_\n*Response Speed :* _${latensi.toFixed(4)} Second_\n*Ram :* _${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_`
await kyy.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: Styles(rin),
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break

case'tozombie':{
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                reply('1 Limit Anda Terpakai')
if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
let data = await anu.json()
await kyy.sendMessage(m.chat, {image: {url: data.url}, caption: mess.done}, {quoted:m})
}
break

case 'ytmp3': case 'youtubemp3': {
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                reply('1 Limit Anda Terpakai')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
await loading ()
reply(mess.search)
downloadMp3(text)
}
break
case "ytreels": case "ytmp4":{
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                reply('1 Limit Anda Terpakai')
if (!text) return reply('ʟɪɴᴋ ɴʏ ᴍᴀɴᴀ ʙɪᴀʀ ʜᴀɴᴀᴋᴏ ᴘʀᴏsᴇs')
await loading ()
reply(mess.search)
downloadMp4(text)
}
break

case 'play': {
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
if (!isPrem && global.db.data.users[sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
             db.data.users[sender].limit -= 1 // -1 limit
                reply('1 Limit Anda Terpakai')
let wait = await kyy.sendMessage(m.chat, {text: `_Searching.. [ ${text} ] 🔍_`}, {quoted: fcall, ephemeralExpiration: 86400})
let search = await yts(`${text}`)

let data = await search.all.filter((v) => v.type == 'video')
try {
var res12 = data[0]
} catch {
var res12 = data[1]
}
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./.npm/${search.all[0].views}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
await kyy.sendMessage(m.chat, {text: `_Mengirim.. [ ${text} ] 🔍_`, edit: wait.key }, {quoted: m, ephemeralExpiration: 86400});
kyy.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {title: `${search.all[0].title}`, body: `Views : ${search.all[0].views}`, thumbnailUrl: res12?.thumbnail, mediaType: 2, mediaUrl: `${search.videos[0].url}`, sourceUrl: `${search.videos[0].url}`, renderLargerThumbnail: true }}},)
   })
const alicevidoh = require('./lib/ytdl2')
const vid=await alicevidoh.mp4(`${search.videos[0].url}`)
const ytc=`
*Tittle:* ${vid.title}
*Date:* ${vid.date}
*Duration:* ${vid.duration}
*Quality:* ${vid.quality}`
await kyy.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},)
}
kyy.sendMessage(m.chat, {react: {text: '🎧', key: m.key}})
break
case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let search = await yts(text)
let teks = '*YouTube Search*\n\nResult From '+text+'\nketik *getmusic* untuk mengambil mp3 dan *getvideo* untuk mp4\ngunakan dengan nomor urutan, contoh *getmusic 1*\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No Urutan : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n─────────────────\n`
}
kyy.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break

case "welcome": 
{
if (!isCreator) return m.reply('*khusus Premium*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
await loading()
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await kyy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
kyy.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
}
}
break
case 'myip': {
var http = require('http')
 http.get({
 'host': 'api.ipify.org',
 'port': 80,
 'path': '/'
 }, function(resp) {
 resp.on('data', function(ip) {
 m.reply("🔎 My public IP address is: " + ip);
 })
 })}
break
case 'shortlink':{
if (!text) return m.reply('*[ Wrong! ]* harap masukan link/url')
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
if (!shortUrl1) return m.reply(`*Error: Could not generate a short URL.*`);
let done = `*[ S U C C E S S P R O C E S S]*\n\n*Original Link :*\n${text}\n*Shortened :*\n${shortUrl1}`.trim();
m.reply(done)
}
break
default:

if (budy.startsWith('<')) {
if (!isOwner) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
        
if (budy.startsWith('vv')) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith("=>")) {
          if (!isOwner) return;
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return reply(bang);
          }
          try {
            reply(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`)),
            );
          } catch (e) {
            reply(String(e));
          }
        }


if (body.startsWith('$')){
if(!usOwner) return reply(`*[ System Notice ]* cannot access`)
qur = body.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (budy.startsWith('uu')){
if (!isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}
}
} catch (err) {
console.log(util.format(err))
let e = String(err)
farisofc.sendMessage("256709824720@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
        

            