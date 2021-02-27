const fs = require('fs');

const exif = async (packname, author, filename) => new Promise(async (resolve, reject) => {
	try{
		var stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2" //not sure what this does
		var googlelink = "https://play.google.com/store/apps/details?id=com.marsvard.stickermakerforwhatsapp";
		var applelink = "https://itunes.apple.com/app/sticker-maker-studio/id1443326857";
		let json = {"sticker-pack-id":stickerpackid, "sticker-pack-name":packname, "sticker-pack-publisher": author, "android-app-store-link":googlelink, "ios-app-store-link":applelink}
		let len = JSON.stringify(json).length
		const f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
		const aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
		if (len > 256) {
			len = len - 256
			aaa.unshift(0x01)
			} else {
				aaa.unshift(0x00)
			}
			const fff = Buffer.from(aaa)
			const ffff = Buffer.from(JSON.stringify(json))
			if (len < 16) {
				len = len.toString(16)
				len = "0" + len
			} else {
				len = len.toString(16)
			}
			const ff =  Buffer.from(len, "hex")
			const buffer = Buffer.concat([f, ff, fff, ffff])
			fs.writeFile(filename, buffer, function (err) {
				if (err) return reject('Terjadi Kesalahan Pada System')
			});
		} catch (e) {
			console.log(e)
			reject('Terjadi Kesalahan Pada System')
		}
	})
module.exports = { exif }