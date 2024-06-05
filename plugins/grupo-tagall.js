let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `➩ 🩵 𝐌𝐄𝐍𝐒𝐀𝐉𝐄:  ${pesan}`
let teks = `*🩵 𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐀 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 🩵*\n${oi}\n\n*┏ ➩𝐌𝐄𝐍𝐂𝐈𝐎𝐍𝐄𝐒: *\n`
for (let mem of participants) {
teks += `┃➩ @${mem.id.split('@')[0]}\n`}
teks += `┗━➤ @dxnn.lxa`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
