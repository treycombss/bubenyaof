


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/749380170351116290/750088540288712914/B0oBpM.png`)
.addField("__**Bot Verileri**__", `<:a_:821738957997211659>  **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <:a_:821738957997211659>  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <:a_:821738957997211659>  **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Sürümler**__", `<:a_:821738957997211659>  **Discord.js Sürümü** **|**  **v${Discord.version}** \n<:a_:821738957997211659>  **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<:a_:821738957997211659>  **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "<:a_:821738957997211659>  " +client.voice.connections.size + " Sunucu", true)
.setColor("#ffffff")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}