# Manager

Magmastream's Manager, the ultimate command post for unleashing the power of Lavalink like a boss, guaranteed to make you go "Whoa!" like the most mind-blowing meme.

### Constructor

::code-group

::code-block{label="Manager" code}

```js
new Magmastream.Manager(options: ManagerOptions)
```

## Properties

| Options                 | Type       | Description                                                           |
| ----------------------- | :--------- | --------------------------------------------------------------------- |
| `autoPlay`              | `boolean`  | Whether players should automatically play the next song.              |
| `cliendId`              | `string`   | The client ID to use.                                                 |
| `nodes`                 | `array`    | The array of nodes to connect to.                                     |
| `plugins`               | `array`    | An array of plugins to use.                                           |
| `shards`                | `number`   | The shard count.                                                      |
| `trackPartial`          | `string[]` | An array of track properties to keep. `track` will always be present. |
| `defaultSearchPlatform` | `string`   | The search platform to use to query songs.                            |

## Methods

Function to send data to the websocket.

> Returns: `void`

| Parameter | Type                           |
| --------- | :----------------------------- |
| `id`      | `string`                       |
| `payload` | [Payload](../typedefs/payload) |

::
::

## Overview

| Properties                            | Methods                               | Events                                  |
| ------------------------------------- | :------------------------------------ | --------------------------------------- |
| [nodes](#nodes)                       | [create](#create)                     | [nodeCreate](#nodecreate)               |
| [options](#options)                   | [createNode](#createnode)             | [nodeDestroy](#nodedestroy)             |
| [players](#players)                   | [decodeTrack](#decodetrack)           | [nodeConnect](#nodeconnect)             |
| [leastLoadNodes](#get-leastloadnodes) | [decodeTracks](#decodetracks)         | [nodeReconnect](#nodereconnect)         |
| [leastUsedNodes](#get-leastusednodes) | [destroy](#destroy)                   | [nodeDisconnect](#nodedisconnect)       |
|                                       | [destroyNode](#sdestroynode)          | [nodeError](#nodeerror)                 |
|                                       | [get](#get)                           | [nodeRaw](#noderaw)                     |
|                                       | [init](#init)                         | [playerCreate](#playercreate)           |
|                                       | [search](#search)                     | [playerDestroy](#playerdestroy)         |
|                                       | [updateVoiceState](#updatevoicestate) | [queueEnd](#queueend)                   |
|                                       |                                       | [playerMove](#playermove)               |
|                                       |                                       | [trackStart](#trackstart)               |
|                                       |                                       | [trackEnd](#trackend)                   |
|                                       |                                       | [trackStuck](#trackstuck)               |
|                                       |                                       | [trackError](#trackerror)               |
|                                       |                                       | [socketClosed](#socketclosed)           |
|                                       |                                       | [playerStateUpdate](#playerstateupdate) |

### Events

#### • nodeCreate

> Emitted when a Node is created.
>
> | Parameter | Type                    |
> | --------- | :---------------------- |
> | node      | [Node](../classes/node) |

#### • nodeDestroy

> Emitted when a Node is destroyed.
>
> | Parameter | Type                    |
> | --------- | :---------------------- |
> | node      | [Node](../classes/node) |

#### • nodeConnect

> Emitted when a Node connects.
>
> | Parameter | Type                    |
> | --------- | :---------------------- |
> | node      | [Node](../classes/node) |

#### • nodeReconnect

> Emitted when a Node reconnects.
>
> | Parameter | Type                    |
> | --------- | :---------------------- |
> | node      | [Node](../classes/node) |

#### • nodeDisconnect

> Emitted when a Node disconnects.
>
> | Parameter | Type                              |
> | --------- | :-------------------------------- |
> | node      | [Node](../classes/node)           |
> | reason    | { code: number , reason: string } |

#### • nodeError

> Emitted when a Node has an error.
>
> | Parameter | Type                    |
> | --------- | :---------------------- |
> | node      | [Node](../classes/node) |
> | error     | Error                   |

#### • nodeRaw

> Emitted whenever any Lavalink event is received.
>
> | Parameter | Type    |
> | --------- | :------ |
> | payload   | unknown |

#### • playerCreate

> Emitted when a player is created.
>
> | Parameter | Type                        |
> | --------- | :-------------------------- |
> | player    | [Player](../classes/player) |

#### • playerDestroy

> Emitted when a player is destroyed.
>
> | Parameter | Type                        |
> | --------- | :-------------------------- |
> | player    | [Player](../classes/player) |

#### • queueEnd

> Emitted when a player queue ends.
>
> | Parameter | Type                        |
> | --------- | :-------------------------- |
> | player    | [Player](../classes/player) |

#### • playerMove

> Emitted when a player is moved to a new voice channel.
>
> | Parameter  | Type                        |
> | ---------- | :-------------------------- |
> | player     | [Player](../classes/player) |
> | oldChannel | string                      |
> | newChannel | string                      |

#### • trackStart

> Emitted when a track starts.
>
> | Parameter | Type                                           |
> | --------- | :--------------------------------------------- |
> | player    | [Player](../classes/player)                    |
> | track     | [Track](../typedefs/track)                     |
> | payload   | [TrackStartEvent](../typedefs/trackstartevent) |

#### • trackEnd

> Emitted when a track ends.
>
> | Parameter | Type                                       |
> | --------- | :----------------------------------------- |
> | player    | [Player](../classes/player)                |
> | track     | [Track](../typedefs/track)                 |
> | payload   | [TrackEndEvent](../typedefs/trackendevent) |

#### • trackStuck

> Emitted when a track gets stuck during playback.
>
> | Parameter | Type                                           |
> | --------- | :--------------------------------------------- |
> | player    | [Player](../classes/player)                    |
> | track     | [Track](../typedefs/track)                     |
> | payload   | [TrackStuckEvent](../typedefs/trackstuckevent) |

#### • trackError

> Emitted when a track has an error during playback.
>
> | Parameter | Type                                                   |
> | --------- | :----------------------------------------------------- |
> | player    | [Player](../classes/player)                            |
> | track     | [Track](../typedefs/track)                             |
> | payload   | [TrackExceptionEvent](../typedefs/trackexceptionevent) |

#### • socketClosed

> Emitted when a voice connection is closed.
>
> | Parameter | Type                                                     |
> | --------- | :------------------------------------------------------- |
> | player    | [Player](../classes/player)                              |
> | payload   | [WebSocketClosedEvent](../typedefs/websocketclosedevent) |

#### • playerStateUpdate

> Emitted when the state of the player has been changed either player paused/resumed or the loop modes have been toggled on or off.
>
> | Parameter | Type                        |
> | --------- | :-------------------------- |
> | oldPlayer | [Player](../classes/player) |
> | newPlayer | [Player](../classes/player) |

### Properties

#### • nodes

> The map of nodes.
>
> | Type                                        | Value                          |
> | ------------------------------------------- | :----------------------------- |
> | Collection<string, [Node](../classes/node)> | new Collection<string, Node>() |

#### • options

> The options that were set.
>
> | Type                           |
> | ------------------------------ |
> | [ManagerOptions](#constructor) |

#### • players

> The map of players.
>
> | Type                                            | Value                            |
> | ----------------------------------------------- | :------------------------------- |
> | Collection<string, [Player](../classes/player)> | new Collection<string, Player>() |

#### • `get` leastLoadNodes

> | Type                                        |
> | ------------------------------------------- |
> | Collection<string, [Node](../classes/node)> |

#### • `get` leastUsedNodes

> | Type                                        |
> | ------------------------------------------- |
> | Collection<string, [Node](../classes/node)> |

### Methods

#### • create()

> Creates a player or returns one if it already exists.
>
> Returns: [Player](../classes/player)
>
> | Parameter | Type                                           |
> | --------- | :--------------------------------------------- |
> | options   | [PlayerOptions](../classes/player#constructor) |

#### • createNode()

> Creates a node or returns one if it already exists.
>
> Returns: [Node](../classes/node)
>
> | Parameter | Type                                       |
> | --------- | :----------------------------------------- |
> | options   | [NodeOptions](../classes/node#constructor) |

#### • decodeTrack()

> Decodes the base64 encoded track and returns a TrackData.
>
> Returns: Promise<[TrackData](../typedefs/trackdata)>
>
> | Parameter | Type   |
> | --------- | :----- |
> | track     | string |

#### • decodeTracks()

> Decodes the base64 encoded tracks and returns a TrackData array.
>
> Returns: Promise<[TrackData](../typedefs/trackdata)`[]`>
>
> | Parameter | Type       |
> | --------- | :--------- |
> | tracks    | string`[]` |

#### • destroy()

> Destroys a player if it exists.
>
> Returns: `void`
>
> | Parameter | Type   |
> | --------- | :----- |
> | guild     | string |

#### • destroyNode()

> Destroys a node if it exists.
>
> Returns: `void`
>
> | Parameter  | Type   |
> | ---------- | :----- |
> | identifier | string |

#### • get()

> Returns a player or undefined if it does not exist.
>
> Returns: [Player](../classes/player) | `undefined`
>
> | Parameter | Type   |
> | --------- | :----- |
> | guild     | string |

#### • init()

> Initiates the Manager.
>
> Returns: `this`
>
> | Parameter | Type   |
> | --------- | :----- |
> | clientId  | string |

#### • search()

> Searches the enabled sources based off the URL or the `source` property.
>
> Returns: Promise<[SearchResult](../typedefs/searchresult)>
>
> | Parameter            | Type    |
> | -------------------- | :------ |
> | query                | string  |
> | `Optional` requester | unknown |

#### • updateVoiceState()

> Sends voice data to the Lavalink server.
>
> Returns: `void`
>
> | Parameter | Type                                   |
> | --------- | :------------------------------------- |
> | data      | [VoicePacket](../typedefs/voicepacket) |
