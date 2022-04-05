const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No music cuwwently pwaying ${message.author}... twy again ÚwÙ?`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`The current volume is ${queue.volume} 🔊\n*To change the volume enter a valid number between **1** and **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`The vowume you want to change is awweady the cuwwent one ${message.author}... twy again ÚwÙ?`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`The specified numbew is not vawid. Entew a number between **1** and **${maxVol}** ${message.author}... twy again ÚwÙ?`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `The vowume has been modified to **${vol}**/**${maxVol}**% >:3` : `Something went wwong ${message.author}... twy again ÚwÙ?`);
    },
};