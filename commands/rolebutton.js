const { Client, message, args, MessageActionRow, MessageButton} = require('discord.js');

module.exports = {
    name: "rolebutton",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    
    run: async (client, message, args) => {
        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId("random")
                .setLabel('test')
                .setStyle("PRIMARY")


        );

        message.channel.send({content: "test", components: [row]})
    }
}