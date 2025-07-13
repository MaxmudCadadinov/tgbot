const { pages, buy } = require("./button")
const axios = require("axios")

async function all_products(bot) {
    let total = 0


    async function axios_get(ctx, page_number) {
        const response = await axios.get(`http://localhost:3000/all_products/${page_number}`)
        const products = response.data.list
        total = response.data.count
        for (let i of products) {
            image = i.image.replace('http://localhost:3000', 'https://c4692fb2c15b.ngrok-free.app')
            await ctx.replyWithPhoto(image,
                { caption: `${i.product_name}\n${i.price}\n${i.quantity}`, reply_markup: buy }
            )
        }
        await ctx.reply('Переход на другие страницы с товарами', { reply_markup: pages(page_number) })
    }


    bot.hears("Продаваемые товары", async (ctx) => {
        await axios_get(ctx, 1)
    })

    bot.callbackQuery(/next:(\d+)/, async (ctx) => {
        const button_page = ctx.match[1]
        console.log(button_page)
        if (0 < button_page <= total) {
            await axios_get(ctx, button_page)
        }
    })



    bot.callbackQuery(/back:(\d+)/, async (ctx) => {
        const button_page = ctx.match[1]
        if (0 < button_page <= total) {
            await axios_get(ctx, button_page)
        }
    })
}




module.exports = { all_products };