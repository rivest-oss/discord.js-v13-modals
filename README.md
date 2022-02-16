# Modals for Discord.js v13
** (Only works for 13.6.0 or lower).

*Warning:* When the modals are officially implemented in v13, this module will stop working on those versions to avoid any inconvenience.

### How to install?

Just run:
```sh
npm install discord.js-v13-modals
```

### How to use it?

Replace

```js
const Discord = require('discord.js');
```

to

```js
const Discord = require('discord.js-v13-modals');
```

### how do I create a modal?

An example:

```js
const { Modal, ActionRow, TextInputComponent, TextInputStyle } = require('discord.js-v13-modals');

const tvShowInputComponent = new TextInputComponent()
	.setCustomId('tvField')
	.setLabel('Favorite TV show')
	.setStyle(TextInputStyle.Short);

const haikuInputComponent = new TextInputComponent()
	.setCustomId('haikuField')
	.setLabel('Write down your favorite haiku')
	.setStyle(TextInputStyle.Paragraph);

const row1 = new ActionRow()
	.addComponents(tvShowInputComponent);

const row2 = new ActionRow()
	.addComponents(haikuInputComponent);

const modal = new Modal()
	.setTitle('My Awesome Form')
	.setCustomId('AwesomeForm')
	.addComponents(row1, row2);
```

### How do I show/present a modal to the user?

Simply put:

```js
// Present the modal to the user
await interaction.presentModal(yourModal);
```

### How do I receive a modal?

```js
client.on('interactionCreate', async (interaction) => {
	if (!interaction.isModalSubmission()) {
		return;
	}

	// Verify we have the right modal
	if (interaction.customId !== 'AwesomeForm') {
		return;
	}

	// Extract text input components from submitted modal
	const [favTVShow, favHaiku] = ['tvField', 'haikuField']
		.map(id => interaction.fields.getTextInputValue(id));
	
	// ACK the interaction
	await interaction.reply(`Favorite TV Show: ${favTVShow}, Favorite haiku: ${favHaiku}`);
});
```
