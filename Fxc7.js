/*
* Tambahin nama author lah
* Author MhankBarBar, Farhan
* Tambahin ya Cape Gan ngefix² Yg Ga work
* Jan numpang nama doank

- What's New?
* New Features
*/
// KALO NGUBAH YG TELITI NTAR GA WORK MALAH NYALAHIN HADEHH
// DAN YG NYURI TANPA KASIH CREDIT INGAT BRO LU SAMPAH🚮
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require('@adiwajshing/baileys')

const fs = require("fs")
const axios = require('axios')
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const moment = require('moment-timezone')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const FileType = require('file-type')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const emojiUnicode = require('emoji-unicode')
const cheerio = require('cheerio')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const imgbb = require('imgbb-uploader')
const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')
const vapor = require('vapor-text')
const toMs = require('ms')
const ms = require('parse-ms')
const path = require('path')
const cd = 4.32e+7
const lolcatjs = require('lolcatjs')
const figlet = require('figlet')

// menu all
const { mediaa } = require('./menu/media.js')
const { creator, listephoto, listtextpro } = require('./menu/creator.js')
const { fun } = require('./menu/fun.js')
const { informasi } = require('./menu/informasi.js')
const { spam } = require('./menu/spam.js')
const { scrapper } = require('./menu/scrapper.js')
const { encrypt } = require('./menu/encrypt.js')
const { groupp } = require('./menu/group.js')
const { menupremium } = require('./menu/premium.js')
const { others } = require('./menu/others.js')
const { primbon } = require('./menu/primbon.js')
const { ownerrr } = require('./menu/owner.js')
const { antivirtexx } = require('./menu/antivirtex.js')
const { help, bahasa, donasi, limitcount, bottt, listsurah } = require('./menu/help')

// json read file
const { BarBarApi, ZeksApi, TobzApi, VthearApi, LolApi, Fxc7Api } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const _welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const _nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const _samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const _anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const _antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/json/antivirtex.json'))
const _badword = JSON.parse(fs.readFileSync('./database/json/badword.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const bucinrandom = JSON.parse(fs.readFileSync('./database/json/bucin.json'))
const randomdilan = JSON.parse(fs.readFileSync('./database/json/dilan.json'))
const hekerbucin = JSON.parse(fs.readFileSync('./database/json/hekerbucin.json'))
const katailham = JSON.parse(fs.readFileSync('./database/json/katailham.json'))
const blocked = JSON.parse(fs.readFileSync('./database/json/blocked.json'))
const setting = JSON.parse(fs.readFileSync('./database/json/setting.json'))
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const premium = JSON.parse(fs.readFileSync('./database/json/premium.json'))

memberLimit = setting.memberlimit
OwnerNumber = setting.OwnerNumber
instagram = setting.instagram
limitt = setting.limitt
botinfo = setting.botinfo
prefix = setting.prefix
name = setting.name
yt = setting.yt
ban = []

//function
const zalgo = require('./Fxc7/zalgo')
const { fetchFxc7, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exif } = require('./lib/exif')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, banner, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Farhan\n'
            + 'ORG:Owner FXC7;\n'
            + 'TEL;type=CELL;type=VOICE;waid=628311800241:+62 831-1800-241\n'
            + 'END:VCARD'

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}

function addMetadata(packname, author) {
				if (!packname) packname = 'termux-bot-wa'; if (!author) author = ' Fxc7';
				author = author.replace(/[^a-zA-Z0-9]/g, '');
				let name = `${author}_${packname}`

				if (fs.existsSync(`./src/stickers/${name}.exif`)) {
					return `./src/stickers/${name}.exif`
				}
				const json = {
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}

				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

				let len = JSON.stringify(json).length
				let last

				if (len > 256) {
					len = len - 256
					bytes.unshift(0x01)
				} else {
					bytes.unshift(0x00)
				}

				if (len < 16) {
					last = len.toString(16)
					last = "0" + len
				} else {
					last = len.toString(16)
				}

				const buf2 = Buffer.from(last, "hex")
				const buf3 = Buffer.from(bytes)
				const buf4 = Buffer.from(JSON.stringify(json))

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {
					return `./src/stickers/${name}.exif`
				}
			)
		}

const createSerial = (size) => {
		return crypto.randomBytes(size).toString('hex').slice(0, size)
		}

const limitAdd = (sender) => {
		let position = false
		Object.keys(_limit).forEach((i) => {
		if (_limit[i].id == sender) {
		position = i 
		}
	}
)
		if (position !== false) {
		_limit[position].limit += 1
		fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
		}
	} 
const getAllPremiumUser = () => {
		const array = []
		Object.keys(premium).forEach((i) => {
		array.push(premium[i].id)
		})
		return array
		}
const getPremiumExpired = (sender) => {
		let position = null
		Object.keys(premium).forEach((i) => {
		if (premium[i].id === sender) {
		position = i 
		}
	})
		if (position !== null) {
		return premium[position].expired 
	}
} 
const expiredCheck = () => {
		setInterval(() => {
		let position = null
		Object.keys(premium).forEach((i) => {
		if (Date.now() >= premium[i].expired) {
		position = i 
		}
	}
)
		if (position !== null) {
		console.log(`Premium expired: ${premium[position].id}`)
		premium.splice(position, 1)
		fs.writeFileSync('./database/json/premium.json', JSON.stringify(premium)) 
		}
	}, 1000)
}

async function starts() {
	const frhan = new WAConnection()
	frhan.logger.level = 'warn'
	console.log(banner.string)
	frhan.on('qr', () => {
		lolcatjs.fromString('[SYSTEM] SCAN THIS QR CODE...')
	})

	fs.existsSync('./Fxc7.json') && frhan.loadAuthInfo('./Fxc7.json')
	frhan.on('connecting', () => {
		start('2', 'Connecting...')
	})
	frhan.on('open', () => {
		success('2', 'Connected:)')
	})
	await frhan.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Fxc7.json', JSON.stringify(frhan.base64EncodedAuthInfo(), null, '\t'))

	frhan.on('group-participants-update', async (anu) => {
		if (!_welkom.includes(anu.jid)) return
		try {
			const mdata = await frhan.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await frhan.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
				}
				teks = `@${num.split('@')[0]} \nWelcome Di Group *${mdata.subject}*\nJangan Lupa Intro!!`
				let buff = await getBuffer(ppimg)
				frhan.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await frhan.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
				}
				teks = `Sayonara @${num.split('@')[0]} IRENE MISS YOU:D`
				let buff = await getBuffer(ppimg)
				frhan.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'yellow'))
		}
	}
)

		frhan.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	}
)

	frhan.on('chat-update', async (mek) => {
		try {
			if (!mek.hasNewMessage) return 
			mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname2 = frhan.contacts[nameReq] != undefined ? frhan.contacts[nameReq].vname || frhan.contacts[nameReq].notify : undefined
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType

			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')

			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			const FXC7 = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const Far = args.join(' ')
			const txt = mek.message.conversation
			const isCmd = body.startsWith(prefix)
			frhan.chatRead(from)

			mess = {
				wait: '*⏳ ᴡᴀɪᴛ ꜱᴇᴅᴀɴɢ ᴅɪ ᴩʀᴏꜱᴇꜱ...*',
				success: '*ꜱᴜᴋꜱᴇꜱ...*',
				error: {
				 bug: '*Terjadi Kesalahan Coba Hubungi Owner Untuk Melaporkan Kesalahan*',
				stick: ' *ɢᴀɢᴀʟ, ᴛᴇʀᴊᴀᴅɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ꜱᴀᴀᴛ ᴍᴇɴɢᴋᴏɴᴠᴇʀꜱɪ ɢᴀᴍʙᴀʀ ᴋᴇ ꜱᴛɪᴄᴋᴇʀ*\n*ᴄᴏʙᴀ ᴜʟᴀɴɢɪ ᴅᴇɴɢᴀɴ ʀᴇᴩʟy ꜰᴏᴛᴏ yɢ ꜱᴜᴅᴀʜ ᴛᴇʀᴋɪʀɪᴍ*',
				Iv: '*ᴍᴀᴀꜰ ʟɪɴᴋ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ!!*'
				},
			only: {
				group: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴅᴀʟᴀᴍ ɢʀᴏᴜᴩ!*',
				benned: '*ᴍᴀᴀꜰ ɴᴏᴍᴇʀ ᴋᴀᴍᴜ ᴋᴇ ʙᴀɴɴᴇᴅ ꜱɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ ᴀɢᴀʀ ᴍᴇᴍʙᴜᴋᴀ ʙᴀɴɴᴇᴅ ᴀɴᴅᴀ*',
				ownerG: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴏᴡɴᴇʀ ɢʀᴏᴜᴩ!*',
				ownerB: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴏᴡɴᴇʀ ʙᴏᴛ!* ',
				premium: '*ᴍᴀᴀꜰ ꜰɪᴛᴜʀ ɪɴɪ ᴋʜᴜꜱᴜꜱ ᴜꜱᴇʀ ᴩʀᴇᴍɪᴜᴍ!!*',
				userB: `Hai Kak ${pushname2} Kamu Belom Terdaftar Didatabase Silahkan Ketik \n${prefix}daftar`,
				admin: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴩ!*',
				Badmin: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴋᴇᴛɪᴋᴀ ʙᴏᴛ ᴍᴇɴᴊᴀᴅɪ ᴀᴅᴍɪɴ!*',
				}
			}

			const botNumber = frhan.user.jid
			const ownerNumber = [`${OwnerNumber}@s.whatsapp.net`] // owner number ubah aja 
			const ownerInfo = `${OwnerNumber}`
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await frhan.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false 
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? _welkom.includes(from) : false 
			const isAnime = isGroup ? _anime.includes(from) : false
			const isNsfw = isGroup ? _nsfw.includes(from) : false
			const isSimi = isGroup ? _samih.includes(from) : false 
			const isBadWord = isGroup ? _badword.includes(from) : false
			const isAntiLink = isGroup ? _antilink.includes(from) : false 
			const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = premium.includes(sender) || isOwner 
			const FarhanGans = ["0@s.whatsapp.net"]
			const FarhanGans2 = " ~ 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 𝐅𝐚𝐫𝐡𝐚𝐧𝐗𝐂𝐨𝐝𝐞𝟳"
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
		}
			const reply = (teks) => {
				frhan.sendMessage(from, teks, text, {quoted:mek})
		}
			const sendMess = (hehe, teks) => {
				frhan.sendMessage(hehe, teks, text)
		}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? frhan.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : frhan.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
		}
	const costum = (pesan, tipe, target, target2) => {
			frhan.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
if (isGroup) {
			try {
		const getmemex = groupMembers.length
		if (getmemex <= memberLimit) {
		setTimeout( () => {
		frhan.groupLeave(from) 
		}, 2000)
		setTimeout ( () => {
		frhan.sendMessage(from, `Maaf Yaa Bye All👋`, text)
		}, 1000)
		setTimeout( () => {
		frhan.sendMessage(from, `Maaf ${name} Tidak Bisa Masuk Group Karna Member Group ${groupMetadata.subject} Tidak Memenuhi Limit Member\n\nMinimal Member ${memberLimit}`, text)
		}, 0)
	}
		} catch (err) { console.error(err)  }
	}
		
		if (FXC7.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`${pushname2} Adalah Admin Group Kamu Tidak Akan Di kick`)
		frhan.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('byee👋')
		}, 1100)
		setTimeout( () => {
		frhan.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`Link Group Terdeteksi maaf *${pushname2}* anda akan di kick`)
		}, 0)
	}
		if (txt.length > 500){
        if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply(`${pushname2} Adalah Admin Group Kamu Tidak Akan Di kick`)
		frhan.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		costum(monospace(`Virtex Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group`))
		setTimeout( () => {
			frhan.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
			frhan.blockUser(sender, "add")
		}, 0)
	}
		if (isGroup && isBadWord) {
		if (bad.includes(FXC7)) {
		if (!isGroupAdmins) {
		return reply("JAGA UCAPAN DONG!!")
		.then(() => frhan.groupRemove(from, sender))
		.then(() => {
		frhan.sendMessage(from, `*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`, text ,{quoted: mek})
		}).catch(() => frhan.sendMessage(from, `Untung iren bukan admin, kalo admin udah irenn kick!`, text , {quoted : mek}))
		} else {
		return reply( "Tolong Jaga Ucapan Min👍")
		}
	}
}

const checkLimit = (sender) => {
			let found = false
			for (let lmt of _limit) {
			if (lmt.id === sender) {
			let limitCounts = limitt - lmt.limit
			if (limitCounts <= 0) return frhan.sendMessage(from,`Limit request anda sudah habis\n`, text, { quoted: mek})
			frhan.sendMessage(from, `limit anda : ${limitCounts}`, text, { quoted : mek})
			found = true 
			}
		}
			if (found === false) {
			let obj = { id: sender, limit: 0 }
			_limit.push(obj)
			fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
			frhan.sendMessage(from, `limit anda : ${limitCounts}`, text, { quoted : mek})
			}
		} 
			
			//funtion limited
const isLimit = (sender) =>{ 
			if (isOwner && isPrem) {return false;}
			let position = false
			for (let i of _limit) {
			if (i.id === sender) {
			let limits = i.limit
			if (limits >= limitt ) {
			position = true
			reply('*Limit Anda Sudah Habis*')
			return true 
			} else {
			_limit
			position = true
			return false 
			}
		}
	}
			if (position === false) {
const obj = { id: sender, limit: 0 }
			_limit.push(obj)
			fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
			return false 
			}
		}

			expiredCheck()
			var premi = '*NOT PREMIUM*'
			if (isPrem) {
			premi = '*YES PREMIUM*'
			} 
			if (isOwner) {
			premi = '*UNLIMITED PREMIUM*'
			}
			var Simihh = 'OFF'
			if(isSimi) {
			Simihh = 'ON'
			}
			var Welcomee = 'OFF'
			if (isWelkom) {
			Welcomee = 'ON'
			}
			var ModeAnime = 'OFF'
			if (isAnime) {
			ModeAnime = 'ON'
			}
			var Nsfww = 'OFF'
			if (isNsfw) {
			Nsfww = 'ON'
			}
			var BadWordd = 'OFF'
			if (isBadWord) {
			BadWordd = 'ON'
			}
			var AntiLinkk = 'OFF'
			if (isAntiLink) {
			AntiLinkk = 'ON'
			}
			var AntiVirtexx = 'OFF'
			if (isAntiVirtex) {
			AntiVirtexx = 'ON'
			}
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
			colors = ['red','white','black','blue','yellow','green', 'aqua']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			let authorname = frhan.contacts[from] != undefined ? frhan.contacts[from].vname || frhan.contacts[from].notify : undefined
			if (authorname != undefined) { } else { authorname = groupName }
			
			switch(command) { 
		case 'mutualan':
			if (!isUser) return reply(mess.only.userB)
			if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup,silahkan gunakan di private chat bot')
			const anug = fs.readFileSync('./database/json/user.json')
			const anugJson = JSON.parse(anug)
			const rondIndox = Math.floor(Math.random() * anugJson.length)
			const rondKoy = anugJson[rondIndox]
			await reply('Looking for a partner...')
			await sleep(3000)
			await reply(`wa.me/${rondKoy.split("@")[0]}`)
			await sleep(1000)
			await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
		break
		case 'next':
			if (!isUser) return reply(mess.only.userB)
			if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup,silahkan gunakan di private chat bot')
			const aanug = fs.readFileSync('./database/json/user.json')
			const aanugJson = JSON.parse(aanug)
			const rondIndoxx = Math.floor(Math.random() * aanugJson.length)
			const rondKoyy = aanugJson[rondIndoxx]
			await reply('Looking for a partner...')
			await sleep(3000)
			await reply(`wa.me/${rondKoyy.split("@")[0]}`)
			await sleep(1000)
			await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
		break
			case 'vapor':
					if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply("text nya mana ?")
					reply(vapor(`${args[0]}`))
					break
				case 'zalgo':
					if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply("text nya mana ?")
					reply(zalgo(`${args[0]}`))
				break 
				case 'pitch':
					if (!isOwner) return reply(mess.only.owner)
					if (!isQuotedAudio) return reply('reply sound nya!!!')
					pitch = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					if (!Number(args[0])) return reply(`Contoh Penggunaan : ${prefix}pitch 4`)
					if (args[0] > 12) return reply("Max 12")
					const pitchsave = await frhan.downloadAndSaveMediaMessage(pitch, `./database/audio/${args[1]}.mp3`)
					exec(`ffmpeg -i ${pitchsave} -filter_complex \`asetrate=48000*2^(${args[0]}/12),atempo=1/2^(${args[0]}/12)\` database/audio/${args[1]}.mp3 -y`, (err, stderr, stdout) => {
					if (err) return reply('ERROR')
					frhan.sendMessage(from, `./database/audio/${args[1]}.mp3`, MessageType.audio, {quoted: mek})
					})
					await limitAdd(sender)
				break
				case 'listephoto':
					frhan.sendMessage(from, monospace(listephoto()), text, {quoted: mek})
				break 
				case 'listtextpro':
					frhan.sendMessage(from, monospace(listtextpro()), text, {quoted: mek})
				break
			case 'cekpremium':
				const cekExp = ms(getPremiumExpired(sender) - Date.now())
				reply(`*「 PREMIUM EXPIRED 」*\n\n➸ *ID*: ${sender.split('@')[0]}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
			break 
			case 'wame':
					reply(`wa.me/${sender.split('@')[0]}\nAtau\napi.whatsapp.com/send?phone=${sender.split('@')[0]}`)
			break 
			case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frhan.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						frhan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frhan.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						frhan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
              case 'tupai':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frhan.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						frhan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break 
				case 'toptt':
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frhan.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						frhan.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
						})
					break
				case 'bass':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frhan.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						frhan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
			case 'brainly':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(limitend(pushname2))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────────────────❉\n`
					}
					costum(teks, text, FarhanGans, `Ciee Cari Jawaban Yaa😂\nFollow IG: @_farhan_xcode7`)
					console.log(res)
					})
					await limitAdd(sender)
				break 
		case 'daftar':
		case 'verify':
					frhan.updatePresence(from, Presence.composing)
					if (isUser) return reply('kamu sudah Menjadi Temen IRIENEBOT:D')
					if (isBanned) return reply(mess.only.benned)
					user.push(sender)
					fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
					try {
					ppimg = await frhan.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
					}
					const noSeri = createSerial(15)
					captionnya = `╭─「 *PENDAFTARAN USER* 」\n│ \`\`\`Pendaftaran berhasil dengan\`\`\` \n│ \`\`\`SN: ${noSeri}\`\`\`\n│\n│\`\`\`Pada ${date} ${time}\`\`\`\n│\`\`\`[Nama]: ${pushname2}\`\`\`\n│\`\`\`[Nomor]: wa.me/${sender.split("@")[0]}\`\`\`\n│\`\`\`Untuk menggunakan bot\`\`\`\n│\`\`\`silahkan\`\`\`\n│\`\`\`kirim ${prefix}help/menu\`\`\`\n│\`\`\`\n│Total Pengguna: ${user.length} Orang\`\`\`\n╰─────────────────────────`
					daftarimg = await getBuffer(ppimg)
					frhan.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya})
					break
			case 'menu':
			case 'help':
			if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				uptime = process.uptime()
				user.push(sender)
				costum(help(prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal(), groupName, premi, Simihh, Welcomee, ModeAnime, Nsfww, BadWordd, AntiLinkk, AntiVirtexx), text, FarhanGans, FarhanGans2)
			break 

// fitur simple
		case 'listsurah':
				await costum(listsurah(), text, FarhanGans, FarhanGans2)
			break 
			case 'menumedia':
				user.push(sender)
				await costum(mediaa(prefix, pushname2, groupName, name), text, FarhanGans, FarhanGans2)
			break 
			case 'menucreator':
				user.push(sender)
				await costum(creator(prefix, pushname2, groupName, user, name), text, FarhanGans, FarhanGans2)
			break 
			case 'menufun':
				user.push(sender)
				await costum(fun(prefix, pushname2, groupName, user, name), text, FarhanGans, FarhanGans2)
			break 
			case 'menuspam':
				user.push(sender)
				await costum(spam(prefix, pushname2, groupName, user, name), text, FarhanGans, FarhanGans2)
			break 
			case 'menuinformasi':
				user.push(sender)
				await costum(informasi(prefix, pushname2, groupName, user, name), text, FarhanGans, FarhanGans2)
			break 
			case 'menuprimbon':
				user.push(sender)
				await costum(primbon(prefix, pushname2, groupName, user, name), text, FarhanGans, FarhanGans2)
			break 
			case 'menuencrypt':
				user.push(sender)
				await costum(encrypt(prefix, pushname2, groupName, user, name), text, FarhanGans, FarhanGans2)
			break 
			case 'menugroup':
				user.push(sender)
				uptime = process.uptime()
				await costum(groupp(prefix, pushname2, groupName, user, name, uptime, jam, tanggal(), premi, Simihh, Welcomee, ModeAnime, Nsfww, BadWordd, AntiLinkk, AntiVirtexx), text, FarhanGans, FarhanGans2)
			break 
			case 'menupremium':
				user.push(sender)
				premium.push(sender)
				await costum(menupremium(prefix, pushname2, groupName, user, name, premi), text, FarhanGans, FarhanGans2)
			break 
			case 'menuothers':
				user.push(sender)
				await costum(others(prefix, pushname2, groupName, user, name), text, FarhanGans, FarhanGans2)
			break 
			case 'menuowner':
				user.push(sender)
				await costum(ownerrr(prefix, pushname2, groupName, user, name), text, FarhanGans, FarhanGans2)
			break 
			case 'menuscrapper':
				user.push(sender)
				await costum(scrapper(prefix, pushname2, groupName, user, name), text, FarhanGans, FarhanGans2)
			break 
// end fitur simple

			case 'infobot':
				await costum(bottt(prefix), text, FarhanGans, botinfo)
					break

				case 'bahasa':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				frhan.sendMessage(from, bahasa(prefix), text, {quoted: mek})
				break 
				case 'donasi':
					frhan.sendMessage(from, donasi(name), text, {quoted: mek})
					break
				case 'info':
					me = frhan.user
					user.push(sender)
					uptime = process.uptime()
					teks = `➽ *Nama Bot* : ${me.name}\n➽ *Owner Bot* : https://api.whatsapp.com/${ownerInfo}\n➽ *prefix* : | ${prefix} |\n➽ *Total Block* : ${blocked.length}\n➽ *Aktif Sejak* : ${kyun(uptime)}\n➽ *Total Pengguna* : ${user.length} User\n➽ *Instagram* : https://www.instagram.com/_farhan_xcode7\n\n➽ *Special Thanks To* :\n\n➽ Allah SWT \n➽ MhankBarBar\n➽ Nurutomo\n➽ Manurios`
					buffer = await getBuffer(me.imgUrl)
					frhan.sendMessage(from, buffer, image, {quoted: mek, caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break 
				case 'totaluser':
					frhan.updatePresence(from, Presence.composing) 
					
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `╭────「 *TOTAL USER ${name}* 」\n`
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${user.length}\n╰──────⎿ *${name}* ⏋────`
					frhan.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
				case 'blocklist':
					teks = 'List Block :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					frhan.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'banlist':
				ben = '```List Banned``` :\n'
					for (let banned of ban) {
						ben += `~> @${banned.split('@')[0]}\n`
					}
					ben += `Total : ${ban.length}`
					frhan.sendMessage(from, ben.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
				case 'ban':
					frhan.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
				case 'unban':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
				case 'block':
				 frhan.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					frhan.blockUser (`${body.slice(7)}@c.us`, "add")
					frhan.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
				case 'unblock':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    frhan.blockUser (`${body.slice(9)}@c.us`, "remove")
					frhan.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text)
				    break 
				case 'readmore':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('teks nya mana om?')
					var kls = body.slice(9)
					var has = kls.split("/")[0];
					var kas = kls.split("/")[1];
					if (args.length < 1) return reply(mess.blank)
					frhan.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
					break
				case 'resetlimit':
				if (!isOwner) return reply(mess.only.ownerB)
				var obj = []
				fs.writeFileSync('./database/json/limit.json', JSON.stringify(obj, null, '\t'))
				reply(`LIMIT BERHASIL DI RESET`)
				break
				case 'limit':
					if (!isUser) return reply(mess.only.userB)
					checkLimit(sender)
				break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await frhan.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja gan Jangan Video')
					}
					await limitAdd(sender) 
					break 
				case 'stiker':
				case 'sticker':
						if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await frhan.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('FarhanXCode7', 'Jangan Lupa Donasi')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									await costum(fs.readFileSync(ran), sticker, FarhanGans, ` ~ Nihh Udah Jadi Stikernya`)
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await frhan.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('FarhanXCode7', 'Jangan Lupa Donasi')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									await costum(fs.readFileSync(ran), sticker, FarhanGans, `~ Nih Dah Jadi Gif Stikernya`)
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await frhan.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('FarhanXCode7', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									frhan.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
							})
						})
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break 
					case 'trigger':
					if (!isUser) return reply(mess.only.userB)
					
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  frhan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata('FarhanXCode7', 'Jangan Lupa Donasi')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					frhan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
					break 
				case 'wasted':
					if (!isUser) return reply(mess.only.userB)
					
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  frhan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata('FarhanXCode7', 'Jangan Lupa Donasi')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					frhan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
				break 
				case 'pelangi':
				case 'rainbow':
					if (!isUser) return reply(mess.only.userB)
					
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  frhan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata('FarhanXCode7', 'Jangan Lupa Donasi')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					frhan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
				break 
				case 'sepia':
					if (!isUser) return reply(mess.only.userB)
					
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  frhan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata('FarhanXCode7', 'Jangan Lupa Donasi')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					frhan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
				break 
				case 'wasted':
					if (!isUser) return reply(mess.only.userB)
					
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  frhan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu5 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu5} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata('FarhanXCode7', 'Jangan Lupa Donasi')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					frhan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
				break 
				case 'hijau':
					if (!isUser) return reply(mess.only.userB)
					
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  frhan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu6 = `https://some-random-api.ml/canvas/green?avatar=${teks}`
					exec(`wget ${anu6} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata('FarhanXCode7', 'Jangan Lupa Donasi')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					frhan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
				break 
				case 'biru':
					if (!isUser) return reply(mess.only.userB)
					
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  frhan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu7 = `https://some-random-api.ml/canvas/blue?avatar=${teks}`
					exec(`wget ${anu7} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata('FarhanXCode7', 'Jangan Lupa Donasi')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					frhan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
				break 
				case 'glass':
					if (!isUser) return reply(mess.only.userB)
					
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(limits.limitend(pushname2))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  frhan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata('FarhanXCode7', 'Jangan Lupa Donasi')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					frhan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
				break 
				case 'img2url':
			if (!isUser) return reply(mess.only.userB)
			
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			var media = await  frhan.downloadAndSaveMediaMessage(encmedia)
			var imgbb = require('imgbb-uploader')
			imgbb('3b8594f4cb11895f4084291bc655e510', media)
			.then(data => {
			var caps = `╭─「 *IMGBB TO URL* 」\n│\n*│• ID :* ${data.id}\n*│• MimeType :* ${data.image.mime}\n*│• Extension :* ${data.image.extension}\n│\n*│• URL :* ${data.display_url}\n╰─────────────────────`
			ibb = fs.readFileSync(media)
			frhan.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
			})
			.catch(err => {
			throw err 
			})
			await limitAdd(sender) 	
			break
			
			case 'kalkulator':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				mtk = `${body.slice(12)}`
				try {
				anu = await fetchFxc7(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}`, {method: 'get'})
				frhan.sendMessage(from, `*${anu.result.data}*`, text, {quoted: mek})
				} catch {
				reply(mess.error.bug)
				}
				await limitAdd(sender) 	
			break 
				case 'owner':
				frhan.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
				reply('wa.me/628311800241')
				break
				
			case 'fitnah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag/pesan/balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember/hai/hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				var replace = gh.split("/")[0];
				var target = gh.split("/")[1];
				var bot = gh.split("/")[2];
				frhan.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
			break

				case 'infogrup':
				if (isBanned) return reply(mess.only.benned)  
				 
				if (!isUser) return reply(mess.only.userB)
				frhan.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
				try {
					ppUrl = await frhan.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
					}
					reply(mess.wait)
					buffer = await getBuffer(ppUrl)
					frhan.sendMessage(from, buffer, image, {quoted: mek, caption: `NAME : *${groupName}*\nMODE SIMI: ${Simihh}\nMODE WELCOME: ${Welcomee}\nMODE ANIME: ${ModeAnime}\nMODE NSFW: ${Nsfww}\nMODE PUBLIC: ${Publicc}\nMEMBER : *${groupMembers.length}*\nADMIN : *${groupAdmins.length}*\nDESK : ${groupDesc}`})
					break
				case 'testime':
					setTimeout( () => {
					frhan.sendMessage(from, 'Waktu habis:v', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '5 Detik lagi', text, {quoted: mek}) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '10 Detik lagi', text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break 
				case 'animecry':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzApi}`, {method: 'get'})
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(limitend(pushname2))
					if (isBanned) return reply(mess.only.benned)
					if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						frhan.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'neonime':
					frhan.updatePresence(from, Presence.composing) 
					data = await fetchFxc7(`https://api.vhtear.com/neonime_search?query=${body.slice(9)}&apikey=${VthearApi}`, {method: 'get'})
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(limitend(pushname2))
					if (isBanned) return reply(mess.only.benned)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					teks = '#############################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.title}\n*link* : ${i.link}\n\n : ${i.desk}\n###########################\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break   
				case 'animehug':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzApi}`, {method: 'get'})
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(limitend(pushname2))
					if (isBanned) return reply(mess.only.benned)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						frhan.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'linkgrup':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				linkgc = await frhan.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				frhan.sendMessage(from, yeh, text, {quoted: mek})
				break
				case 'hidetag':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var value = body.slice(9)
					var group = await frhan.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					frhan.sendMessage(from, options, text)
					break
				case 'gantengcek':
				case 'cekganteng':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					frhan.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: mek })
					break
				case 'cantikcek':
				case 'cekcantik':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					cantik = body.slice(11)
					if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
					const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
					const tik = can[Math.floor(Math.random() * can.length)]
					frhan.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
					break
				  case 'ownergrup':
				  frhan.updatePresence(from, Presence.composing) 
				  options = {
				  text: `Owner Group ini adalah : wa.me/${from.split("-")[0]}`,
				  contextInfo: { mentionedJid: [from] }
				  }
				  frhan.sendMessage(from, options, text, { quoted: mek } )
				  break
				case 'leave': 
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner) return reply(mess.only.ownerB)
				anu = await frhan.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId)
				break
				case 'setname':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				frhan.groupUpdateSubject(from, `${body.slice(9)}`)
				frhan.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, {quoted: mek})
			break
			case 'setdesc':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				frhan.groupUpdateDescription(from, `${body.slice(9)}`)
				frhan.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, {quoted: mek})
			break
			case 'tts':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return frhan.sendMessage(from, 'Kode bahasanya mana gan?\n Kalo Gatau Kode Bahasanya Apa Aja Ketik Saja *${prefix}bahasa*', text, {quoted: mek})
				const gtts = require('./lib/gtts')(args[0])
				if (args.length < 2) return frhan.sendMessage(from, 'Textnya mana gan?', text, {quoted: mek})
				dtt = body.slice(8)
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 600
				? reply('Textnya kebanyakan gan')
				: gtts.save(ranm, dtt, function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
				fs.unlinkSync(ranm)
				buff = fs.readFileSync(rano)
				if (err) return reply('Gagal gan:(')
				reply(mess.wait)
				frhan.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
				fs.unlinkSync(rano)
				})
				})
				await limitAdd(sender) 
			break 
				case 'translate':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return frhan.sendMessage(from, 'Kode Bahasanya???', text, {quoted: mek})
				if (args.length < 2) return frhan.sendMessage(from, 'Text Yg Mau Di translate??', text, {quoted: mek})
				ts = body.slice(11)
				try {
				kode = ts.split("/")[0]
				teks = ts.split("/")[1]
				anu = await fetchFxc7(`https://api.arugaz.my.id/api/edu/translate?lang=${kode}&text=${teks}`)
				reply(mess.wait)
				translate = `Text Asli: *${body.slice(11)}*\n\nHasil: *${anu.text}*`
				frhan.sendMessage(from, translate, text, {quoted: mek})
				} catch {
				reply(mess.error.bug)
				}
				await limitAdd(sender)
			break 
			case 'setpp':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				media = await frhan.downloadAndSaveMediaMessage(mek)
				await frhan.updateProfilePicture (from, media)
				reply(mess.wait)
				reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
			break
			case 'apakah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				apakah = body.slice(1)
				const apakahh = ["Ya","Tidak","Ga tau","ga mungkin","bisa jadi","mungkin"]
				const kah = apakahh[Math.floor(Math.random() * apakahh.length)]
				frhan.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
			break 
			case 'rate':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				rate = body.slice(1)
				ratee = ["100%","95%","90%","85%","80%","75%","70%","65%","60%","55%","50%","45%","40%","35%","30%","25%","20%","15%","10%","5%"]
				const te = ratee[Math.floor(Math.random() * ratee.length)]
				frhan.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'', text, { quoted: mek })
			break 
			case 'watak':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				watak = body.slice(1)
				wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
				const tak = wa[Math.floor(Math.random() * wa.length)]
				frhan.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
			break 
			case 'hobby':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				hobby = body.slice(1)
				hob =["ngeue sapi","ngeue kambing","Memasak","Membantu Atok","Mabar","Nobar","Sosmed an","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri"]
				const by = hob[Math.floor(Math.random() * hob.length)]
				frhan.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
			break 
			case 'bisakah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				bisakah = body.slice(1)
				const bisakahh = ["Bisa","Tidak Bisa","Ga tau","mungkin"]
				const keh = bisakahh[Math.floor(Math.random() * bisakahh.length)]
				frhan.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
			break 
			case 'kapankah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				kapankah = body.slice(1)
				const kapankahh = ["1 Minggu lagi","1 Bulan lagi","1 Tahun lagi","100 tahun lagi","gatau","2030","1 Jam lagi","1 Menit lagi"]
				const koh = kapankahh[Math.floor(Math.random() * kapankahh.length)]
				frhan.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
			break 
			case 'truth':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				anu = await fetchFxc7(`https://xptnbotapinew.herokuapp.com/?truth&apikey=xptn`, {method: 'get'})
				ttrth = `${anu.Dare}`
				truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				frhan.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
				await limitAdd(sender) 
			break 
				case 'dare':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				anu = await fetchFxc7(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`, {method: 'get'})
				der = `${anu.Dare}`
				tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				frhan.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
				await limitAdd(sender) 
			break 
			case 'tagme':
				if (isBanned) return reply(mess.only.benned)
				
				if (!isUser) return reply(mess.only.userB)
				await costum(`@${sender.split('@')[0]}`, text, FarhanGans, `@${sender.split('@')[0]}`)
				break
			case 'lirik':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				teks = body.slice(7)
				try {
				anu = await fetchFxc7(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
				await costum(monospace('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik), text, FarhanGans, FarhanGans2)
				} catch { 
				reply(mess.error.bug)
				}
				await limitAdd(sender) 
			break 
				case 'report':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					const pesan = body.slice(8)
					if (pesan.length > 300) return frhan.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
					var nomor = mek.participant
					const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
					var options = {
					text: teks1,
					contextInfo: {mentionedJid: [nomor]},
					}
					frhan.sendMessage(`${OwnerNumber}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
				break
			case 'memeindo':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				try {
				memein = await fetchFxc7(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`, {method: 'get'})
				buffer = await getBuffer(memein.result)
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
				} catch {
				reply(mess.error.bug)
				}
				await limitAdd(sender)
			break 
			case 'meme':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				try {
				meme = await fetchFxc7(`https://some-random-api.ml/meme`)
				buffer = await getBuffer(meme.result)
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: `${meme.caption}`})
				} catch {
				reply(mess.error.bug)
				}
				await limitAdd(sender)
			break 
				case 'ssweb':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Urlnya mana gan?')
				try {
				teks = `${body.slice(7)}`
				reply(mess.wait)
				buff = await getBuffer(`https://api.vhtear.com/ssweb?link=${teks}&type=pc&apikey=${VthearApi}`, {method: 'get'})
				frhan.sendMessage(from, buff, image, {quoted: mek})
				} catch {
				reply (mess.error.bug)
				}
				await limitAdd(sender)
			break 
			case 'nsfwloli':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (!isNsfw) return reply(' *FALSE* ')
				res = await fetchFxc7(`https://api.vhtear.com/randomloli&apikey=${VthearApi}`, {method: 'get'})
				buffer = await getBuffer(res.result.result)
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(' *ERROR* ')
				}
				await limitAdd(sender)
			break 
			case 'nsfwsolo':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (!isNsfw) return reply(' *FALSE* ')
				res = await fetchFxc7(`http://lolhuman.herokuapp.com/api/random2/solo?apikey=${LolApi}`, {method: 'get'})
				buffer = await getBuffer(res.result)
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(' *ERROR* ')
				}
				await limitAdd(sender)
			break 
			case 'nsfweron':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (!isNsfw) return reply(' *FALSE* ')
				res = await fetchFxc7(`http://lolhuman.herokuapp.com/api/random2/eron?apikey=${LolApi}`, {method: 'get'})
				buffer = await getBuffer(res.result)
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(' *ERROR* ')
				}
				await limitAdd(sender)
			break 
				case 'nsfwlewd':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (!isNsfw) return reply(' *FALSE* ')
				res = await fetchFxc7(`http://lolhuman.herokuapp.com/api/random2/lewd?apikey=${LolApi}`, {method: 'get'})
				buffer = await getBuffer(res.result)
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(' *ERROR* ')
				}
				await limitAdd(sender)
			break 
			case 'nsfwyuri':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (!isNsfw) return reply(' *FALSE* ')
				res = await fetchFxc7(`http://lolhuman.herokuapp.com/api/random2/yuri?apikey=${LolApi}`, {method: 'get'})
				buffer = await getBuffer(res.result)
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(' *ERROR* ')
				}
				await limitAdd(sender)
			break 
				case 'nsfwecchi':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
				if (!isNsfw) return reply(' *FALSE* ')
				res = await fetchFxc7(`http://lolhuman.herokuapp.com/api/random/nsfw/ecchi?apikey=${LolApi}`, {method: 'get'})
				buffer = await getBuffer(res.result)
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(' *ERROR* ')
				}
				await limitAdd(sender)
			break 
				case 'nsfwparadise':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(limits.limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`http://lolhuman.herokuapp.com/api/random/nsfw/hentaiparadise?apikey=${LolApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
				case 'nsfwbigtt':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(limits.limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`http://lolhuman.herokuapp.com/api/random/nsfw/biganimetiddies?apikey=${LolApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
				case 'nsfwclasic':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(limits.limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`http://lolhuman.herokuapp.com/api/random2/classic?apikey=${LolApi}`, {method: 'get'})
						buffer = await getBuffer(res.result.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
				case 'nsfwcum':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(limits.limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`http://lolhuman.herokuapp.com/api/random2/cum_jpg?apikey=${LolApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
				case 'nsfwpussy':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(limits.limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`http://lolhuman.herokuapp.com/api/random2/pussy?apikey=${LolApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
			    case 'nsfwblowjob':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
			    case 'nsfwneko':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
				case 'nsfwtrap':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
				case 'hentai':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
				case 'chord':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				try {
					if (args.length < 1) return reply('Mau Nyari Chord Lagu Apa??')
					tels = body.slice(7)
					anu = await fetchFxc7(`https://alfians-api.herokuapp.com/api/chord?q=${tels}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'infogempa':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(limitend(pushname2))
					try {
					anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/infogempa?apikey=${TobzApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.map)
					reply(mess.wait)
					gempa = `•Lokasi *${anu.lokasi}*\n• Waktu: *${anu.waktu}* \n• Potensi: *${anu.potensi}*\n• Magnitude: *${anu.magnitude}*\n• Kedalaman: *${anu.kedalaman}*\n• Koordinat: *${anu.koordinat}*`
					frhan.sendMessage(from, buff, image, {quoted: mek, caption: gempa})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'kucing':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(limitend(pushname2))
					try {
					anu = await fetchFxc7(`https://api.vhtear.com/randomcat?apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					buff = await getBuffer(anu.result.url)
					frhan.sendMessage(from, buff, image, { quoted: mek , caption: 'meong🐈'})
					} catch {
					reply(mess.bug.error)
					}
					await limitAdd(sender) 
				break 
			case 'anime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
				try {
					anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzApi}`, {method: 'get'})
					reply(mess.wait)
					pok = await getBuffer(anu.result)
					frhan.sendMessage(from, pok, image, { quoted: mek , caption: 'nihhh'})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'megumin':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					try {
					anu = await fetchFxc7(`http://lolhuman.herokuapp.com/api/random/megumin?apikey=${LolApi}`, {method: 'get'})
					reply(mess.wait)
					pok = await getBuffer(anu.result)
					frhan.sendMessage(from, pok, image, { quoted: mek , caption: '*_MEGUMIN_*'})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break  
			case 'animekiss':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzApi}`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						frhan.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'naruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					try {
					reply(mess.wait)
					anu = await fetchFxc7(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					frhan.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					} catch {
					reply(mess.bug.error)
					}
					await limitAdd(sender)
					break 
				case 'minato':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					try {
					anu = await fetchFxc7(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					frhan.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
					break 
				case 'boruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					try {
					anu = await fetchFxc7(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					frhan.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
					break 
				case 'hinata':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					try {
					anu = await fetchFxc7(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					frhan.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
					break 
				case 'sasuke':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					try {
					anu = await fetchFxc7(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					frhan.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'sakura':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					try {
					anu = await fetchFxc7(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					frhan.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 

				case 'kaneki':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					try {
					anu = await fetchFxc7(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${VthearApi}`, {method: 'get'})
					var ka = JSON.parse(JSON.stringify(anu.result));
					var ne =  ka[Math.floor(Math.random() * ka.length)];
					ki = await getBuffer(ne)
					frhan.sendMessage(from, ki, image, { caption: 'kaneki!!', quoted: mek })
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'toukachan':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					try {
					anu = await fetchFxc7(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					frhan.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: mek })
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'rize':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					try {
					anu = await fetchFxc7(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					frhan.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek })
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 	
					break 
				case 'akira':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					try {
					anu = await fetchFxc7(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					frhan.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: mek })
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'itori':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					try {
					anu = await fetchFxc7(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					frhan.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: mek })
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'kurumi':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					try {
					anu = await fetchFxc7(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					frhan.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'miku':
				if (isBanned) return reply(mess.only.benned)
				
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					try {
					anu = await fetchFxc7(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					frhan.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
// akhir fitur anime

				case 'anjing':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchFxc7(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					try {
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					frhan.sendMessage(from, pok, image, { quoted: mek })
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'resepmasakan':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(limitend(pushname2))
					try {
					anu = await fetchFxc7(`https://api.vhtear.com/resepmasakan?query=${body.slice(14)}&apikey=${VthearApi}`, {method: 'get'})
					hasilresep = `*${anu.result.title}*\n${anu.result.desc}\n\n*Untuk Bahan²nya*\n${anu.result.bahan}\n\n*Dan Untuk Tutorialnya*\n${anu.result.cara}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.image)
					frhan.sendMessage(from, buff, image, {quoted: mek, caption: hasilresep})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'cersex':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(limitend(pushname2))
					try {
					anu = await fetchFxc7(`https://api.vhtear.com/cerita_sex&apikey=${VthearApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					sex = await getBuffer(anu.result.image)
					reply (mess.wait)
					cerita = `• *Judul:* ${anu.result.judul}\n\n${anu.result.cerita}`
					frhan.sendMessage(from, sex, image, {quoted: mek, caption: cerita})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'randomkpop':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(limitend(pushname2))
					try {
					anu = await fetchFxc7(`http://lolhuman.herokuapp.com/api/random/exo?apikey=${LolApi}`, {method: 'get'})
					buff = await getBuffer(anu.result)
					frhan.sendMessage(from, buff, image, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'puisiimg':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(limitend(pushname2))
					try {
					pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${VthearApi}`, {method: 'get'})
					frhan.sendMessage(from, pus, image, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					} 
					await limitAdd(sender) 
				break 
				case 'playstore':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(limitend(pushname2)) 
					try {
					ps = `${body.slice(11)}`
					anu = await fetchFxc7(`https://api.vhtear.com/playstore?query=${ps}&apikey=${VthearApi}`, {method: 'get'})
					store = '======================\n'
					for (let ply of anu.result){
					store += `• *Nama Apk:* ${ply.title}\n• *ID:* ${ply.app_id}\n• *Developer:* ${ply.developer}\n• *Deskripsi:* ${ply.description}\n• *Link Apk:* https://play.google.com/${ply.url}\n=====================\n`
					}
					reply(store.trim())
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break
				case 'pornhub':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(limitend(pushname2))
					try {
					reply(mess.wait)
					if (args.length < 1) return reply('teksnya mana gan?')
					teks = body.slice(9)
					anu = await fetchFxc7(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
					teks = `===============\n`
					for (let bokep of anu.result) {
					teks += `Title: ${bokep.title}\nAktor: ${bokep.author}\nViewers: *${bokep.views}*\nDurasi: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
					}
					reply(teks.trim())
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break  
				case 'nekopoi':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(limitend(pushname2))
					try {
					reply(mess.wait)
					if (args.length < 1) return reply('teksnya mana gan?')
					teks = body.slice(9)
					anu = await fetchFxc7(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${VthearApi}`, {method: 'get'})
					teks = `===============\n`
					for (let neko of anu.result) {
					teks += `Title: ${neko.title}\nDeskripsi: ${neko.detail}\n===============\n`
					}
					reply(teks.trim())
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break  
				case 'xvideos':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(limitend(pushname2))
					try {
					reply(mess.wait)
					if (args.length < 1) return reply('teksnya mana gan?')
					anu = await fetchFxc7(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
					teks = `===============\n`
					for (let b of anu.result) {
					teks += `• Title: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
					}
					reply(teks.trim())
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'xnxx':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(limitend(pushname2))
					try { 
					reply(mess.wait)
					if (args.length < 1) return reply('mau nyari apa?')
					anu = await fetchFxc7(`https://api.arugaz.my.id/api/media/xnxx/search?query=${body.slice(6)}`, {method: 'get'})
					teks = `===============\n`
					for (let xnxx of anu.result) {
					teks += `• Title: ${xnxx.title}\n• Info: ${xnxx.info}\n• Link: ${xnxx.link}\n===============\n`
					}
					reply(teks.trim())
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 

				case 'fb':
				  frhan.updatePresence(from, Presence.composing)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				try {
				reply(mess.wait)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('www.facebook.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchFxc7(`https://mhankbarbar.tech/api/epbe?url=${args[0]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					frhan.sendMessage(from, '[ WAIT ] Sedang Diproses\n\nLinknya Only Google Gan Biar Bisa Didownload', text, {quoted: mek})
					efbe = `Title: *${anu.title}*\nSize: *${anu.filesize}\nDipublikasikan Pada: *${anu.published}*`
					tefbe = await getBuffer(anu.thumb)
					frhan.sendMessage(from, tefbe, image, {quoted: mek, caption: efbe})
					buffer = await getBuffer(anu.result)
					frhan.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'Nih Gan'})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 

				case 'instastory':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply('username??')
				if (isLimit(sender)) return reply(limitend(pushname2))
				try {
				instor = `${body.slice(12)}`
				anu = await fetchFxc7(`https://api.vhtear.com/igstory?query=${instor}&apikey=${VthearApi}`, {method: 'get'})
				insta = '=========================\n'
				for (let i of anu.result.story.itemlist) {
				insta += `• *User:* ${anu.result.owner_username}\n• *Type:* ${i.type}\n• *Link:* ${i.urlDownload}\n=========================\n`
				}
				reply(insta.trim())
				} catch {
					reply(mess.error.bug)
					}
				await limitAdd(sender)
				break
			case 'hekerbucin':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				hasil = hekerbucin[Math.floor(Math.random() * (hekerbucin.length))]
				frhan.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
				await limitAdd(sender)
				break 

				case 'ytsearch':
					if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					try {
					anu = await fetchFxc7(`https://api.zeks.xyz/api/yts?q=${body.slice(10)}&apikey=${ZeksApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=======================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.video.title}\n*Id* : https://youtu.be/${i.video.id}\n*Duration* : ${i.video.duration}\n*Views* : ${i.video.views}\n======================\n`
					}
					reply(teks.trim())
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
					break
				case 'tiktok':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limits.limitend(pushname2))
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('vt')) return reply(mess.error.Iv)
					try {
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/tiktokdl?link=${args[0]}&apikey=${VthearApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.video)
					frhan.sendMessage(from, buffer, video, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
					break 
				case 'film':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Mau Cari Film Apa?')
				try {
				reply(mess.wait)
				anu = await fetchFxc7(`http://www.omdbapi.com/?s=${body.slice(6)}&plot=full&apikey=56b1b6f0&r=json`, {method: 'get'})
				hasil = '=========================\n'
				for(let film of anu.Search) {
				hasil += `• *Title:* ${film.Title}\n• *Rilis Tahun:* ${film.Year}\n• *Type:* ${film.Type}\n• *Link:* https://m.imdb.com/title/${film.imdbID}\n=========================\n`
				}
				reply(hasil.trim())
				} catch {
					reply(mess.error.bug)
					}
				await limitAdd(sender) 
					break 
				case 'tiktokstalk':
					try {
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return frhan.sendMessage(from, 'Usernamenya mana gan?', text, {quoted: mek})
					let { user, stats } = await tiktod.getUserProfileInfo(args[0])
					reply(mess.wait)
					teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Menyukai* : ${stats.heart}\n`
					buffer = await getBuffer(user.avatarLarger)
					frhan.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply('Kemungkinan username tidak valid')
					}
					await limitAdd(sender) 
					break  
//creator
				case 'nulis':
				frhan.updatePresence(from, Presence.composing)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				reply(mess.wait)
				teks = `${body.slice(7)}`
			const	nama = teks.split("/")[0];
			const	kelas = teks.split("/")[1];
			const	textnya = teks.split("/")[2];
					buff = `https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${textnya}&tinta=4`
					voss = await fetch(buff)	
					ftype = require('file-type')	
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, mess.success)
					} else {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'textpro':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) {
						return reply('Pilih themenya gan, 1 - 162')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.tech/api/textpro/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('Teksnya juga dong gan')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.tech/api/textpro?pack=${args[0]}&text=${body.slice(8+args[0].length+1)}&apiKey=${BarBarApi}`
					voss = await fetch(anu)	
					ftype = require('file-type')	
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(anu), image, FarhanGans, FarhanGans2)
					} else {
						reply('Terjadi kesalahan, silahkan pilih theme lain')
					}
					break
				case 'ephoto':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) {
						return reply('Pilih themenya gan, 1 - 216')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.tech/api/ephoto/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('Teksnya juga dong gan')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.tech/api/ephoto?pack=${args[0]}&text=${body.slice(8+args[0].length+1)}&apiKey=${BarBarApi}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					//console.log(vuss)
					if (vuss !== undefined) {
					costum(await getBuffer(anu), image, FarhanGans, FarhanGans2)
					} else {
						reply('Terjadi kesalahan, silahkan pilih theme lain')
					}
					break
			case 'ttp':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('yang mau dijadiin text sticker apa?')
				reply(mess.wait)
				try {
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchFxc7(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.stick)
						frhan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					} catch {
					reply(mess.error.bug)
					}
					 await limitAdd(sender)
					break 
				case 'semoji':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('emoji??')
				reply(mess.wait)
					teks = `${body.slice(8)}`
					emoji = emojiUnicode(teks).trim()
					buff = `https://api.zeks.xyz/api/emoji-image?apikey=${ZeksApi}&emoji=${args[0]}`
					voss = await fetch(buff)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, `~ Emoji Maker`)
					} else {
					reply(mess.error.bug)
					}
					 await limitAdd(sender)
					break
				case 'slide':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('*Textnya mana gan?*')
					try {
					reply(mess.wait)
					teks = body.slice(7)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buff = `https://api.vhtear.com/slidingtext?text=${teks}&apikey=${VthearApi}`
					buffer = await getBuffer(buff)
					exec(`wget ${buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					slide = fs.readFileSync(rano)
					frhan.sendMessage(from, slide, sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'cgame':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)
					buff = `https://api.vhtear.com/gamelogo?text=${body.slice(7)}&apikey=${VthearApi}`
					voss = await fetch(buff)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, ` ~ Game Logo Text Maker`)
					} else {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'fbgoldbutton':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)
					buff = `https://naufalhoster.xyz/textmaker/fb_golden_play_button?apikey=Cv5SHS-9ZxAto-HnWqLR&text=${body.slice(14)}`
					voss = await fetch(buff)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, ` ~ Facebook Gold Button Maker`)
					} else {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'cbpink':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)
					buff = `https://api.vhtear.com/blackpinkicon?text=${args[0]}&apikey=${VthearApi}`
					voss = await fetch(buff)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, ` ~ Black Pink Text Maker`)
					} else {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'cparty':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)
					buff = `https://api.vhtear.com/partytext?text=${args[0]}&apikey=${VthearApi}`
					voss = await fetch(buff)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, ` ~ Party Text Maker`)
					} else {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'cstyle':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)
					buff = `https://api.vhtear.com/stylelogo?text=${args[0]}&apikey=${VthearApi}`
					voss = await fetch(buff)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, ` ~ Style Logo Text Maker`)
					} else {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'cglass':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)
					buff = `https://api.vhtear.com/wetglass?text=${args[0]}&apikey=${VthearApi}`
					voss = await fetch(buff)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, ` ~ Wet Glass Text Maker`)
					} else {
						reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'croman':
					if (!isUser) return reply(mess.only.userB)
					
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)
					if (args.length < 1) return reply('Teksnya mana gan??')
					if (args.length > 10) return reply('karakter minimal 10')
					anu = `https://api.vhtear.com/romancetext?text=${args[0]}&apikey=${VthearApi}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						costum(await getBuffer(anu), image, FarhanGans, ` ~ Romance Text Maker`)
					} else {
						reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'clove':
					if (!isUser) return reply(mess.only.userB)
					
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Teksnya mana gan??')
					if (args.length > 10) return reply('karakter minimal 10')
					reply(mess.wait)
					anu = `https://api.vhtear.com/lovemessagetext?text=${args[0]}&apikey=${VthearApi}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						costum(await getBuffer(anu), image, FarhanGans, ` ~ Love Message Maker`)
					} else {
						reply(mess.error.bug)
					}
					await limitAdd(sender)
				break 
				case 'tahta':
					if (isBanned) return reply(mess.only.benned) 
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Teksnya om')
				reply(mess.wait)
					anu = `https://api.vhtear.com/hartatahta?text=${args.join(' ')}&apikey=${VthearApi}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						costum(await getBuffer(anu), image, FarhanGans, ` ~ Harta Tahta ${args[0]}`)
					} else {
						reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'quotemaker':
				try {
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isUser) return reply(mess.only.userB)
					
					gh = `${body.slice(12)}`
					quote = gh.split("/")[0];
					wm = gh.split("/")[1];
					bg = gh.split("/")[2];
					const pref = `Usage: \n${prefix}quotemaker teks/watermark/theme\n\nEx :\n${prefix}quotemaker ini contoh/bicit/random`
					if (args.length < 1) return reply(pref)
					reply(mess.wait)
					anu = await fetchFxc7(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					costum(buffer, image, FarhanGans, ` ~ Quotes Maker`)
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'cphlogo':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(limitend(pushname2))
					gh = `${body.slice(9)}`
					gbl1 = gh.split("/")[0];
					gbl2 = gh.split("/")[1];
					if (args.length < 1) return reply('Teksnya mana gan?')
					reply(mess.wait)
					anu = `https://api.vhtear.com/pornlogo?text1=${gbl1}&text2=${gbl2}&apikey=${VthearApi}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						costum(await getBuffer(anu), image, FarhanGans, ` ~ Pornhub Text Maker`)
					} else {
						reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'cwolf':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(limitend(pushname2))
					cw = `${body.slice(7)}`
					wolf1 = cw.split("/")[0];
					wolf2 = cw.split("/")[1];
					if (args.length < 1) return reply('Teksnya mana gan?')
					reply(mess.wait)
					anu = `https://api.vhtear.com/avatarwolf?text1=${wolf1}&text2=${wolf2}&apikey=${VthearApi}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						costum(await getBuffer(anu), image, FarhanGans, ` ~ Wolf Text Maker`)
					} else {
						reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'cglitch':
				if (isBanned) return reply(mess.only.benned) 
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					cg = `${body.slice(9)}`
					gh1 = cg.split("/")[0];
					gh2 = cg.split("/")[1];
					if (args.length < 1) return reply('Teksnya mana gan?')
					reply(mess.wait)
					anu = `https://api.vhtear.com/glitchtext?text1=${gh1}&text2=${gh2}&apikey=${VthearApi}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(anu), image, FarhanGans, ` ~ Glitch Text Maker`)
					} else {
						reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
					case 'cballon':
				if (isBanned) return reply(mess.only.benned) 
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					cg = `${body.slice(9)}`
					gh1 = cg.split("/")[0];
					gh2 = cg.split("/")[1];
					if (args.length < 1) return reply('Teksnya mana gan?')
					reply(mess.wait)
					anu = `https://api.vhtear.com/balloonmaker?text1=${gh1}&text2=${gh2}&apikey=${VthearApi}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(anu), image, FarhanGans, ` ~ Ballom Text Maker`)
					} else {
						reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 

//akhir kreator
			    case 'jarak':
			    try {
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    jarak = `${body.slice(7)}`
			    ja = jarak.split("/")[0];
			    rak = jarak.split("/")[1];
			    anu = await fetchFxc7(`https://api.vhtear.com/distance?from=${ja}&to=${rak}&apikey=${VthearApi}`, {method: 'get'})
			    frhan.sendMessage(from, `${anu.result.data}`, text, {quoted: mek})
			    } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			    break  
			    case 'infoalamat':
			    try {
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchFxc7(`https://api.vhtear.com/infoalamat?query=${body.slice(12)}&apikey=${VthearApi}`, {method: 'get'})
			        frhan.sendMessage(from, `${anu.result.data}`, text, {quoted: mek})
			        } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			        break 
			    case 'tinyurl':
			    try {
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=${TobzApi}`)
			        tinyurl = `${anu.result}`
			        reply(tinyurl)
			        } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			        break 
			   case 'igstalk':
			   try {
                    if (isBanned) return reply(mess.only.benned)    
   					if (!isUser) return reply(mess.only.userB)
   					if (isLimit(sender)) return reply(limitend(pushname2))
                    anu = await fetchFxc7(`https://api.vhtear.com/igprofile?query=${args[0]}&apikey=${VthearApi}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.picture)
                     reply(mess.wait)
                     hasil = `╭─「 *INSTAGRAM STALKER* 」\n│\n│• Link: https://www.instagram.com/${anu.result.username}\n│• Fullname : ${anu.result.full_name}\n│ • Post: ${anu.result.post_count}\n│• Followers : ${anu.result.follower}\n│• Following : ${anu.result.follow}\n│• Jumlah Postingan: ${anu.result.post_count}\n│• Bio : ${anu.result.biography}\n╰─────────────────────`
                    frhan.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
                    break 
			    case 'mimpi':
			    try {
			    if (isBanned) return reply(mess.only.benned)
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    if (!isUser) return reply(mess.only.userB)
			    if (args.length < 1) return reply('mimpi apa??')
			    reply(mess.wait)
			        anu = await fetchFxc7(`https://api.zeks.xyz/api/artimimpi?apikey=${ZeksApi}&q=${body.slice(7)}`, {method: 'get'})
			        mimpi = `${anu.result.text}`
			        frhan.sendMessage(from, mimpi, text, {quoted: mek})
			        } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			       	break 
				case 'quotes':
				frhan.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				 data = fs.readFileSync('./Fxc7/quotes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randQuote = 'Author: *'+randKey.author+'*\n\n*'+randKey.quotes+'*'
                 frhan.sendMessage(from, randQuote, text, {quoted: mek})
				await limitAdd(sender) 
					break 
				case 'fakta':
				try {
				if (isBanned) return reply(mess.only.benned)   
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				
					anu = await fetchFxc7(`http://indonesian-java-security.ezyro.com/Fakta.php?apikey=${Fxc7Api}`, {method: 'get'})
					fakta = `Faktanya: *${anu.result}*`
					frhan.sendMessage(from, fakta, text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'katabijak':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchFxc7(`https://api.arugaz.my.id/api/random/text/katabijak`, {method: 'get'})
					katabijak = `Kata Bijak: *${anu.result}*`
					frhan.sendMessage(from, katabijak, text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 

			case 'profiltiktok':
			try {
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchFxc7(`https://api.vhtear.com/tiktokprofile?query=${body.slice(14)}&apikey=${VthearApi}`, {method: 'get'})
			        tiktok = await getBuffer(anu.result.picture)
              frhan.sendMessage(from, tiktok, image, {quoted: mek})
			        } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			        break 
		    case 'darkjokes':
				frhan.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				
				reply(mess.wait)
				 data = fs.readFileSync('./Fxc7/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 frhan.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`DARK JOKES\`\`\`'})
				await limitAdd(sender) 
				break  
			case 'katailham':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				hasil = katailham[Math.floor(Math.random() * (katailham.length))]
				frhan.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
				await limitAdd(sender)
				break 
			case 'pasangan':
			try {
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				pa = `${body.slice(10)}`
				sa = pa.split("/")[0];
				ngan = pa.split("/")[1];
				anu = await fetchFxc7(`https://api.zeks.xyz/api/primbonjodoh?apikey=${ZeksApi}&nama1=${sa}&nama2=${ngan}`, {method: 'get'})
				hasil = `Nama Anda: ${anu.result.nama1}\nNama Pasangan: ${anu.result.nama2}\n\nHal Positif: ${anu.result.positif}\n\nHal Negatif: ${anu.result.negatif}`
				buff = await getBuffer(anu.result.thumb)
				frhan.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 

			case 'persengay':
			case 'gaypersen':
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('tag temanmu!')
				rate = body.slice(11)
				persengayy = ["*4%*\n\n*Tobat Ngegay Gan:v*","*9%*\n\n*OTW Tobat Gan:v*","*17%*\n\n*Kang Coli*","*28%*\n\n*Buset Dah Gay🤦*","*34%*\n\n *Korban Tusbol*","*48%*\n\n*Kang Hunter Bool:v*","*59%*\n\n *Bahaya Ni Orang Gan*","*62%*\n\n*Hati² Sama Ni Orang Beneran Dah*","*74%*\n\n*Astagfirullah Kabur Gan🏃🌬️*","83%\n\n Yaallah Nak🤦","97%\n\nAstagfirullah🤦","100%\n\nKabur ae Gan Daripada Ditusbol Bool lu🏃","29%\n\n amann:v","94%\n\n Yaallah🏃","75%\n\nHadehh Gay🤦","82%\n\nMending Lu Tobat Dah🏃","41%\n\nSering Cari Bool Diperempatan","39%\n\nSering Tusbol Bool Topan🏃"]
				const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
				frhan.sendMessage(from, 'Persen Gay: *'+rate+'*\n\nJawaban : '+kl+'', text, { quoted: mek })
				await limitAdd(sender) 
				break  

			case 'pbucin':
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Mana Nama?')
				rate = body.slice(8)
				persenbucin = ["4%\n\nHadehh🤦","9%\n\nMasih Kecil Dah Bucin Ae","17%\n\nNakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Bucin","62%\n\n Hadehhh🏃","74%\n\n bucen Teroosss","83%\n\n Sekali² kek Ga bucin Gitu","97%\n\nHadehh Pakboi²","100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi","29%\n\nKasian Mana Masih Muda","94%\n\n Dasar Pakboi","75%\n\n Ya Ampun"]
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				frhan.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*\n\nJawaban : '+ pbucin +'', text, { quoted: mek })
				await limitAdd(sender) 
				break 
		    case 'map':
		    try {
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                anu = await fetchFxc7(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                frhan.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'url2img':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Tipenya apa gan?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana gan?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchFxc7(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					url2img = await getBuffer(anu.result)
					frhan.sendMessage(from, url2img, image, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
					break 
			    case 'tagall':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]} wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔═══✪ Tag By *${pushname2}* ✪══`+ teks +'╚═══〘 FXC7 BOT 〙═══', members_id, true)
					break
			    case 'mentionall':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔══〘  *${body.slice(12)}*  〙✪══`+teks+'╚═〘 FXC7 BOT 〙', members_id, true)
					break
			    case 'kbbi':
			    try {
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
					if (args.length < 1) return reply('Apa yang mau dicari gan?')
					anu = await fetchFxc7(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
					break 
					case 'grup':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
						frhan.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
						frhan.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'artinama':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Apa yang mau dicari gan?')
					anu = await fetchFxc7(`https://api.zeks.xyz/api/artinama?apikey=${ZeksApi}&nama=${body.slice(10)}`, {method: 'get'})
					frhan.sendMessage(from, anu.result, text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'clearall':
					if (!isOwner) return reply('Kamu siapa?')
					anu = await frhan.chats.all()
					frhan.setMaxListeners(25)
					for (let _ of anu) {
						frhan.deleteChat(_.jid)
					}
					reply(`\`\`\`Sukses delete all chat IRIENEBOT\`\`\``)
					break
                                case 'bcgc':
					frhan.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bcgc = await frhan.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							frhan.sendMessage(_.jid, bcgc, image, {caption: `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Suksess broadcast group')
					}
					break 

				case 'bc':
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await frhan.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await frhan.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							frhan.sendMessage(_.jid, bc, image, {caption: `[ Izin Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *IRIENEBOT BROADCAST* ]\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
				case 'add':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						frhan.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
			    case 'kick':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						frhan.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						frhan.groupRemove(from, mentioned)
					}
					break 
				case 'kicktime':
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
					
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					frhan.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('sukses min:D')
					}, 7000)
					setTimeout( () => {
					frhan.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					frhan.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					frhan.sendMessage(from, 'Asikkk Dapet Makanan nihh:D', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah Diterima min:D')
					}, 0)
					break
				case 'promote':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda menjdi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						frhan.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						frhan.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
					case 'd':
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					frhan.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
			    case 'demote':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda tidak menjadi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						frhan.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, Menurunka : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
						frhan.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'adminlist':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'toimg':
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frhan.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						costum(buffer, image, FarhanGans, FarhanGans2)
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
				case 'antivirtex':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isUser) return reply(mess.only.userB)
                    
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik on untuk mengaktifkan')
					if ((args[0]) === 'on') {
						if (isAntiVirtex) return reply('anti virtex group sudah aktif')
						_antivirtex.push(from)
						fs.writeFileSync('./database/json/antivirtex.json', JSON.stringify(_antivirtex))
						reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif')
						_antivirtex.splice(from, 1)
						fs.writeFileSync('./database/json/antivirtex.json', JSON.stringify(_antivirtex))
						reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break
				case 'simih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isSimi) return reply('Mode simi sudah aktif')
						_samih.push(from)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(_samih))
						reply(`\`\`\`✓Sukses mengaktifkan mode simi di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isSimi) return reply('Mode simi Sudah Off sebelumnya')
						_samih.splice(from, 1)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(_samih))
						reply(`\`\`\`✓Sukes menonaktifkan mode simi di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break
			    case 'nsfw':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('Mode nsfw sudah aktif')
						_nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(_nsfw))
						reply(`\`\`\`✓Sukses mengaktifkan mode nsfw di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isNsfw) return reply('Mode Nsfw sudah Off Sebelumnya')
						_nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(_nsfw))
						reply(`\`\`\`✓Sukes menonaktifkan mode nsfw di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break
				case 'modeanime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAnime) return reply('Mode anime sudah aktif')
						_anime.push(from)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(_anime))
						reply(`\`\`\`✓Sukses mengaktifkan mode anime di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAnime) return reply('Mode Anime Sudah Off Sebelumnya')
						_anime.splice(from, 1)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(_anime))
						reply(`\`\`\`✓Sukes menonaktifkan mode anime di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break
				case 'welcome':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isWelkom) return reply('Udah aktif gan')
						_welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(_welkom))
						reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isWelkom) return reply('Mode Welcome Sudah Off Sebelumnya')
						_welkom.splice(from, 1)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(_welkom))
						reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break 
				case 'antilink':
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik !antilink on untuk mengaktifkan')
					if ((args[0]) === 'on') {
						if (isAntiLink) return reply('anti link sudah on')
						_antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(_antilink))
						reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiLink) return reply('anti link sudah off sebelumnya')
						_antilink.splice(from, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(_antilink))
						reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break 
				case 'badword':
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik !badword on untuk mengaktifkan')
					if ((args[0]) === 'on') {
						if (isBadWord) return reply('anti badword sudah aktif')
						_badword.push(from)
						fs.writeFileSync('./database/json/badword.json', JSON.stringify(_badword))
						reply(`\`\`\`✓Sukses mengaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isBadWord) return reply('anti badword sudah off sebelumnya')
						_badword.splice(from, 1)
						fs.writeFileSync('./database/json/badword.json', JSON.stringify(_badword))
						reply(`\`\`\`✓Sukses menonaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break
				case 'caklontong':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				
				data = fs.readFileSync('./Fxc7/caklontong.js');
				cak = JSON.parse(data);
				lontong = Math.floor(Math.random() * cak.length);
				randKey = cak[lontong];
				Pertanyaan = randKey.result.soal
				Jawaban = '\n*'+randKey.result.desc +'*'
					setTimeout( () => {
					frhan.sendMessage(from, Jawaban, text, {quoted: mek})
					}, 30000)
					setTimeout( () => {
					frhan.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s
					frhan.sendMessage(from, Pertanyaan, text, {quoted: mek})
					await limitAdd(sender) 
				break
				case 'tebakgambar':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					data = fs.readFileSync('./Fxc7/tebakgambar.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					randSoal = await getBuffer(randKey.result.soalImg)
					setTimeout( () => {
					frhan.sendMessage(from, '*➸ Jawaban :* '+ randKey.result.jawaban +'\n', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, randSoal, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break  
				case 'family100':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				data = fs.readFileSync('./Fxc7/family100.js');
				fami = JSON.parse(data);
				ly100 = Math.floor(Math.random() * fami.length);
				randKey = fami[ly100];
				Pertanyaan = randKey.result.soal
					setTimeout( () => {
					frhan.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_Waktu Anda Habis_')
					}, 29000)
					setTimeout( () => {
					frhan.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'randombokep':
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				
				 data = fs.readFileSync('./Fxc7/18.js');
				 jsonData = JSON.parse(data);
				 randIndex = Math.floor(Math.random() * jsonData.length);
				 randKey = jsonData[randIndex];
				 randBokep = await getBuffer(randKey.image)
				 reply(mess.wait)
				 randTeks = randKey.teks
				 frhan.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				await limitAdd(sender) 
				break

				case 'clone':
				if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag gan')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await frhan.getProfilePicture(id)
						buffer = await getBuffer(pp)
						frhan.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
//setting bot
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./database/json/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
				break
				case 'setlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					limitt = args[0]
					setting.limitt = limitt
					fs.writeFileSync('./database/json/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Limit berhasil di ubah menjadi : ${limitt}`)
				break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					memberlimit = args[0]
					setting.memberlimit = memberlimit
					fs.writeFileSync('./database/json/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Limit Member berhasil di ubah menjadi : ${memberLimit}`)
				break 
				case 'setnamebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = args[0]
					setting.name = name
					fs.writeFileSync('./database/json/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Nama Bot berhasil di ubah menjadi : ${name}`)
				break 
				case 'setreply':
					if (!isOwner) return reply(mess.only.ownerB)
					frhan.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					FarhanGans2 = args[0]
					setting.FarhanGans2 = FarhanGans2
					fs.writeFileSync('./database/json/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`reply berhasil di ubah menjadi : ${rmenu}`)
				break 
////////////
				case 'wait':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await frhan.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							frhan.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break 
					
			case 'quran':
			try {
			 if (isBanned) return reply(mess.only.benned)    
			 if (!isUser) return reply(mess.only.userB)
			 frhan.updatePresence(from, Presence.composing) 
			 if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchFxc7(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					frhan.sendMessage(from, quran, text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'infocuaca':
				try {
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					frhan.updatePresence(from, Presence.composing)
					if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Kirim perintah *!cuaca [tempat]*\nContoh : *!cuaca Banyuwangi')
					reply(mess.wait)
					tempat = `${body.slice(11)}`
					weather = await fetchFxc7('https://videfikri.com/api/cuaca/?daerah='+ tempat, {method: 'get'})
					if (weather.error) {
					 reply(from, weather.error, text)
					 } else {
					  frhan.sendMessage(from, `➸ Tempat : ${weather.result.tempat}\n\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}\n➸ Deskripsi : ${weather.result.desc}\n➸ Kelembapan : ${weather.result.kelembapan}\n➸ Suhu : ${weather.result.suhu}\n➸ Udara : ${weather.result.udara}`, text, {quoted: mek})
					  }
					  } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
				 break 

         case 'pinterest':
         try {
         if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Mau Nyari Foto Apa???')
					pinte = body.slice(11)
					anu = await fetchFxc7(`https://api.vhtear.com/pinterest?query=${pinte}&apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pinehg = await getBuffer(trest)
					frhan.sendMessage(from, pinehg, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
			case 'instaimg':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com/')) return reply(mess.error.lv)
				reply(mess.wait)
					buffer = `https://api.zeks.xyz/api/ig?url=${args[0]}&apikey=${ZeksApi}`
					voss = await fetch(buffer)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					frhan.sendMessage(from, await getBuffer(buffer.result.url), image, {quoted: mek, caption: mess.success})
					} else {
					reply(mess.error.bug)
					}
					 await limitAdd(sender)
					break
				case 'instavid':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com/')) return reply(mess.error.lv)
				reply(mess.wait)
					buffer = `https://api.zeks.xyz/api/ig?url=${args[0]}&apikey=${ZeksApi}`
					voss = await fetch(buffer)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					frhan.sendMessage(from, await getBuffer(buffer.result.url), video, {quoted: mek, caption: mess.success})
					} else {
					reply(mess.error.bug)
					}
					 await limitAdd(sender)
					break
				case 'jadwalsholat':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Masukan nama daerah!!')
					sholat = `${body.slice(14)}`
					anu = await fetchFxc7(`http://lolhuman.herokuapp.com/api/sholat/${sholat}?apikey=${LolApi}`, {method: 'get'})
					reply(mess.wait)
					hasil = `• *Wilayah:* ${anu.result.wilayah}\n• *Tanggal:* ${anu.result.tanggal}\n• *imsak:* ${anu.result.imsak}\n• *subuh:* ${anu.result.subuh}\n• *terbit:* ${anu.result.terbit}\n• *dhuha:* ${anu.result.dhuha}\n• *dzuhur:* ${anu.result.dzuhur}\n• *ashar:* ${anu.result.ashar}\n• *maghrib:* ${anu.result.maghrib}\n• *isya:* ${anu.result.isya}`
					frhan.sendMessage(from, hasil, text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'jadwaltv':
					try {
					if (isBanned) return reply(mess.wait.benned)
					if (!isUser) return reply(mess.only.userB)
					
					frhan.updatePresence(from, Presence.composing)
					if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1)return reply('Nama Channelnya??')
					reply(mess.wait)
					jadwaltv = `${body.slice(10)}`
					anu = await fetchFxc7(`http://nzcha-apii.herokuapp.com/jadwaltv?channel=${jadwaltv}`, {method: 'get'})
					jtv = '===========================\n'
					for (let jdwl of anu.result){
					jtv += `• *Jam:* ${jdwl.jam} => *Tayangan:* ${jdwl.tayang}\n===========================\n`
					}
					reply(jtv.trim())
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
				break 
            case 'jadwaltvnow':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				frhan.updatePresence(from, Presence.composing) 
				if (isLimit(sender)) return reply(limitend(pushname2))
				anu = await fetchFxc7(`http://lolhuman.herokuapp.com/api/jadwaltv/now?apikey=${LolApi}`, {method: 'get'})
				reply(mess.wait)
				if (anu.result) return reply(anu.result)
				frhan.sendMessage(from, anu.result, text, {quoted: mek})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
// premium user
         case 'joox':
         try {
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPrem) return reply(mess.only.premium)
				frhan.updatePresence(from, Presence.recording)
                anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=${TobzApi}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `╭─「 *JOOX DOWNLOADER* 」\n│\n│ *• Judul* : ${anu.result.judul}\n│ *• Album* : ${anu.result.album}\n│ *• Dipublikasi* : ${anu.result.dipublikasi}\n│\n│ *TUNGGU SEBENTAR LAGI DIKIRIM*\n│ *MOHON JANGAN SPAM*\n╰─────────────────────`
                bufferddd = await getBuffer(anu.result.thumb)
                 reply(mess.wait)
                buff = await getBuffer(anu.result.mp3)
                frhan.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
                frhan.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: mek})
                } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
                break  
                
          case 'snack':
			try {
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPrem) return reply(mess.only.premium)
				frhan.updatePresence(from, Presence.recording)
				if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
                anu = await fetchFxc7(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sck = `「 *SNACK VIDEO DOWNLOADER* 」\n\n*• Format:* ${anu.format}\n*• Size:* ${anu.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM*`
                bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
                 reply(mess.wait)
                buff = await getBuffer(anu.result)
                frhan.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
                frhan.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
                } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
                break  
                
       case 'ytmp4':
    				try {
    				if (isBanned) return reply(mess.only.benned)    
    				if (!isPrem) return reply(mess.only.premium)
    				if (!isUser) return reply(mess.only.userB)
    				frhan.updatePresence(from, Presence.recording)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply(mess.error.Iv)
					anu = await fetchFxc7(`https://mhankbarbar.tech/api/ytv?url=${args[0]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `╭─「 *YOUTUBE MP4 DOWNLOADER* 」\n│\n│• *Title:* ${anu.title}\n│• *Size:* ${anu.filesize}\n│\n│ Tunggu Sebentar 1 menit Mungkin Agak Lama \n│ Karna Mendownload Video\n╰─────────────────────`
					buff = await getBuffer(anu.thumb)
					reply(mess.wait)
					frhan.sendMessage(from, buff, image, {quoted: mek, caption: ytt})
					buffer = await getBuffer(anu.result)
					frhan.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Nih Gan'})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'playmp3':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isPrem) return reply(mess.only.premium)
				if (!isUser) return reply(mess.only.userB)
				frhan.updatePresence(from, Presence.recording) 
				reply(mess.wait)
				playmp3 = body.slice(9)
				anu = await fetchFxc7(`https://api.vhtear.com/ytmp3?query=${playmp3}&apikey=${VthearApi}`, {method: 'get'})
				infomp3 = `╭─「 *TIMELINE PLAY MP3* 」\n│ *• Judul:* ${anu.result.title}\n│ *• Durasi:* ${anu.result.duration}\n│ *•Size:* ${anu.result.duration}\n│\n│ *TUNGGU SEBENTAR LAGI DIKIRIM*\n│ *MOHON JANGAN SPAM YA BEB*\n╰─────────────────────`
				buffer = await getBuffer(anu.result.image)
				lagu = await getBuffer(anu.result.mp3)
				frhan.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek, ptt: true})
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
			case 'ytmp3':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isPrem) return reply(mess.only.premium)
				if (!isUser) return reply(mess.only.userB)
				frhan.updatePresence(from, Presence.recording) 
				reply(mess.wait)
				playmp3 = body.slice(9)
				anu = await fetchFxc7(`https://naufalhoster.xyz/dl/youtube?apikey=Cv5SHS-9ZxAto-HnWqLR&url=${args[0]}`, {method: 'get'})
				mp3 = `${anu.result}`
				infomp3 = `╭─「 *TIMELINE PLAY MP3* 」\n│ *• Judul:* ${mp3.title}\n│ *•Channel:* ${mp3.uploader}\n│ *• Durasi:* ${mp3.duration}\n│ *•Size:* ${mp3.audio.size}\n│ *• Like:* ${mp3.likeCount}\n│ *• Dislike:* ${mp3.dislikeCount}\n│ *• Rating:* ${mp3.rating}\n│ *• Viewers:* ${mp3.viewCount}\n│ *TUNGGU SEBENTAR LAGI DIKIRIM*\n│ *MOHON JANGAN SPAM YA BEB*\n╰─────────────────────`
				buffer = await getBuffer(mp3.thumbnail)
				lagu = await getBuffer(mp3.audio.url)
				frhan.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${mp3.title}.mp3`, quoted: mek, ptt: true})
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
			case 'smule':
				try {
				frhan.updatePresence(from, Presence.recording) 
				if (isBanned) return reply(mess.only.benned)
				if (!isPrem) return reply(mess.only.premium)
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply('Urlnya mana gan?')
				if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
				reply(mess.wait)
				anu = await fetchFxc7(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				teks = `*Title* : ${anu.title}\n\n Tunggu Sebentar 1 menit Mungkun Agak Lama Karna Mendownload Video`
				thumb = await getBuffer(anu.thumb)
				frhan.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
				buffer = await getBuffer(anu.result)
				frhan.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Nih Gan'})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 	
			break  
// akhir Fitur Premium
			
			case 'asupan':
			frhan.updatePresence(from, Presence.composing) 
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				
				reply(mess.wait)
				data = fs.readFileSync('./Fxc7/asupan.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				frhan.sendMessage(from, asupan, video, {quoted: mek, caption: '```ASUPAN NIH:V```'})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break  
			case 'wiki':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('teks nya mana om?')
				reply(mess.wait)
				wiki = `${body.slice(6)}`
				anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/wiki?q=${wiki}&apikey=${TobzApi}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				wikii = `${anu.result}`
				frhan.sendMessage(from, wikii, text, {quoted: mek})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break  
			
			case 'pastebin':
                try {
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				paste = `${body.slice(10)}`
                   anu = await fetchFxc7(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
                   frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
                   } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 				
                   break 
		case 'bpfont':
			try {
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
			
			bp = `${body.slice(8)}`
			anu = await fetchFxc7(`https://api.terhambar.com/bpk?kata=${bp}`, {method: 'get'})
			reply (anu.text)
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break  
		case 'spamcall':
			try {
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
			
			call = `${body.slice(11)}`
			anu = await fetchFxc7(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			frhan.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break  
		case 'spamgmail':
			try {
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			
			if (isLimit(sender)) return reply(limitend(pushname2))
			spam = `${body.slice(10)}`
			anu = await fetchFxc7(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
			frhan.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break  
		case 'quransurah':
			try {
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			if (isLimit(sender)) return reply(limitend(pushname2))
			reply(mess.wait)
			surah = `${body.slice(12)}`
			anu = await fetchFxc7(`https://api.zeks.xyz/api/quran?no=${surah}&apikey=${ZeksApi}`, {method: 'get'})
			quran = `Surah Al-Qur\`an Nomer: *${surah}*\nSurah: *${anu.surah}*\nDiturunkan Dikota: *${anu.type}*\nJumlah Ayat: *${anu.jumlah_ayat}*\n\n*${anu.ket}\n=============================\n`
			for (let surah of anu.ayat) {
			quran += `${surah.number}\n${surah.text}\n${surah.translation_id}\n=====================\n`
			}
			reply(quran.trim())
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
		case 'bitly':
			try {
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			
			if (isLimit(sender)) return reply(limitend(pushname2))
			link = `${body.slice(7)}`
			anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/bitly?url=${link}&apikey=${TobzApi}`, {method: 'get'})
			bitly = `${anu.result}`
			frhan.sendMessage(from, bitly, text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break  
			case 'textstyle':
			try {
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			
			if (isLimit(sender)) return reply(limitend(pushname2))
			reply(mess.wait)
			style = `${body.slice(11)}`
			anu = await fetchFxc7(`https://api.arugaz.my.id/api/random/text/fancytext?text=${style}`, {method: 'get'})
			reply (anu.result)
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break  
			case 'pantun':
			try {
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			anu = await fetchFxc7(`https://api.zeks.xyz/api/pantun?apikey=${ZeksApi}`, {method: 'get'})
			frhan.sendMessage(from, `${anu.result.pantun}`, text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break  
			
		case 'jamdunia':
		try {
		if (isLimit(sender)) return reply(limitend(pushname2))
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			reply(mess.wait)
		 jamdunia = `${body.slice(10)}`
			anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/jamdunia?lokasi=${jamdunia}&apikey=${TobzApi}`, {method: 'get'})
			wtime = `*${anu.result.title}*\n*${anu.result.date}*\n*${anu.result.time}*`
			frhan.sendMessage(from, wtime, text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break  
			
		 case 'tomp3':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
				
                	frhan.updatePresence(from, Presence.recording) 
					if (!isQuotedVideo) return reply('_*Reply Video nya Gan!*_')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frhan.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
						bufferlkj = fs.readFileSync(ran)
						frhan.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
					case 'tovideo':
					  if (!isUser) return reply(mess.only.userB)
					  if (!isQuotedSticker) return reply('*☒* Reply stikernya')
					  reply(mess.wait)
					  anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					  anum = await frhan.downloadAndSaveMediaMessage(anumedia)
					  ran = getRandom('.webp')
					  exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
					    fs.unlinkSync(anum)
					    if (err) return reply('Gagal, pada saat mengkonversi sticker ke Video')
					    buffer = fs.readFileSync(ran)
					    frhan.sendMessage(from, buffer, video, {quoted: mek, caption: 'Buat apa sii..'})
					    fs.unlinkSync(ran)
					    })
					    break

				case 'setppbot':
					if (!isOwner) return reply(mess.only.ownerB)
				    frhan.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frhan.downloadAndSaveMediaMessage(enmedia)
					await frhan.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya🙂')
					break

// Fitur Defacer
case 'whois':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				whois = body.slice(7)
				anu = await fetchFxc7(`https://api.banghasan.com/domain/whois/${whois}`, {method: 'get'})
				reply(anu.hasil)
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
case 'hostsearch':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				hostsearch = body.slice(12)
				anu = await fetchFxc7(`https://api.banghasan.com/domain/hostsearch/${hostsearch}`, {method: 'get'})
				reply(anu.hasil)
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
case 'dnslookup':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				dnslookup = body.slice(7)
				anu = await fetchFxc7(`https://api.banghasan.com/domain/dnslookup/${dnslookup}`, {method: 'get'})
				reply(anu.hasil)
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
case 'geoip':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				geoip = body.slice(7)
				anu = await fetchFxc7(`https://api.banghasan.com/domain/geoip/${geoip}`, {method: 'get'})
				reply(anu.hasil)
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
case 'nping':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				nping = body.slice(7)
				anu = await fetchFxc7(`https://api.banghasan.com/domain/nping/${nping}`, {method: 'get'})
				reply(anu.hasil)
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
				case 'dorking':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				dork = `${body.slice(9)}`
					anu = await fetchFxc7(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					hasil = `${anu.result}`
					frhan.sendMessage(from, hasil, text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break  
			case 'encode64':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				encode64 = `${body.slice(10)}`
				anu = await fetchFxc7(`https://api.vhtear.com/encode_string?string=${encode64}&apikey=${VthearApi}`, {method: 'get'})
				frhan.sendMessage(from, anu.result.encode_string, text, {quoted: mek})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
			case 'decode64':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				decode64 = `${body.slice(10)}`
				anu = await fetchFxc7(`https://api.vhtear.com/decode_string?string=${decode64}&apikey=${VthearApi}`, {method: 'get'})
				frhan.sendMessage(from, anu.result.decode_string, text, {quoted: mek})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
			case 'hexaencode':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				hexaencode = `${body.slice(12)}`
				anu = await fetchFxc7(`https://api.vhtear.com/hex_to_text?string=${hexaencode}&apikey=${VthearApi}`, {method: 'get'})
				frhan.sendMessage(from, anu.result.hex_code, text, {quoted: mek})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
			case 'hexadecode':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				hexadecode = `${body.slice(12)}`
				anu = await fetchFxc7(`https://api.vhtear.com/hex_to_text?string=${hexadecode}&apikey=${VthearApi}`, {method: 'get'})
				frhan.sendMessage(from, anu.result.result_text, text, {quoted: mek})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
				case 'encbinary':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				encbinary = `${body.slice(11)}`
					anu = await fetchFxc7(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break  
				case 'decbinary':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				decbin = `${body.slice(11)}`
					anu = await fetchFxc7(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break  
				case 'encoctal':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				encoc = `${body.slice(10)}`
					anu = await fetchFxc7(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
					break  
				case 'decoctal':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				decoc = `${body.slice(10)}`
					anu = await fetchFxc7(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break  
				break 
			case 'hashidentifier':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					  hash = `${body.slice(16)}`
					  anu = await fetchFxc7(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  frhan.sendMessage(from, hasilhash, text, {quoted: mek})
					  } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
					  break 
// akhir encrypt & decrypt Fitur

                case 'addbucin':
                if (!isOwner) return reply(mess.only.ownerB)
				huu = body.slice(10)
						bucinrandom.push(huu)
						fs.writeFileSync('./database/json/bucin.json', JSON.stringify(bucinrandom))
						reply(`Sukses, Kata \n*${huu}*\n Telah Ditambahkan ke database`)
					break
					case 'bucin':
						if (isBanned) return reply(mess.only.benned)    
						if (!isUser) return reply(mess.only.userB)
						hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
						frhan.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
						await limitAdd(sender)
					break
					case 'bacotandilan':
						if (isBanned) return reply(mess.only.benned)    
						if (!isUser) return reply(mess.only.userB)
						hasil = randomdilan[Math.floor(Math.random() * (randomdilan.length))]
						frhan.sendMessage(from, '*'+hasil+'*\n\n~ *Dilan*', text, {quoted: mek})
						await limitAdd(sender)
					break
				case 'moddroid':
					try {
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzApi}`, {method: 'get'})
					teks = `╭─「 *MOD DROID SCRAPPER* 」\n│• *Nama*: ${anu.result.title}\n│• *Publisher*: ${anu.result.publisher}\n│• *Mod info:* ${anu.result.mod_info}\n│• *Size*: ${anu.result.size}\n│• *Latest version*: ${anu.result.latest_version}\n│• *Genre*: ${anu.result.genre}\n│• *Link:* ${anu.result.link}\n│• *Download*: ${anu.result.download}\n╰─────────────────────`
					buffer = await getBuffer(anu.result.image)
					frhan.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
				break
		case 'happymod':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
			anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzApi}`, {method: 'get'})
			teks = `╭─「 *HAPPY MOD SCRAPPER* 」\n│• *Nama*: ${anu.result.title}\n│• *Version*: ${anu.result.version}\n│• *Size:* ${anu.result.size}\n│• *root*: ${anu.result.root}\n│• *Purchase*: ${anu.result.price}\n│• *Link*: ${anu.result.link}\n│• *Download*: ${anu.result.download}\n╰─────────────────────`
			buffer = await getBuffer(anu.result.image)
			frhan.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
			break 
		case 'tiktoksearch':
			try {
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
			anu = await fetchFxc7(`https://api.vhtear.com/tiktokhastag?query=${body.slice(14)}&apikey=${VthearApi}`, {method: 'get'})
			tts = '====================================\n'
			for (let tk of anu.result){
			tts += `• *Title:* ${tk.title}\n• *Nama:* ${tk.name}\n• *Username:* ${tk.nickName}\n• *Link:* ${tk.urlVideo}\n====================================\n`
			}
			reply(tts.trim())
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
		break
		case 'wattpad':
			try {
			if (isBanned) return reply(mess.wait.benned)
			if (!isUser) return reply(mess.only.userB)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (args.length < 1)return reply('Nama Channelnya??')
			reply(mess.wait)
			wttpd = `${body.slice(9)}`
			anu = await fetchFxc7(`http://nzcha-apii.herokuapp.com/wattpad-search?q=${wttpd}`, {method: 'get'})
			wattp = '===========================\n'
			for (let wpadd of anu.result){
			wattp += `• *Title:* ${wpadd.title}\n• *Link Url:* ${wpadd.url}\n===========================\n`
			}
			reply(wattp.trim())
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
		break  
		case 'tanggaljadian':
			try {
			if (isBanned) return reply(mess.wait.benned)
			if (!isUser) return reply(mess.only.userB)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (args.length < 1) return reply('tanggal berapa??\n_Example: !tanggaljadian 01/05/2003')
			tggl = body.slice(15)
			ja = tggl.split("/")[0];
			di = tggl.split("/")[1];
			an = tggl.split("/")[2];
			anu = await fetchFxc7(`https://videfikri.com/api/primbon/tgljadian/?tgl=${ja}&bln=${di}&thn=${an}`, {method: 'get'})
			frhan.sendMessage(from, anu.result.hasil, text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
		break 
			case 'zodiak':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('_Example: !zodiak taurus')
				anu = await fetchFxc7(`https://api.vhtear.com/zodiak?query=${body.slice(8)}&apikey=${VthearApi}`, {method: 'get'})
				hzodiak = `• *Zodiak:* ${anu.result.zodiak}\n• *Nomer Keberuntungan:* ${anu.result.nomorKeberuntungan}\n• ${anu.result.ramalan}`
				reply(mess.wait)
				buff = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-48FfFR7hqlRBp4rZhVISyO9YRUvhTMnGw&usqp=CAU`)
				frhan.sendMessage(from, buff, image, {quoted: mek, caption: hzodiak})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
			break
			case 'randomexo':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				anu = await fetchFxc7(`http://lolhuman.herokuapp.com/api/random/exo?apikey=${LolApi}`, {method: 'get'})
				buff = await getBuffer(anu.result)
				frhan.sendMessage(from, buff, image, {quoted: mek, caption: 'EXO.....'})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
			break 
			case 'blackpink':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				anu = await fetchFxc7(`https://api.shizukaa.xyz/blackpink?apikey=itsmeiky633`, {method: 'get'})
				buff = await getBuffer(anu.result)
				frhan.sendMessage(from, buff, image, {quoted: mek, caption: 'BLACK PINK.....'})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
			break 
			case 'randombts':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
				anu = await fetchFxc7(`http://lolhuman.herokuapp.com/api/random/bts?apikey=${LolApi}`, {method: 'get'})
				buff = await getBuffer(anu.result)
				frhan.sendMessage(from, buff, image, {quoted: mek, caption: 'BTS.....'})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
			case 'antivirtexx':
			await costum(antivirtexx(), text, FarhanGans, `Buset Dahh Etekel🔥`)
			break 
			case 'addstatus':
					if (!isOwner) return reply(mess.only.ownerB)
					frhan.sendMessage('status@broadcast', `${args[0]}`, extendedText)
					reply('✓Sukses...')
			break 
	// new features
		case 'addpremium':
			if (!isOwner) return reply(mess.only.ownerB)
			expired = "30d"
			const pnom = {id: `${args[0].replace("@",'')}@s.whatsapp.net`, expired: Date.now() + toMs(expired) }
			premium.push(pnom) 
			fs.writeFileSync('./database/json/premium.json',JSON.stringify(premium))
			reply(`「 PREMIUM ADD 」*\n*Name* : ${pnom}\n*Expired* : 30 DAY\n*thank for order premium*`)
		break
		case 'dellpremium':
			if (!isOwner) return reply(mess.only.ownerB)
			const hnom = `${args[0].replace('@','')}@s.whatsapp.net`
			var arr = premium
			for( var dp = 0; dp < arr.length; dp++){ 
			if ( arr[dp] === hnom) { 
			arr.splice(dp, 1); 
			dp--; 
			fs.writeFileSync('./database/json/premium.json',JSON.stringify(arr))
			}
			}
			reply(`*「 PREMIUM DELETE 」*\n*Name* : ${hnom}\n*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`)
			break 
		case 'premiumlist':
			if (!isUser) return reply(mess.only.userB)
			let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
			let nomorList = 0
			const deret = getAllPremiumUser()
			const arrayPremi = []
			for (let i = 0; i < deret.length; i++) {
			const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
			arrayPremi.push(getAllPremiumUser()[i])
			nomorList++
			listPremi += `${nomorList}. wa.me/${getAllPremiumUser()[i].split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
			}
			await reply(listPremi)
		break
		case 'addbadword':
			if (!isOwner) return reply(mess.only.ownerB)
			if (!isGroupAdmins) return reply(mess.only.admin)
			const bw = body.slice(12)
			bad.push(bw)
			fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
			reply('Success ✓')
		break
		case 'dellbadword':
			if (!isOwner) return reply(mess.only.ownerB)
			if (!isGroupAdmins) return reply(mess.only.admin)
			let dbw = body.slice(12)
			bad.splice(dbw)
			fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
			reply('Success ✓')
		break 
		case 'listbadword':
			let lbw = `list BAD WORD\nTotal : ${bad.length}\n`
			for (let i of bad) {
			lbw += `➸ ${i.replace(bad)}\n`
			}
			reply(lbw)
		break 
				default:
					if (body.startsWith(`${prefix}${command}`)) {
					reply(`Maaf kak, Command Salah Coba Periksa Kembali`)
				}
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[IRIENEBOT]','aqua'), 'Command Tidak Terdaftar', color(sender.split('@')[0]))
					}
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'white'))
		}
	})
}
starts()
