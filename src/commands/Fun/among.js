const { MessageEmbed } = require('discord.js')

module.exports = {
 name: "among",
 alias: ["among-us"],
 async run (client, message, args) {

          let pablo = client.users.cache.get("390726024536653865")
 let a = ["no era El Impostor.", "era El Impostor.", "was ejected."]
 const u = message.mentions.users.first() || client.users.resolve(args[0]) || message.author;
 let embed = new MessageEmbed()
 .setDescription(
        ` 

. 　。　　　　•　 　ﾟ　　。
　　.　　　.　　　 　　.　　　　　。　　 。　.
　.　　 。　 。　 。 ඞ 。　 . •
　.　　。　　${u.username + " " +a[Math.floor(Math.random() * a.length)]} 　。　　 。　.
　。　　 。　. 
　 　　。　　　　　　ﾟ　　　.　　　　　.
,　　　　.　 .　　 . 。
`    
          )
          .setFooter(" Idea de " + pablo.tag, pablo.displayAvatarURL())
 message.channel.send(embed)
 }
}