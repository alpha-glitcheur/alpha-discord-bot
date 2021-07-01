const Discord = require('Discord.js');

module.exports = {
    name: 'ban',
    /**
     * 
     * @param {Discord.message} message
     */
     async execute(message, args ) {
      if (!message.member.hasPermission('BAN_MEMBERS')) {
         return message.channel.send(`${message.authore.username}, tu n'es pas autorisé à utiliser cette commande.`)
      }

      const guild = message.guild;
      const user = message.mentions.users.first();
      console.log(user);

      if (!user) {
          return message.channel.send(`${message.author.username}, l'utilisateur que tu souhaites bannir n'existe pas.`)
      }

      let [, days, reason] = args[1];

     guild.members.ban(user, {days, reason})
     .then(user => message.channel.send(`L'utilisateur ${user.username} a été banni du serveur pour une durée de ${days} jour(s) pour la raison suivante: ${reason}`))
     .catch(console.error)

    },
  };