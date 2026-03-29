const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Comando /start
bot.start((ctx) => ctx.reply('Bot teste funcionando'));

// Responde qualquer mensagem
bot.on('text', (ctx) => {
  ctx.reply('Recebi sua mensagem 👁️');
});

bot.launch();