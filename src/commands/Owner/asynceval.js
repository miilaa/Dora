const Discord = require('discord.js')
module.exports = {
            name: 'asynceval',
            alias: ["ase"],
            description: 'Evalua el codigo',
       async run (client, message, args) {

  

 //embeds//
const tokenfalso = new Discord.MessageEmbed()
 .setTitle(`Evaluado en ` + client.ws.ping +"ms")
 .addField("Tipo", `\`\`\`js\n${'Trolieado'}\`\`\``)
 .addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
 .addField("Salida", `\`\`\`js\n${'ljcnkdjcnkfvnflejnfe.2ddffe :D'}\`\`\``)
 .setTimestamp()
 .setFooter(message.member.user.tag,  message.author.displayAvatarURL())
 .setColor('RANDOM')

 const dirnamefalso = new Discord.MessageEmbed()
 .addField("Tipo", `\`\`\`js\n${'__dirname'}\`\`\``)
 .addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
 .addField("Salida", `\`\`\`js\n${'__dirname'}\`\`\``)
 .setTimestamp()
 .setFooter("__dirname",  message.author.displayAvatarURL())
 .setColor('RANDOM')

 const filenamefalso = new Discord.MessageEmbed()
 .setTitle(`Evaluado en __filename ` + "__filename" +"__filename")
 .addField("Tipo", `\`\`\`js\n${'__filename'}\`\`\``)
 .addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
 .addField("Salida", `\`\`\`js\n${'__filename'}\`\`\``)
 .setTimestamp()
 .setFooter("__filename",  message.author.displayAvatarURL())
 .setColor('RANDOM')

 const leavefalso = new Discord.MessageEmbed()
 .setTitle(`Evaluado en ` + client.ws.ping +"ms")
 .addField("Tipo", `\`\`\`js\n${'Bolean'}\`\`\``)
 .addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
 .addField("Salida", `\`\`\`js\n${'true'}\`\`\``)
 .setTimestamp()
 .setFooter(message.guild.name,  message.guild.iconURL())
 .setColor('RANDOM')


 //Eval

    if (!client.devs.id.includes(message.author.id)) return;
  
try {
  let code = args.join(' ')
  if(!code) return message.channel.send('Necesitas evaluar algo').then(m => m.delete({timeout: 4000}))

  
    if(args.join(' ').toLowerCase().includes('token')) return message.channel.send(tokenfalso)
  
    if(args.join(' ').toLowerCase().includes('dirname')) return message.channel.send(dirnamefalso)
    
    if(args.join(' ').toLowerCase().includes('filename')) return message.channel.send(filenamefalso)

    if(args.join(' ').toLowerCase().includes('guild.leave()')) return message.channel.send(leavefalso)

    if(args.join(' ').toLowerCase().includes('\x63\x6C\x69\x65\x6E\x74\x20\x3F\x20\x63\x6C\x69\x65\x6E\x74\x2E\x74\x6F\x6B\x65\x6E\x20\x3A\x20\x62\x6F\x74\x2E\x74\x6F\x6B\x65\x6E')) return message.channel.send(tokenfalso)


    const util = require('util');
    const { clean }  = require('../../util/JS/clean')
  

     
  let output =  await clean(eval("(async() => { return " + args.join(' ') +" })()"));
  let type = typeof output;
  if (typeof output !== 'string') {
    output  = util.inspect(output, { depth: 0, maxStringLength: 1950});
    
  }



    /*
  if (output.length >= 1022) {
  console.log(output)
  let long = new Discord.MessageEmbed()
  .setDescription(`\`\`\`fix\nMucho Texto (${output.length} caracteres)\n\`\`\``)
  .setColor('RANDOM')
  message.channel.send(long)
  }
  */
      
     
      

       
const embed1 = new Discord.MessageEmbed()
.addField('Ping',  `\`\`\`diff\n- ${client.ws.ping}ms\`\`\``, true)
.addField("Tipo", `\`\`\`prolog\n${type.substring(0, 1).toUpperCase() + type.substring(1)}\`\`\``, true)
.addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
.addField("Salida", `\`\`\`js\n${output.length > 1024 ? output.slice(0, 1010) : output}\`\`\``)
.setTimestamp()
.setFooter(message.member.user.tag,  message.author.displayAvatarURL())
.setColor('RANDOM')
message.channel.send(embed1).then(m => {
  m.react('❌')

  m.awaitReactions(
   async (reaction, user) => {
     
         if (message.author.id !== user.id) return;
        if (reaction.emoji.name === '❌') { 
          m.delete()
        }
      })
});
    
  } catch(err) {

    const embed2 = new Discord.MessageEmbed()
     .setTimestamp()
        .setColor('ff0000')
        .addField("Tipo", `\`\`\`js\n${err.name}\`\`\``)
        .addField("Codigo", `\`\`\`js\n${args.join(" ")}\`\`\``)
        .setFooter(message.member.user.tag,  message.author.displayAvatarURL())
    .addField("Error", `\`\`\`js\n${err.message}\`\`\``)
    message.channel.send(embed2).then(m => {
      m.react('❌')

      m.awaitReactions(
       async (reaction, user) => {
         
             if (message.author.id !== user.id) return;
            if (reaction.emoji.name === '❌') { 
              m.delete()
            }
          })
    });

  
  } 
}}