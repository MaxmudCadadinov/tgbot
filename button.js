const { Keyboard } = require("grammy");

const new_keyboard = new Keyboard()
.text("Регистрация")
.text("Войти")
.resized()

const menu_carts = new Keyboard()
.text("Продаваемые товары")
.text("Корзина товаров")

module.exports = { new_keyboard, menu_carts }