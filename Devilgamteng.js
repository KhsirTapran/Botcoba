const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./devil.js')
nocache('../devil.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (devil = new WAConnection()) => {
	devil.logger.level = 'warn'
	devil.version = [2, 2140, 12]
	console.log(color(figlet.textSync('FAZRIN EZZ', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[SOURCE CODE INI DIREMAKE OLEH KHSIR.TAPRAN]\n\n', 'orange'), color('\n======TERIMKASIH BANYAK KEPADA======\n•MHANKBARBAR\n•NINO\n•IKYADS\n•DEVIL\n•SEMUA PATNER SAYA\n•DZBOTZ\n•PENYEDIA APIKEY\n•DHANI BOTZ\n•MY TEAM\n•ZAK BOTZ\n•AKIRA\n•FAUZANBOTZ\n•VIZZBOTZ\n•RAFATABOTZ\n•SEMUA SUBSCRIBER', 'yellow'))
	devil.browserDescription = ["BOT KAPE", "EDGE", "1.8.1"];

	// Menunggu QR
	devil.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCAN SEKARANG BRO JAN LAMA-LAMA'))
	})

	// Menghubungkan
	fs.existsSync(`./devil.json`) && devil.loadAuthInfo(`./devil.json`)
	devil.on('connecting', () => {
		console.log(color('[ KHSIR.TAPRAN ]', 'orange'), color('PROSES PENYAMBUNGAN'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "D",
    "De",
    "Dev",
    "Devi",
    "Devil",
    "Devil G",
    "Devil GA",
    "Devil GAN",
    "Devil GANT",
    "Devil GANTE",
    "Devil GANTEN",
    "Devil GANTENG",
    "Devil GANTENG B",
    "Devil GANTENG BA",
    "Devil GANTENG BAN",
    "Devil GANTENG BANG",
    "Devil GANTENG BANGE",
    "Devil GANTENG BANGET",
    "Devil GANTENG BANGET",
    "Devil GANTENG BANGET B",
    "Devil GANTENG BANGET BT",
    "Devil GANTENG BANGET BTW",
    "Devil GANTENG BANGET BTW J",
    "Devil GANTENG BANGET BTW JA",
    "Devil GANTENG BANGET BTW JAN",
    "Devil GANTENG BANGET BTW JANG",
    "Devil GANTENG BANGET BTW JANGA",
    "Devil GANTENG BANGET BTW JANGAN",
    "Devil GANTENG BANGET BTW JANGAN L",
    "Devil GANTENG BANGET BTW JANGAN LU",
    "Devil GANTENG BANGET BTW JANGAN LUP",
    "Devil GANTENG BANGET BTW JANGAN LUPA",
    "Devil GANTENG BANGET BTW JANGAN LUPA S",
    "Devil GANTENG BANGET BTW JANGAN LUPA SU",
    "Devil GANTENG BANGET BTW JANGAN LUPA SUB",
    "Devil GANTENG BANGET BTW JANGAN LUPA SUBS",
    "Devil GANTENG BANGET BTW JANGAN LUPA SUBSC",
    "Devil GANTENG BANGET BTW JANGAN LUPA SUBSCR",
    "Devil GANTENG BANGET BTW JANGAN LUPA SUBSCRI",
    "Devil GANTENG BANGET BTW JANGAN LUPA SUBSCRIB",
    "Devil GANTENG BANGET BTW JANGAN LUPA SUBSCRIBE",
    "Devil GANTENG BANGET BTW JANGAN LUPA SUBSCRIBE.",
    "Devil GANTENG BANGET BTW JANGAN LUPA SUBSCRIBE..",
    "Devil GANTENG BANGET BTW JANGAN LUPA SUBSCRIBE..."
  ]}

	//connect
	devil.on('open', () => {
		console.log(color('[ KHSIR.TAPRAN ]', 'orange'), color('BOT SUDAH AKTIF SELAMAT MENGGUNAKAN:)'));
	})

	// session
	await devil.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./devil.json`, JSON.stringify(devil.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	devil.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	devil.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	devil.on('group-participants-update', async (anu) => {
		await welcome(devil, anu)
	})

	devil.on('chat-update', async (message) => {
		require('./devil.js')(devil, message)
	})
}

starts()