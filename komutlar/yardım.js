 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Astolfo Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffffff')
.addField(`__Genel Komutlar__`,`<:a_:821738957997211659>  \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<:a_:821738957997211659>  \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<:a_:821738957997211659>  \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`<:a_:821738957997211659>  \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`<:a_:821738957997211659>  \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<:a_:821738957997211659>  \`${prefix}prefix\` `,true)
  .setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}