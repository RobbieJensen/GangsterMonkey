module.exports = {
    name: 'warn',
    description: 'Warns a user for inappropriate behavior.',
    async execute(message, args) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            return message.reply('You do not have permission to warn users.');
        }
        const user = message.mentions.members.first();
        if (!user) return message.reply('Please mention a user to warn.');

        const reason = args.slice(1).join(' ') || 'No reason provided';
        const warnings = await user.fetchWarnings() || 0; // Assuming a warning system exists in your bot
        await user.addWarning(reason);  // Add a warning to the user

        message.channel.send(`${user.user.tag} has been warned for: ${reason}`);
    },
};
