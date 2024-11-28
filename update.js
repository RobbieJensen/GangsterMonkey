module.exports = {
    name: 'update',
    description: 'Send an update to a channel in a special format.',
    async execute(message, args) {
        const updateMessage = `
**Bot Update**:
• **New Features**: Added new commands and improved performance.
• **Bug Fixes**: Fixed issues with command execution.
• **Enhancements**: Updated the bot’s internal libraries.
`;

        // Specify the channel ID where the updates should be sent
        const updateChannel = message.guild.channels.cache.get(config.updateChannelId);

        if (!updateChannel) {
            return message.reply("Update channel not found!");
        }

        try {
            await updateChannel.send(`\`\`\`diff\n${updateMessage}\n\`\`\``);
            message.reply('Update has been posted!');
        } catch (error) {
            console.error(error);
            message.reply('There was an error sending the update.');
        }
    },
};
