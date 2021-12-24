module.exports = {
    name:'kick',
    description:'This Kicks a player!',
    execute (client, message, args){
        const member = message.mentions.users.first();
        if(member){
            const Target = message.guild.members.cache.get(member.id);
            Target.kick();
            message.channel.send('The Student is Right Outta the Server');
        } else {
            message.channel.send('You Couldnt Kick that Member')
        }

    }
}