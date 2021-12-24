module.exports = {
    name:'ban',
    description:'This Bans a player!',
    execute (client, message, args){
        const member = message.mentions.users.first();
        if(member){
            const Target = message.guild.members.cache.get(member.id);
            Target.ban();
            message.channel.send('Student Expelled');
        } else {
            message.channel.send('You Couldnt Expel that Member')
        }

    }
}