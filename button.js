const { Keyboard, InlineKeyboard } = require("grammy");

const new_keyboard = new Keyboard()
    .text("Регистрация")
    .text("Войти")
    .resized()

const menu_carts = new Keyboard()
    .text("Продаваемые товары")
    .text("Корзина товаров")
    .resized()

const pages = (currentpage) => {
    const keyboard = new InlineKeyboard()
    if (currentpage != 1) {
        keyboard.text("Предыдущая страница", `back:${+currentpage - 1}`)

    }
    keyboard.text("Следующая странца", `next:${+currentpage + 1}`)
    return keyboard
}

const buy = new InlineKeyboard()
    .text("Купить")
module.exports = { new_keyboard, menu_carts, pages, buy }