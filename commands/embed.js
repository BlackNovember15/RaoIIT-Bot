
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'embed',
    description: "Embeds!",
    execute(client, message, args) {
        const newEmbed = new MessageEmbed()
        .setColor('#384281')
        .setTitle('Welcome')
        .setDescription('Welcome to RaoIIT Discord Server')
        .addFields(
            
            {name: 'Rules', value: 'Read the Rules Carefully'},
            {name: 'Note:', value: 'This is not an Official RaoIIT Discord Server, This is purely for Students '}
        )
        .setImage('https://content.jdmagicbox.com/comp/chandigarh/m9/0172px172.x172.180802124529.e6m9/catalogue/rao-iit-academy-chandigarh-tutorials-1xmxupua2k.jpg?clr=333333')
        .setFooter('Thank You for Joining the Server');

        message.channel.send({embeds: [newEmbed]});


    }
}