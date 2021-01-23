
const help = (prefix, ig, name, uptime, pushname2, user, tanggal, jam) => { 
	return `
	
\`\`\`Follow My Instagram\`\`\`
${ig}

\`\`\`GROUP OFFICIAL\`\`\`
https://chat.whatsapp.com/GHC5djoQJrcGBJFwYQuQoB

┏━━━━━❬ *USER ${name}* ❭━━━━━━━⊱
┃╭───────────────────────
┃├➲ \`\`\`Hai\`\`\`👋 *${pushname2}*
┣━━━━━━━━━━━━━━━━━
┃├➲ \`\`\`I am\`\`\` *${name}*
┃╰───────────────────────
┃
┃╭───────────────────────
┃├➲ \`\`\`Total Pengguna:\`\`\` *${user.length} User*
┣━━━━━━━━━━━━━━━━━
┃├➲ \`\`\`Total Donasi:\`\`\` *0%* 🙂
┃╰───────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━❬ *REGULATION ${name}* ❭━━━━━━━⊱
┃
┣⊱❥ \`\`\`AKTIF\`\`\`: ${kyun(uptime)}
┣⊱❥ \`\`\`JAM\`\`\`: *${jam} WIB*
┣⊱❥ \`\`\`TANGGAL\`\`\`: *${tanggal}*
┣⊱❥ \`\`\`VERSION\`\`\`: *5.0 TERMUX*
┃
┣⊱❥ ❌ *SPAM*
┣⊱❥ ❌ *CALL & VC*
┃ \`\`\`Melanggar??\`\`\` *Banned*
┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━❬ *ABOUT ${name}* ❭━━━━━━⊱
┃╭────────────────────────
┃├⊱❥ *${prefix}request [Mau Req Fitur Apa?]*
┃├⊱❥ *${prefix}kalkulator [12*12]*
┃├⊱❥ *${prefix}report [lapor bug]*
┃├⊱❥ *${prefix}info*
┃├⊱❥ *${prefix}donasi*
┃├⊱❥ *${prefix}owner*
┃├⊱❥ *${prefix}speed*
┃├⊱❥ *${prefix}daftar*
┃├⊱❥ *${prefix}totaluser*
┃├⊱❥ *${prefix}chatlist*
┃├⊱❥ *${prefix}blocklist*
┃├⊱❥ *${prefix}banlist*
┃├⊱❥ *${prefix}bahasa*
┃╰────────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━❬ *MEDIA & DOWNLOAD* ❭━━━━━━━⊱
┃͏͏͏͏͏͏͏͏͏͏͏͏͏͏╭────────────────────────
┃├⊱❥ *${prefix}playmp3 [Monolog-pamungkas]*
┃├⊱❥ *${prefix}fb [link video]*
┃├⊱❥ *${prefix}ytmp3 [link yt]*
┃├⊱❥ *${prefix}ytmp4 [link yt]*
┃├⊱❥ *${prefix}tiktokstalk [username]*
┃├⊱❥ *${prefix}igstalk [_farhan_xcode7]*
┃├⊱❥ *${prefix}insta [Link]*
┃├⊱❥ *${prefix}ssweb [url]*
┃├⊱❥ *${prefix}url2img [Url]*
┃├⊱❥ *${prefix}tiktok*
┃├⊱❥ *${prefix}fototiktok*
┃├⊱❥ *${prefix}meme*
┃├⊱❥ *${prefix}memeindo*
┃├⊱❥ *${prefix}kbbi*
┃├⊱❥ *${prefix}wait*
┃├⊱❥ *${prefix}trendtwit*
┃╰────────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━❬ *CREATOR MENU* ❭━━━━━━⊱
┃╭────────────────────────
┃├⊱❥ *${prefix}stiker*
┃├⊱❥ *${prefix}gifstiker*
┃├⊱❥ *${prefix}toimg*
┃├⊱❥ *${prefix}tomp3*
┃├⊱❥ *${prefix}ocr*
┃╰─────────────────────────
┣━━━━━━━━━━━━━━━━━━━━━━━━❥
┃╭─────────────────────────
┃├⊱❥ *${prefix}imoji [❤️]*
┃├⊱❥ *${prefix}tts [id Haii]*
┃├⊱❥ *${prefix}ttp [Fxc7]*
┃├⊱❥ *${prefix}csky [FXC7]*
┃├⊱❥ *${prefix}cwooden [FXC7]*
┃├⊱❥ *${prefix}ccrossfire [FXC7]*
┃├⊱❥ *${prefix}cnaruto [FXC7]*
┃├⊱❥ *${prefix}cgbutton [FXC7]*
┃├⊱❥ *${prefix}csbutton [FXC7]*
┃├⊱❥ *${prefix}cflower [FXC7]*
┃├⊱❥ *${prefix}ctxtneon [FXC7]*
┃├⊱❥ *${prefix}cflame3d [FXC7]*
┃├⊱❥ *${prefix}caglow [FXC7]*
┃├⊱❥ *${prefix}cgneon [FXC7]*
┃├⊱❥ *${prefix}cthunder [FXC7]*
┃├⊱❥ *${prefix}cbokeh [FXC7]*
┃├⊱❥ *${prefix}ctoxic [FXC7]*
┃├⊱❥ *${prefix}cmatrix [FXC7]*
┃├⊱❥ *${prefix}cmusic [FXC7]*
┃├⊱❥ *${prefix}cblood [FXC7]*
┃├⊱❥ *${prefix}cwater [FXC7]*
┃├⊱❥ *${prefix}clava [FXC7]*
┃├⊱❥ *${prefix}cfire [FXC7]*
┃├⊱❥ *${prefix}cholo [FXC7]*
┃├⊱❥ *${prefix}cminion [FXC7]*
┃├⊱❥ *${prefix}cold [FXC7]*
┃├⊱❥ *${prefix}cneon [FXC7]*
┃├⊱❥ *${prefix}csunmory [FXC7]*
┃├⊱❥ *${prefix}cbalon [FXC7]*
┃├⊱❥ *${prefix}cglue3d [FXC7]*
┃├⊱❥ *${prefix}csraved [FXC7]*
┃├⊱❥ *${prefix}cswrite [FXC7]*
┃├⊱❥ *${prefix}cssummer [FXC7]*
┃├⊱❥ *${prefix}ccsky [FXC7]*
┃├⊱❥ *${prefix}ccloud [FXC7]*
┃├⊱❥ *${prefix}crvintage [FXC7]*
┃├⊱❥ *${prefix}cbpink [FXC7]*
┃├⊱❥ *${prefix}ctext3d [FXC7]*
┃╰──────────────────────
┣━━━━━━━━━━━━━━━━━━━━━━━━❥
┃╭────────────────────
┃├⊱❥ *${prefix}cstune3d [FXC7/BOT]*
┃├⊱❥ *${prefix}cspace3d [FXC7/BOT]*
┃├⊱❥ *${prefix}cmarvel [FXC7/BOT]*
┃├⊱❥ *${prefix}cavengers [FXC7/BOT]*
┃├⊱❥ *${prefix}cpubg [FXC7/BOT]*
┃├⊱❥ *${prefix}cglitch [FXC7/BOT]*
┃├⊱❥ *${prefix}cluxury [FXC7]*
┃├⊱❥ *${prefix}cmetal [FXC7/BOT]*
┃├⊱❥ *${prefix}cphlogo [FXC7/BOT]*
┃├⊱❥ *${prefix}quotemaker [tx/wtrmk/tema]*
┃├⊱❥ *${prefix}nulis [nama/kelas/text]*
┃╰────────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━❬ *GRUP ONLY* ❭━━━━━━━━⊱
┃╭────────────────────
┃├⊱❥ *${prefix}modeanime [On/Off]*
┃├⊱❥ *${prefix}naruto*
┃├⊱❥ *${prefix}minato*
┃├⊱❥ *${prefix}boruto*
┃├⊱❥ *${prefix}hinata*
┃├⊱❥ *${prefix}sakura*
┃├⊱❥ *${prefix}sasuke*
┃├⊱❥ *${prefix}kaneki*
┃├⊱❥ *${prefix}toukachan*
┃├⊱❥ *${prefix}rize*
┃├⊱❥ *${prefix}akira*
┃├⊱❥ *${prefix}itori*
┃├⊱❥ *${prefix}kurumi*
┃├⊱❥ *${prefix}miku*
┃├⊱❥ *${prefix}anime*
┃├⊱❥ *${prefix}animecry*
┃├⊱❥ *${prefix}neonime*
┃├⊱❥ *${prefix}animekiss*
┃╰──────────────────────
┣━━━━━━━━━━━━━━━━━━━━━━━━❥
┃╭────────────────────
┃├⊱❥ *${prefix}welcome [On/Off]*
┃├⊱❥ *${prefix}grup [buka/tutup]*
┃├⊱❥ *${prefix}antilink*
┃├⊱❥ *${prefix}ownergrup*
┃├⊱❥ *${prefix}setpp*
┃├⊱❥ *${prefix}infogc*
┃├⊱❥ *${prefix}add*
┃├⊱❥ *${prefix}kick*
┃├⊱❥ *${prefix}promote*
┃├⊱❥ *${prefix}demote*
┃├⊱❥ *${prefix}setname*
┃├⊱❥ *${prefix}setdesc*
┃├⊱❥ *${prefix}linkgrup*
┃├⊱❥ *${prefix}tagme*
┃├⊱❥ *${prefix}hidetag*
┃├⊱❥ *${prefix}tagall*
┃├⊱❥ *${prefix}mentionall*
┃├⊱❥ *${prefix}fitnah*
┃├⊱❥ *${prefix}listadmin*
┃├⊱❥ *${prefix}openanime*
┃├⊱❥ *${prefix}edotense*
┃├⊱❥ *${prefix}kudeta*
┃╰──────────────────────
┣━━━━━━━━━━━━━━━━━━━━━━━━❥
┃╭────────────────────
┃├⊱❥ *${prefix}nsfw [On/Off]*
┃├⊱❥ *${prefix}nsfwloli*
┃├⊱❥ *${prefix}nsfwblowjob*
┃├⊱❥ *${prefix}nsfwneko*
┃├⊱❥ *${prefix}nsfwtrap*
┃├⊱❥ *${prefix}hentai*
┃├⊱❥ *${prefix}indohot*
┃├⊱❥ *${prefix}bokep [stepMoms]*
┃├⊱❥ *${prefix}simih [On/Off]*
┃╰────────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━❬ *OTHER FUN & GAME* ❭━━━━━⊱
┃╭────────────────────────
┃├⊱❥ *${prefix}anjing*
┃├⊱❥ *${prefix}kucing*
┃├⊱❥ *${prefix}testime*
┃├⊱❥ *${prefix}hilih*
┃├⊱❥ *${prefix}say*
┃├⊱❥ *${prefix}apakah*
┃├⊱❥ *${prefix}kapankah*
┃├⊱❥ *${prefix}bisakah*
┃├⊱❥ *${prefix}rate*
┃├⊱❥ *${prefix}watak*
┃├⊱❥ *${prefix}hobby*
┃├⊱❥ *${prefix}infogempa*
┃├⊱❥ *${prefix}infonomor*
┃├⊱❥ *${prefix}quotes*
┃├⊱❥ *${prefix}truth*
┃├⊱❥ *${prefix}dare*
┃├⊱❥ *${prefix}katabijak*
┃├⊱❥ *${prefix}fakta*
┃├⊱❥ *${prefix}darkjokes*
┃├⊱❥ *${prefix}bucin*
┃├⊱❥ *${prefix}pantun*
┃╰────────────────────
┣━━━━━━━━━━━━━━━━━━━━━━━━❥
┃╭────────────────────
┃├⊱❥ *${prefix}translate [en/Apa kabar?]*
┃├⊱❥ *${prefix}gantengcek [Farhan]*
┃├⊱❥ *${prefix}cantikcek [Iriene]*
┃├⊱❥ *${prefix}artinama [Farhan]*
┃├⊱❥ *${prefix}persengay [Topan]*
┃├⊱❥ *${prefix}pbucin [Farhan]*
┃├⊱❥ *${prefix}bpfont [Farhan]*
┃├⊱❥ *${prefix}textstyle [FXC7]*
┃├⊱❥ *${prefix}jadwaltv [antv]*
┃├⊱❥ *${prefix}lirik [melukis senja]*
┃├⊱❥ *${prefix}chord [Melukis senja]*
┃├⊱❥ *${prefix}wiki [Adolf Hitler]*
┃├⊱❥ *${prefix}brainly [pertanyaan]*
┃├⊱❥ *${prefix}resepmasakan [Tempe]*
┃├⊱❥ *${prefix}map [Banyuwangi]*
┃├⊱❥ *${prefix}film [Fast and Farious]*
┃├⊱❥ *${prefix}joox [Monolog Pamungkas]*
┃├⊱❥ *${prefix}smule [Link Video Smule]*
┃├⊱❥ *${prefix}pinterest [gambar kucing]*
┃├⊱❥ *${prefix}infocuaca [Banyuwangi]*
┃├⊱❥ *${prefix}jamdunia [Banyuwangi]*
┃├⊱❥ *${prefix}mimpi [Ular]*
┃├⊱❥ *${prefix}tinyurl [link]*
┃├⊱❥ *${prefix}bitly [link]*
┃╰────────────────────
┣━━━━━━━━━━━━━━━━━━━━━━━━❥
┃╭────────────────────
┃├⊱❥ *${prefix}jadwalsholat [Banyuwangi]*
┃├⊱❥ *${prefix}quran*
┃├⊱❥ *${prefix}quransurah [1]*
┃╰────────────────────
┣━━━━━━━━━━━━━━━━━━━━━━━━❥
┃╭────────────────────
┃├⊱❥ *${prefix}encode64 [string]*
┃├⊱❥ *${prefix}decode64 [encrypt]*
┃╰────────────────────────
┣━━━━━━━━━━━━━━━━━━━━━━━━❥
┃╭────────────────────
┃├⊱❥ *${prefix}spamcall [083xxxxxxxxx]*
┃├⊱❥ *${prefix}spamsms [083xxxxxxxx/jumlah]*
┃├⊱❥ *${prefix}spamgmail [blabla@gmail.com/jumlah]*
┃╰────────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━❬ *OWNER ONLY* ❭━━━━━━━⊱
┃╭──────────────────
┃├⊱❥ *${prefix}bc*
┃├⊱❥ *${prefix}bcgc*
┃├⊱❥ *${prefix}ban*
┃├⊱❥ *${prefix}unban*
┃├⊱❥ *${prefix}block*
┃├⊱❥ *${prefix}unblock*
┃├⊱❥ *${prefix}clearall*
┃├⊱❥ *${prefix}delete*
┃├⊱❥ *${prefix}clone*
┃├⊱❥ *${prefix}getses*
┃├⊱❥ *${prefix}leave*
┃╰────────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━❬ *SUPPORT ${name}* ❭━━━━━━⊱
┃╭────────────────────────
┃│
┃├➲ *O BOT*
┃├➲ *M. HADI FIRMANSYA*
┃├➲ *DELIA AULIA*
┃├➲ *KEVIN DAVID*
┃╰────────────────────────
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━❬ *NOTE ${name}* ❭━━━━━━━━━⊱
┃
┣⊱❥ \`\`\`Bot ini belum selesai sepenuhnya\`\`\`
┃ \`\`\`Masih dalam proses pengerjaan\`\`\`
┃ \`\`\`Jadi masih jarang aktif, dan\`\`\`
┃ \`\`\`Maaf Jika Ada Menu Yang Error\`\`\`
┃
┣⊱❥ \`\`\`Jika Lama Harap Ulangi Command\`\`\`
┃
┣⊱❥ *Gunakan Command Tanpa []*
┃
┣⊱❥ \`\`\`Dan Jika Mengalami Error\`\`\`
┃ \`\`\`Harap Lapor Owner Dengan Cara\`\`\`
┃ *${prefix}report* \`\`\`apa pesan errornya\`\`\`
┃
┣⊱❥ \`\`\`Mau Invit Bot?? Donasi Gan,\`\`\`
┃ \`\`\`Kalo Gamau Donasi Follow Ig @_farhan_xcode7\`\`\`
┃
┣⊱❥ \`\`\`Kalian Bisa Mempublish Quotes Kalian\`\`\`
┃ \`\`\`Jika Minat Hubungi Aja Owner Buat Mempublish\`\`\`
┃ \`\`\`Quotes Kalian,\`\`\`
┃ \`\`\`Dan Makasih Buat Temen" Yg Mau Di Public Quotesnya:)\`\`\`
┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`
}
exports.help = help
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}
