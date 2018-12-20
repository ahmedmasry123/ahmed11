const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("525075522217312278")
setInterval(function() {
channel.send(`kos kos kos kos kosamk ya cece `);
}, 30)
})

client.login(process.env.BOT_TOKEN);