const a = '```'
const encrypt = (prefix, pushname2, groupName, user, name) => {
return `
╭─────≽「 *REGULATION ${name}* 」
┴
┣⊱  ${a}NAMA USER:${a} *${pushname2}*
┣⊱  ${a}NAMA GRUP:${a} *${groupName}*
┣⊱  ${a}VERSION:${a} *0.0.0*
┣⊱  ${a}USER TERDAFTAR:${a} *${user.length} User*
┬
╰────────────────────────

╭─────≽「 *ENCRYPT & DECRYPT* 」
┴
┠≽ *${prefix}encode64 string*
┠≽ *${prefix}decode64 encrypt*
┠≽ *${prefix}hexaencode string*
┠≽ *${prefix}hexadecode encrypt*
┠≽ *${prefix}encbinary string*
┠≽ *${prefix}decbinary encrypt*
┠≽ *${prefix}encoctal string*
┠≽ *${prefix}decoctal encrypt*
┠≽ *${prefix}dorking dork*
┠≽ *${prefix}whois Domain*
┠≽ *${prefix}hostsearch Domain*
┠≽ *${prefix}dnslookup IP/Domain*
┠≽ *${prefix}geoip IP*
┠≽ *${prefix}nping IP*
┠≽ *${prefix}pastebin teks*
┠≽ *${prefix}tinyurl link*
┠≽ *${prefix}bitly link*
┠≽ *${prefix}hashidentifier Encrypt Hash*
┬
╰────────────────────────
`
}
exports.encrypt = encrypt