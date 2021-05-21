const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffffff') 
.setAuthor(`Astolfo Eklenti Komutları`, client.user.avatarURL())
.addField(`__Kayıt Sistemi__`,`<:a_:821738957997211659>  \`${prefix}kayıtsistemi\` Gelişmiş Kayıt Sistemi`,true)
.addField(`__Davet Sistemi__`,`<:a_:821738957997211659>  \`${prefix}davetsistemi\` Gelişmiş Davet Sistemi`,true)
.setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setThumbnail(client.user.avatarURL)
  };
exports.config = {
name: "eklenti",
  aliases: []
}
