const TelegramBridge = require('../../bridge/bridge'); // Adjust path to your bridge file
const config = require('../../config'); // Adjust path to your config

let telegramBridge = null;

exports.run = {
   async: async (m, {
      client,
      body,
      setting,
      Func
   }) => {
      try {
         // Initialize bridge if not already done
         if (!telegramBridge && setting.telegramBridge?.enabled) {
            telegramBridge = new TelegramBridge({
               sock: client,
               user: client.user,
               sendMessage: client.sendMessage.bind(client),
               // Add other methods your bridge needs
            });
            await telegramBridge.initialize();
         }

         // Sync message to Telegram if bridge is active
         if (telegramBridge) {
            await telegramBridge.syncMessage(m, body);
         }
      } catch (e) {
         console.log('Bridge error:', e);
      }
   },
   error: false,
   cache: true,
   location: __filename
}