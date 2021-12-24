const { execute } = require("../commands/ban");

module.exports = {
    name: "guildMemberAdd",
    async execute(member) {
        console.log ("New Member: ", member);
    }   
}