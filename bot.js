const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NDY0MTM1OTU0ODUzMDAzMjY1.Dh6kxQ.62DfyLhTpnyMPmwgmO-FsC2kEUg);//where BOT_TOKEN is the token of our bot
