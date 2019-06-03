const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'MzY2NDMwMTM4Mjk0MDc1NDEy.XPRr2w.wcoMRKrpSg3E3bCO-WwF3dGEdf0';

const PREFIX = '!'

var verison = '1.0.1';

bot.on('ready', () =>{
   console.log('This bot is online!');
});
