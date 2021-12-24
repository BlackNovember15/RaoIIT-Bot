const { MessageEmbed, ReactionManager } = require("discord.js");


module.exports = {
    name: 'reactionrole', 
    description: 'this gives roles',
    async execute(client, message, args,  Discord) {
        const rolechannel = '913667291449819138';
        const pcm = message.guild.roles.cache.get("913672390138036225");
        const pcb = message.guild.roles.cache.get("913672429556105270");

        const pcbemo = `<:flask:913670186530402305>`;
        const pcmemo = `<:maths:913670186299715595>`;

     const rolebed = new MessageEmbed()
        .setColor('#384281')
        .setTitle('Choose Your Roles')
        .setDescription('You can choose your roles down here')
        .addFields(
            {name: 'How to Choose?', value: 'PCM is <:maths:913670186299715595>  and PCB is <:flask:913670186530402305>'},
        )
        .setImage('https://content.jdmagicbox.com/comp/chandigarh/m9/0172px172.x172.180802124529.e6m9/catalogue/rao-iit-academy-chandigarh-tutorials-1xmxupua2k.jpg?clr=333333')
        .setFooter('Thank You for Joining the Server');

        let someEmbed = await message.channel.send({embeds: [rolebed]}); 
        someEmbed.react(pcmemo);
        someEmbed.react(pcbemo);

        
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == rolechannel) {
                if (reaction.emoji.name === pcmemo) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pcm)
                        
                }
                if (reaction.emoji.name === pcbemo) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pcb);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == rolechannel) {
                if (reaction.emoji.name === pcmemo) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pcm)
                       
                }
                if (reaction.emoji.name === pcbemo) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pcb);
                }
            } else {
                return;
            }
        });
    }
 
}   