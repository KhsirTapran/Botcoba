const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const moment = require("moment-timezone")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')

let setting = JSON.parse(fs.readFileSync('./setting.json'))
prefix = setting.prefix

module.exports = welcome = async (devil, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await devil.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await devil.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://i.postimg.cc/SN54m6LW/SAVE-20210728-133334.jpg'
            }
            if (anu.action == 'add' && mem.includes(devil.user.jid)) {
            devil.sendMessage(anu.jid, 'Rausah kakean bacot!, Jika ingin gawe Bot Ketik ${prefix}menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(devil.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await devil.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = devil.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                teks = `Halo Budak baru\n${anu_user} \nSemoga Betah, Amanah dan Ceria`
	            buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${time_wel}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`)
                buttons = [{buttonId: `#hfyh`,buttonText:{displayText: 'SELAMAT DATANG'},type:1}]
                imageMsg = (await devil.prepareMessageMedia((buff), 'imageMessage', {thumbnail: buff})).imageMessage
                buttonsMessage = { contentText: `${teks}`, footerText: 'JANGAN BUAT ONAR BRO', imageMessage: imageMsg, buttons: buttons, headerType: 4 }
                prep = await devil.prepareMessageFromContent(mdata.id,{buttonsMessage},{})
                devil.relayWAMessage(prep)
}
            if (anu.action == 'remove' && !mem.includes(devil.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await devil.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = devil.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_wel = moment.tz('Asia/Jakarta').format("HH:mm")
                memeg = mdata.participants.length
                out = `Jangan Lupakan Kenangan kita dikamar :)\n${anu_user}\nSemoga kamu menyesal beb :(`
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${time_wel}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`)
                buttons = [{buttonId: `#alquran 1`,buttonText:{displayText: 'SELAMAT JALAN'},type:1}]
                imageMsg = (await devil.prepareMessageMedia((buff), 'imageMessage', {thumbnail: buff})).imageMessage
                buttonsMessage = { contentText: `${out}`, footerText: 'BALIK LAGI BELIKAN AYAM BAKAR', imageMessage: imageMsg, buttons: buttons, headerType: 4 }
                prep = await devil.prepareMessageFromContent(mdata.id,{buttonsMessage},{})
                devil.relayWAMessage(prep)
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}