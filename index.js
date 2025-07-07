const { Bot } = require("grammy");
const { conversations, createConversation } = require("@grammyjs/conversations");
const axios = require("axios");
const { new_keyboard, menu_carts } = require("./button.js")

const bot = new Bot("7807708990:AAEpP-m3ch-VRtqZgFjt7dYaNZVCN9dSClI")

bot.use(conversations());




bot.command("start", async(ctx) => {ctx.reply("Добро пожаловать. Запущен и работает!"), 
    await ctx.reply("Выберите опцию:", { reply_markup: new_keyboard })
})


async function registation(conversation, ctx){
    await ctx.reply('приступим к регистрации')

    await ctx.reply('Укажите имя')
    const { message: msg1 } = await conversation.waitFor("message:text")
    
    await ctx.reply('Укажите фамилию')
    const { message: msg2 } = await conversation.waitFor("message:text")
    
    await ctx.reply('Укажите почту')
    const { message: msg3 } = await conversation.waitFor("message:text")
    
    await ctx.reply('Укажите пароль')
    const { message: msg4 } = await conversation.waitFor("message:text")

    await ctx.reply(`Ваше имя ${msg1.text} \n Фамилия ${msg2.text} \n Эмаил ${msg3.text}`, 
        {reply_markup:new_keyboard})

    const jsonobj = {
        user_name: msg1.text,
        user_lastname: msg2.text,
        email: msg3.text,
        password: msg4.text
    }

    const response = await axios.post("http://localhost:3000/add_user", jsonobj, {
      headers: { "Content-Type": "application/json" }
    })
    
}

async function login(conversation, ctx) {
    await ctx.reply('Вам предстоит ввести ваш эмаил и пароль. \n Если еше не регестрированы зарегестрируйтесь')
    ctx.reply('Укажите эмаил')
    const { message: email} = await conversation.waitFor("message:text")
    
    await ctx.reply('Укажите пароль')
    const { message: password } = await conversation.waitFor("message:text")

    const obj = {
        email: email.text,
        password: password.text
    }

    const response = await axios.post("http://localhost:3000/login", obj)
    

    if (!response){await ctx.reply('Вы наверное неправильно ввели пароль или эмаил', {reply_markup:new_keyboard})}
    else{ await ctx.reply('Вы вошли в свою профиль. Вперед за удачными покупками покупками', {reply_markup:menu_carts})}
    
}


bot.use(createConversation(registation));
bot.use(createConversation(login));

bot.hears("Регистация", (ctx) => ctx.conversation.enter("hello"));
bot.hears("Войти", (ctx) => ctx.conversation.enter("login"));






bot.start();

module.exports = { bot }