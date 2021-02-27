const a = '```'
const groupp = (prefix, pushname2, groupName, user, name, uptime, jam, tanggal, premi, Simihh, Welcomee, ModeAnime, Nsfww, BadWordd, AntiLinkk, AntiVirtexx) => {
return `

╭─────≽「 *REGULATION ${name}* 」
┴
┣⊱>  ${a}NAMA USER:${a} *${pushname2}*
┣⊱>  ${a}CEK PREMIUM:${a} ${premi}
┣⊱>  ${a}LIMIT:${a} *${limitt} perhari*
│
┣⊱>  ${a}NAMA GRUP:${a} *${groupName}*
┣⊱>  ${a}MODE WELCOME:${a} *${Welcomee}*
┣⊱>  ${a}MODE SIMI:${a} *${Simihh}*
┣⊱>  ${a}MODE ANIME:${a} *${ModeAnime}*
┣⊱>  ${a}MODE NSFW:${a} *${Nsfww}*
┣⊱>  ${a}MODE ANTI BADWORD:${a} *${BadWordd}*
┣⊱>  ${a}MODE ANTI LINK:${a} *${AntiLinkk}*
┣⊱>  ${a}MODE ANTI VIRTEX:${a} *${AntiVirtexx}*
│
┣⊱>  ${a}JAM:${a} *${jam} WIB*
┣⊱>  ${a}TANGGAL:${a} *${tanggal}*
┣⊱>  ${a}AKTIF:${a} ${kyun(uptime)}
┣⊱>  ${a}VERSION:${a} *0.0.0*
┣⊱>  ${a}USER TERDAFTAR:${a} *${user.length} User*
┬
╰────────────────────────

╭──≽「 *AKTIFKAN JIKA DIPERLUKAN* 」
┴
┠≽ *${prefix}antilink On/Off*
┠≽ *${prefix}welcome On/Off*
┠≽ *${prefix}grup buka/tutup*
┠≽ *${prefix}modeanime On/Off*
┠≽ *${prefix}nsfw On/Off*
┠≽ *${prefix}simih On/Off*
┠≽ *${prefix}antivirtex on/off*
┠≽ *${prefix}badword on/off*
┬
╰────────────────────────
│
╭──────≽「 *ANIME* 」
┴
┠≽ *${prefix}neonime naruto*
┠≽ *${prefix}naruto*
┠≽ *${prefix}minato*
┠≽ *${prefix}boruto*
┠≽ *${prefix}hinata*
┠≽ *${prefix}sakura*
┠≽ *${prefix}sasuke*
┠≽ *${prefix}toukachan*
┠≽ *${prefix}megumin*
┠≽ *${prefix}rize*
┠≽ *${prefix}akira*
┠≽ *${prefix}itori*
┠≽ *${prefix}kurumi*
┠≽ *${prefix}miku*
┠≽ *${prefix}anime*
┠≽ *${prefix}animecry*
┠≽ *${prefix}animekiss*
┬
╰───────────────────────
│
╭──────≽「 *GROUP ONLY ADMIN* 」
┴
┠≽ *${prefix}fitnah @mentioned/isi/balasan*
┠≽ *${prefix}ownergrup*
┠≽ *${prefix}listonline*
┠≽ *${prefix}setpp*
┠≽ *${prefix}infogrup*
┠≽ *${prefix}add 628xxxxxxxxxx*
┠≽ *${prefix}kick @mentioned*
┠≽ *${prefix}kicktime @mentioned*
┠≽ *${prefix}promote @mentioned*
┠≽ *${prefix}demote @mentioned*
┠≽ *${prefix}setname*
┠≽ *${prefix}setdesc*
┠≽ *${prefix}linkgrup*
┠≽ *${prefix}tagme*
┠≽ *${prefix}wame*
┠≽ *${prefix}nyimak*
┠≽ *${prefix}hidetag*
┠≽ *${prefix}tagall*
┠≽ *${prefix}mentionall*
┠≽ *${prefix}adminlist*
┬
╰────────────────────────
│
╭──────≽「 *ANIME HOT* 」
┴
┠≽ *${prefix}nsfwloli*
┠≽ *${prefix}nsfwpussy*
┠≽ *${prefix}nsfwclasic*
┠≽ *${prefix}nsfwyuri*
┠≽ *${prefix}nsfwlewd*
┠≽ *${prefix}nsfwsolo*
┠≽ *${prefix}nsfweron*
┠≽ *${prefix}nsfwparadise*
┠≽ *${prefix}nsfwbigtt*
┠≽ *${prefix}nsfwecchi*
┠≽ *${prefix}nsfwcum*
┠≽ *${prefix}nsfwblowjob*
┠≽ *${prefix}nsfwneko*
┠≽ *${prefix}nsfwtrap*
┠≽ *${prefix}hentai*
┬
╰────────────────────────
`
}
exports.groupp = groupp

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}