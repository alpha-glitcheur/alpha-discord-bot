const { GuildManager } = require('discord.js');
const Discord = require('Discord.js');

module.exports = {
    name: 'unban',
    /**
     * 
     * @param {Discord.message} message
     */
    async execute(message, args) {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(`${message.authore.username}, tu n'es pas autorisé à utiliser cette commande.`)
         }
   
         const [username] = args;
         const guild = message.guild;

         guild.fetchBans().then((bans) => {
             let bannedUser = bans.find((b) => b.user.username == username);
             if(!bannedUser) return message.channel.send(`${message.author.username}, L'utilisateur que tu souhaites débannir n'existe pas.`);
             guild.members.unban(bannedUser.user)

             return message.channel.send(`${message.author.username}, L'utilisateur a été débanni.`);
         })
    }
  };