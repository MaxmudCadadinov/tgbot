const { menu_carts } = require("./button")
const axios  = require("axios")


 function profile(bot){
    console.log("wdcevme")
    bot.hears("Продаваемые товары", async(ctx) => {
        const response = await axios.get("http://localhost:3000/all_products")
        let data = response.data
        for (let i of data){
            let imageUrl = i.image.replace("http://localhost:3000", "https://f00e010d0cfd.ngrok-free.app")
            
            await ctx.replyWithPhoto(imageUrl,{
                caption: `🛒 <b>${i.product_name}</b>\n💰 Цена: ${i.price} сум\n📦 Кол-во: ${i.quantity}`,
                parse_mode: "HTML"
            }
            )
            }}       
    )}

    

module.exports = { profile };