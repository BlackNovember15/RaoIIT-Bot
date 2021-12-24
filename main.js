console.clear();

const Discord = require('discord.js')

const { Client, Intents, Interaction, Message, GuildMember, Guild, GuildMemberManager, MessageEmbed, MessageAttachment, Collection } = require('discord.js');
require('dotenv').config();


//const client = new Client(   {partials: ["MESSAGE", "CHANNEL", "REACTION"], intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS] });
const allIntents = new Intents(32767)
const client = new Client(   {partials: ["MESSAGE", "CHANNEL", "REACTION"], intents: allIntents})
const prefix = '!';

const fs = require('fs');


client.commands = new Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('BlackNovember is Online');
    //console.log(client.commands);
    //console.log(commandFiles);
    //console.log(pcm);
    
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Student');

    guildMember.roles.add(welcomeRole);
    //guildMember.guild.channels.cache.get('913341890336817152').send({embeds: [embed]});
});

client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    

    if(command === 'ping'){
        message.channel.send('pong!');

    } else if (command === 'rao'){
        message.channel.send('https://learn.raoiit.com/home'); 

    } else if (command === 'embed'){
        client.commands.get('embed').execute(client, message, args);
    
    } else if (command === 'getout') {
        client.commands.get('kick').execute(client, message, args);
    
    } else if (command === 'expel') {
        client.commands.get('ban').execute(client, message, args);

    } else if (command === 'readmit') {
        client.commands.get('unban').execute(client, message, args);

    } else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(client, message, args,  Discord);
    }
    
});


client.login(process.env.TOKEN);
