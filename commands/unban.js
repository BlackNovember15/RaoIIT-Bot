module.exports = {
    name:'unban',
    description:'This Unbans a player!',
    execute (client, message, args){
        const member = message.mentions.users.first();
        if(member){
            const Target = message.guild.members.cache.get(member.id);
            Target.unban();
            message.channel.send('Student Expulsion Revoked');
        } else {
            message.channel.send('You Couldnt Remove Expulsion of that Member')
        }

    }
}