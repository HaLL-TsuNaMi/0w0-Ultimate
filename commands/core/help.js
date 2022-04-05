const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        switch(msg.content) {
			case config.prefix + "help":
				msg.reply("``` *ping, *play, *skip, *queue, *pause, *resume, *clear, *volume, *loop, *np, *search [UwU these are all of the commands] ```");
				console.log("*ping, *play, *skip, *queue, *pause, *resume, *clear, *volume, *loop, *np, *search [UwU these are all of the commands]");
			break;
		}
    },
};