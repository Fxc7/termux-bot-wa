const a = '```'
const informasi = (prefix, pushname2, groupName, user, name) => {
return `
╭─────≽「 *REGULATION ${name}* 」
┴
┣⊱  ${a}NAMA USER:${a} *${pushname2}*
┣⊱  ${a}NAMA GRUP:${a} *${groupName}*
┣⊱  ${a}VERSION:${a} *0.0.0*
┣⊱  ${a}USER TERDAFTAR:${a} *${user.length} User*
┬
╰────────────────────────

╭─────≽「 *INFORMATION MENU* 」
┴
┠≽ *${prefix}fakta*
┠≽ *${prefix}infogempa*
┠≽ *${prefix}jarak Banyuwangi/Surabaya*
┠≽ *${prefix}translate en/Apa kabar?*
┠≽ *${prefix}bpfont Farhan*
┠≽ *${prefix}textstyle FXC7*
┠≽ *${prefix}jadwaltv antv*
┠≽ *${prefix}jadwaltvnow*
┠≽ *${prefix}lirik melukis senja*
┠≽ *${prefix}chord Melukis senja*
┠≽ *${prefix}wiki Adolf Hitler*
┠≽ *${prefix}brainly pertanyaan*
┠≽ *${prefix}resepmasakan bakwan*
┠≽ *${prefix}map Banyuwangi*
┠≽ *${prefix}film Fast and Farious*
┠≽ *${prefix}pinterest gambar kucing*
┠≽ *${prefix}infocuaca Banyuwangi*
┠≽ *${prefix}jamdunia Banyuwangi*
┠≽ *${prefix}infoalamat jalan Banyuwangi*
┠≽ *${prefix}playstore WhatsApp*
┠≽ *${prefix}moddroid lightroom*
┠≽ *${prefix}happymod lightroom*
┬
╰───────────────────────────
`
}
exports.informasi = informasi