const a = '```'
const ownerrr = (prefix, pushname2, groupName, user, name) => {
return `

╭─────≽「 *REGULATION ${name}* 」
┴
┣⊱  ${a}NAMA USER:${a} *${pushname2}*
┣⊱  ${a}NAMA GRUP:${a} *${groupName}*
┣⊱  ${a}VERSION:${a} *0.0.0*
┣⊱  ${a}USER TERDAFTAR:${a} *${user.length} User*
┬
╰────────────────────────

╭────────≽「 *OWNER ONLY* 」
┴
┠≽ *${prefix}addstatus*
┠≽ *${prefix}addbadword*
┠≽ *${prefix}dellbadword*
┠≽ *${prefix}zalgo*
┠≽ *${prefix}vapor*
┠≽ *${prefix}pitch*
┠≽ *${prefix}addpremium mentioned*
┠≽ *${prefix}dellpremium mentioned*
┠≽ *${prefix}setmemlimit*
┠≽ *${prefix}setlimit*
┠≽ *${prefix}setreply*
┠≽ *${prefix}setprefix*
┠≽ *${prefix}setnamebot*
┠≽ *${prefix}setppbot*
┠≽ *${prefix}setreplyimage*
┠≽ *${prefix}sharelock*
┠≽ *${prefix}chatlist*
┠≽ *${prefix}bc*
┠≽ *${prefix}bcgc*
┠≽ *${prefix}ban*
┠≽ *${prefix}unban*
┠≽ *${prefix}block*
┠≽ *${prefix}unblock*
┠≽ *${prefix}clearall*
┠≽ *${prefix}delete*
┠≽ *${prefix}clone*
┠≽ *${prefix}leave*
┬
╰────────────────────────
`
}
exports.ownerrr = ownerrr