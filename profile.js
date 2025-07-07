const { bot } = require("./index")
const { menu_carts } = require("./button")






bot.hears("Продаваемые товары", async(ctx) => {
    const response = await axios.post("http://localhost:3000/all_products"{headers: {Autohorization: `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImVtYWlsIjoiQWxpLjIwMDBAYmsucnUiLCJpYXQiOjE3NTE5MTE1ODEsImV4cCI6MTc1MTkxNTE4MX0.jWmj0keswjJtJ60wBofDFE7MwEWHRP6EA0aNTzklakA}`}})
    console.log(response.data)
    
});