const path = require(`node:path`);
const Discord = require(`discord.js`);

if(Discord.version > `13.6.0`) {
	// Export discord.js
	module.exports = Discord;
} else {
	// Export monbrey's Discord.js pull request
	// https://github.com/monbrey/discord.js

	module.exports = require(path.join(__dirname, `discord.js-modals`, `src`, `index.js`));
}
