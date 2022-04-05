module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music cuwwently pwaying ${message.author}... twy again ÚwÙ?`);

        if (!queue.tracks[0]) return message.channel.send(`No music in the queue aftew the cuwwent one ${message.author}... twy again ÚwÙ?`);

        await queue.shuffle();

        return message.channel.send(`Queue shuffwed **${queue.tracks.length}** song(s) ! 0w0`);
    },
};