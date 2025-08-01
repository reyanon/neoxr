const models = {
   users: {
      afk: -1,
      afkReason: '',
      afkObj: {},
      banned: false,
      ban_temporary: 0,
      ban_times: 0,
      premium: false,
      expired: 0,
      lastseen: 0,
      hit: 0,
      warning: 0,
      example: []
   },
   groups: {
      activity: 0,
      antidelete: true,
      antilink: false,
      antivirtex: false,
      antitagsw: true,
      filter: false,
      left: false,
      localonly: false,
      mute: false,
      viewonce: true,
      autosticker: true,
      member: {},
      text_left: '',
      text_welcome: '',
      welcome: true,
      expired: 0,
      stay: false
   },
   chats: {
      chat: 0,
      lastchat: 0,
      lastseen: 0
   },
   setting: {
      autobackup: false,
      autodownload: true,
      antispam: true,
      debug: false,
      error: [],
      hidden: [],
      pluginDisable: [],
      receiver: [],
      groupmode: false,
      sk_pack: 'Sticker by',
      sk_author: '© neoxr.js',
      self: false,
      noprefix: false,
      multiprefix: true,
      prefix: ['.', '#', '!', '/'],
      toxic: ["ajg", "ajig", "anjas", "anjg", "anjim", "anjing", "anjrot", "anying", "asw", "autis", "babi", "bacod", "bacot", "bagong", "bajingan", "bangsad", "bangsat", "bastard", "bego", "bgsd", "biadab", "biadap", "bitch", "bngst", "bodoh", "bokep", "cocote", "coli", "colmek", "comli", "dajjal", "dancok", "dongo", "fuck", "gelay", "goblog", "goblok", "guoblog", "guoblok", "hairul", "henceut", "idiot", "itil", "jamet", "jancok", "jembut", "jingan", "kafir", "kanjut", "kanyut", "keparat", "kntl", "kontol", "lana", "loli", "lont", "lonte", "mancing", "meki", "memek", "ngentod", "ngentot", "ngewe", "ngocok", "ngtd", "njeng", "njing", "njinx", "oppai", "pantek", "pantek", "peler", "pepek", "pilat", "pler", "pornhub", "pucek", "puki", "pukimak", "redhub", "sange", "setan", "silit", "telaso", "tempek", "tete", "titit", "toket", "tolol", "tomlol", "tytyd", "wildan", "xnxx"],
      online: true,
      onlyprefix: '+',
      owners: ['994408364923'],
      lastReset: new Date * 1,
      msg: 'Hi +tag 🪸\nI am an automated system (WhatsApp Bot) that can help to do something, search and get data / information only through WhatsApp.\n\n◦ *Module* : +module\n◦ *Database* : +db\n◦ *Library* : Baileys v+version\n◦ *Rest API* : https://api.neoxr.my.id\n◦ *Source* : https://github.com/neoxr/neoxr-bot\n\nIf you find an error or want to upgrade premium plan contact the owner.',
      style: 4,
      cover: 'https://telegra.ph/file/d5a48b03b80791b50717f.jpg',
      link: 'https://chat.whatsapp.com/D4OaImtQwH48CtlR0yt4Ff'
   },
   telegramBridge: {
      enabled: false,
      botToken: '',
      chatId: '',
      logChannel: '',
      features: {
         topics: true,
         mediaSync: true,
         profilePicSync: true,
         callLogs: true,
         statusSync: true,
         biDirectional: true,
         welcomeMessage: false,
         sendOutgoingMessages: false,
         presenceUpdates: true,
         readReceipts: false,
         animatedStickers: true
      }
   }
}

module.exports = { models }