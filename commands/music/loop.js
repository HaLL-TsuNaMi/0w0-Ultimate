const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music cuwwently pwaying ${message.author}... twy again ÚwÙ?`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`You must fiwst disabwe the cuwwent music in the woop mode (${client.config.app.px}loop) ${message.author}... twy again ÚwÙ??`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `wepeat mode **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** the whowe queue wiww be wepeated endwesswy UwU` : `Something went wwong ${message.author}... twwy again ÚwÙ?`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`You must fiwst disabwe the cuwwent queue in the woop mode (${client.config.app.px}woop queue) ${message.author}... twy again ÚwÙ?`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `wepeat mode **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** the cuwwent music wiww be wepeated endwesswy (you can woop the queue with the <queue> option) UwU` : `Something went wwong ${message.author}... twy again ÚmÙ?`);
        };
    },
};