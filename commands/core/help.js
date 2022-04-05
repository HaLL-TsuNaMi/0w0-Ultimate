const { MessageEmbed } = require('discord.js');
client.config = require('../../config');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        /*switch(msg.content) {
			case client.config.prefix + "help":
				msg.reply("``` *ping, *play, *skip, *queue, *pause, *resume, *clear, *volume, *loop, *np, *search [UwU these are all of the commands] ```");
				console.log("*ping, *play, *skip, *queue, *pause, *resume, *clear, *volume, *loop, *np, *search [UwU these are all of the commands]");
			break;
		}*/

		const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('Epic 0w0 commands right here! UwU');
        embed.addField(`Enabled - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('DJ TIME >:3', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};