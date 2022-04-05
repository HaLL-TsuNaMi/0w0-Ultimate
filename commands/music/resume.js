module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`No music cuwwently pwaying ${message.author}... twy again ÚwÙ?`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Cuwwent music ${queue.current.title} wesumed UwU` : `Something went wrong ${message.author}... twy again ÚwÙ?`);
    },
};