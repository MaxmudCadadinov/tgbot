const { Bot } = require("grammy");
const { conversations, createConversation } = require("@grammyjs/conversations");
const { new_keyboard, menu_carts } = require("./button.js")
const { all_products } = require('./in_user_profile.js')
const { registration, login } = require('./enter.js')


//console.log(Math.ceil())

const bot = new Bot("7807708990:AAEpP-m3ch-VRtqZgFjt7dYaNZVCN9dSClI")

bot.use(conversations());

all_products(bot)
registration(bot)
login(bot)

bot.command("start", async (ctx) => {
    ctx.reply("Добро пожаловать. Запущен и работает!"),
        await ctx.reply("Выберите опцию:", { reply_markup: new_keyboard })
})

bot.start();

