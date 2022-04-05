module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music cuwwently pwaying ${message.author}... twy again ÚwÙ?`);

        if (!queue.tracks[0]) return message.channel.send(`No music in the queue aftew the cuwwent one ${message.author}... twy again ÚwÙ?`);

        await queue.clear();

        message.channel.send(`The queue has just been cweawed ÙwÚ`);
    },
};