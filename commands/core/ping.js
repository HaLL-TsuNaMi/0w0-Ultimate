const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
		switch(msg.content) {
			// Basic 0w0 commands
			case config.prefix + "ping":
				msg.reply({embed: {
					color: 0x7FADF8,
					author: {
						name: bot.user.username,
						icon_url: bot.user.displayAvatarURL
					},
						title: "pong UwU",
						timestamp: new Date()
				}});
				console.log("pong UwU");
				break;
			}
    },
};