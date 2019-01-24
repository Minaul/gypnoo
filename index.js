const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("Gypno, g:help");
    console.log("Le bot a bien été connecté");
});

bot.login(process.env."NTM4MDQxMjk1OTUyNjc0ODI2.DyuEDQ.BkTD6vrYsIfOsVkrFe2V4fzjoao");
