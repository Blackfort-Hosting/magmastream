# Getting Started

Welcome to Magmastream's documentation! Magmastream is a fork of [Erela.Js](https://github.com/MenuDocs/erela.js). This fork is powerfull and contains alot of tweaks.

```bash [npm]
npm install magmastream
```

::alert{type="danger"}
⚠️ Magmastream has **dropped** support for lavalink version 3.x.x.
::

::alert{type="success"}
✅ Magmastream **only** support lavalink version 4.
::

## Basics

::code-group

::code-block{label="index.js" code}
The first place to start with Magmastream is the [Manager](../classes/manager#constructor) class.

```javascript
// Require both libraries
const { Client } = require("discord.js");
const { Manager } = require("magmastream");

// Initiate both main classes
const client = new Client();

// Define some options for the node
const nodes = [
  {
    host: "127.0.0.1",
    identifier: "Node 1",
    password: "somepassword",
    port: 25033,
    retryAmount: 1000,
    retrydelay: 10000,
    resumeStatus: true, // default: false,
    resumeTimeout: 1000,
    secure: false, // default: false
  },
];

// Assign Manager to the client variable
client.manager = new Manager({
  // The nodes to connect to.
  nodes,
  // Method to send voice data to Discord
  send: (id, payload) => {
    const guild = client.guilds.cache.get(id);
    // NOTE: FOR ERIS YOU NEED JSON.stringify() THE PAYLOAD
    if (guild) guild.shard.send(payload);
  },
});

// Emitted whenever a node connects
client.manager.on("nodeConnect", (node) => {
  console.log(`Node "${node.options.identifier}" connected.`);
});

// Emitted whenever a node encountered an error
client.manager.on("nodeError", (node, error) => {
  console.log(
    `Node "${node.options.identifier}" encountered an error: ${error.message}.`
  );
});

// Listen for when the client becomes ready
client.once("ready", () => {
  // Initiates the manager and connects to all the nodes
  client.manager.init(client.user.id);
  console.log(`Logged in as ${client.user.tag}`);
});

// THIS IS REQUIRED. Send raw events to Magmastream
client.on("raw", (d) => client.manager.updateVoiceState(d));

// Finally login at the END of your code
client.login("your bot token here");
```

::
::code-block{label="Play Command" code}
The whole idea of a music bot is to play music right? So let's write a command to play songs.

First you want to listen to the message event.

```javascript
// Add the previous code block to this

client.on("message", async (message) => {
  // Some checks to see if it's a valid message
  if (!message.content.startsWith("!") || !message.guild || message.author.bot)
    return;

  // Get the command name and arguments
  const [command, ...args] = message.content.slice(1).split(/\s+/g);

  // Check if it's the play command
  if (command === "play") {
    if (!message.member.voice.channel)
      return message.reply("you need to join a voice channel.");
    if (!args.length)
      return message.reply("you need to give me a URL or a search term.");

    const search = args.join(" ");
    let res;

    try {
      // Search for tracks using a query or url, using a query searches youtube automatically and the track requester object
      res = await client.manager.search(search, message.author);
      // Check the load type as this command is not that advanced for basics
      if (res.loadType === "empty") throw res.exception;
      if (res.loadType === "playlist") {
        throw { message: "Playlists are not supported with this command." };
      }
    } catch (err) {
      return message.reply(
        `there was an error while searching: ${err.message}`
      );
    }

    if (res.loadType === "error") {
      return message.reply("there was no tracks found with that query.");
    }

    // Create the player
    const player = client.manager.create({
      guild: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel.id,
      volume: 100,
    });

    // Connect to the voice channel and add the track to the queue
    player.connect();
    player.queue.add(res.tracks[0]);

    // Checks if the client should play the track if it's the first one added
    if (!player.playing && !player.paused && !player.queue.size) player.play();

    return message.reply(`enqueuing ${res.tracks[0].title}.`);
  }
});
```

::
::code-block{label="Events" code}
You can play songs but what about knowing when a song starts or end? Those are events that the Manager class emits.

```javascript
client.manager = new Manager(/* options above */)
  // Chain it off of the Manager instance
  // Emitted when a node connects
  .on("nodeConnect", (node) =>
    console.log(`Node "${node.options.identifier}" connected.`)
  );

// Emitted when a track starts
client.manager.on("trackStart", (player, track) => {
  const channel = client.channels.cache.get(player.textChannel);
  channel.send(
    `Now playing: \`${track.title}\`, requested by \`${track.requester.username}\`.`
  );
});

// Emitted the player queue ends
client.manager.on("queueEnd", (player) => {
  const channel = client.channels.cache.get(player.textChannel);
  channel.send("Queue has ended.");
  player.destroy();
});
```

::
::
