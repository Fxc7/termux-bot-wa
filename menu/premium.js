const a = '```'
const menupremium = (prefix, pushname2, groupName, user, name, premium, premi) => {
return `
╭─────≽「 *REGULATION ${name}* 」
┴
┣⊱  ${a}NAMA USER:${a} *${pushname2}*
┣⊱  ${a}NAMA GRUP:${a} *${groupName}*
┣⊱  ${a}VERSION:${a} *0.0.0*
┣⊱  ${a}USER PREMIUM:${a} *${premi}*
┣⊱  ${a}USER TERDAFTAR:${a} *${user.length} User*
┬
╰────────────────────────

╭───────≽「 *PREMIUM ONLY* 」
┴
┠≽ *${prefix}playmp3 menepi*
┠≽ *${prefix}fb link video*
┠≽ *${prefix}snack link snack video*
┠≽ *${prefix}ytmp3 link yt*
┠≽ *${prefix}ytmp4 link yt*
┠≽ *${prefix}tiktok link video tiktok*
┠≽ *${prefix}joox Monolog Pamungkas*
┠≽ *${prefix}smule Link Video Smule*
┬
╰────────────────────────
`
}
exports.menupremium = menupremium