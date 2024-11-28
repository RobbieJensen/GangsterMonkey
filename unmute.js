module.exports = {
    name: 'unmute',
    description: 'Unmutes a user.',
    async execute(message, args) {
        if (!message.member.permissions.has('MUTE_MEMBERS')) {
            return message.reply('You do not have permission to unmute users.');
        }
        const user = message.mentions.members.first();
        if (!user) return message.reply('Please mention a user to unmute.');

        const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
        if (!muteRole) return message.reply('There is no "Muted" role in this server.');

        await user.roles.remove(muteRole);
        message.channel.send(`${user.user.tag} has been unmuted.`);
    },
};
