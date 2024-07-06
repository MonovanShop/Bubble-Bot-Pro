let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let str = `╭┈┈ 🫧
│  ᴄᴏᴍᴘʀᴀ / ᴅᴏɴᴀᴄɪÓɴ
╰────────────── 🫧

[ ᴛʀᴀɴꜱꜰᴇʀᴇɴᴄɪᴀ / ᴅᴇᴘᴏꜱɪᴛᴏ ]

🏦 ᴄᴜᴇɴᴛᴀ ꜱᴀɴᴛᴀɴᴅᴇʀ
      💳 5579 1004 0189 6616

[ ᴘᴀʏᴘᴀʟ ]

🌎 https://www.paypal.me/andriiup

╭┈┈ 🫧
│ ʙᴇɴᴇꜰɪᴄɪᴀʀɪᴏ: ᴀɴᴅʀɪɪᴜ
╰────────────── 🫧

* 𝓐𝓭𝓺𝓾𝓲𝓮𝓻𝓮 𝓽𝓾 𝓑𝓾𝓫𝓫𝓵𝓮𝓑𝓸𝓽
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
await conn.sendMessage(m.chat, { 
text: str, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen1, 
"title": `𝑴𝑶𝑵𝑲𝑬𝒀 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼`, 
body: ig, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": paypal, 
"sourceUrl": paypal, 
}}}, { quoted: fkontak })}
/*conn.sendHydrated(m.chat, str, `𝑴𝑶𝑵𝑲𝑬𝒀 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://chat.whatsapp.com/FXhHi3CURVdAhqXFKp64vT', '🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/
handler.command = /^dona(te|si)|donar|pagarbubble|pagar|pagarandriu|pagarbot|botpago|paypal|donating$/i
handler.exp = 80
export default handler
