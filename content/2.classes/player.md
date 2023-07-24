# Player

### Constructor

::code-group

::code-block{label="Player" code}

```js
new Magmastream.Player(options: PlayerOptions)
```

## Properties

| Options        | Type      | Description                              |
| -------------- | :-------- | ---------------------------------------- |
| `guild`        | `string`  | The guild the Player belongs to.         |
| `node`         | `string`  | The node the Player uses.                |
| `selfDeafen`   | `boolean` | If the player should deaf itself.        |
| `selfMute`     | `boolean` | If the player should mute itself.        |
| `textChannel`  | `string`  | The text channel the Player belongs to.  |
| `voiceChannel` | `string`  | The voice channel the Player belongs to. |
| `volume`       | `number`  | The initial volume the Player will use.  |

::
::

## Overview

| Properties                              | Methods                                       |
| --------------------------------------- | :-------------------------------------------- |
| [dynamicRepeat](#dynamicrepeat)         | [connect](#connect)                           |
| [filters](#filters)                     | [destroy](#destroy)                           |
| [guild](#guild)                         | [disconnect](#disconnect)                     |
| [manager](#manager)                     | [get](#get)                                   |
| [node](#node)                           | [pause](#pause)                               |
| [nowPlayingMessage](#nowplayingmessage) | [previous](#previous)                         |
| [options](#options)                     | [play](#play)                                 |
| [paused](#paused)                       | [restart](#restart)                           |
| [playing](#playing)                     | [search](#search)                             |
| [position](#position)                   | [seek](#seek)                                 |
| [queue](#queue)                         | [set](#set)                                   |
| [queueRepeat](#queuerepeat)             | [setDynamicRepeat](#setdynamicrepeat)         |
| [state](#state)                         | [setNowPlayingMessage](#setnowplayingmessage) |
| [textChannel](#textchannel)             | [setQueueRepeat](#setqueuerepeat)             |
| [trackRepeat](#trackrepeat)             | [setTextChannel](#settextchannel)             |
| [voiceChannel](#voicechannel)           | [setTrackRepeat](#settrackrepeat)             |
| [voiceState](#voicestate)               | [setVoiceChannel](#setvoicechannel)           |
| [volume](#volume)                       | [setVolume](#setvolume)                       |
|                                         | [stop](#stop)                                 |

### Properties

#### • dynamicRepeat

> Whether the queue will repeat and shuffle every `x` amount of `ms`.
>
> | Type    | Value |
> | ------- | :---- |
> | boolean | false |

#### • filters

> The filters instance.
>
> | Type                          |
> | ----------------------------- |
> | [Filters](../classes/filters) |

#### • guild

> The guild of the player.
>
> | Type   |
> | ------ |
> | string |

#### • manager

> The main hub for interacting with Lavalink.
>
> | Type                          |
> | ----------------------------- |
> | [Manager](../classes/manager) |

#### • node

> The node which the player is currently using.
>
> | Type                    |
> | ----------------------- |
> | [Node](../classes/node) |

#### • nowPlayingMessage

> The message of the current playing track.
>
> | Type                                               |
> | -------------------------------------------------- |
> | [NowPlayingMessage](../typedefs/nowplayingmessage) |

#### • options

> | Type                          |
> | ----------------------------- |
> | [PlayerOptions](#constructor) |

#### • paused

> Whether the player is paused.
>
> | Type    | Value |
> | ------- | ----- |
> | boolean | false |

#### • playing

> Whether the player is playing.
>
> | Type    | Value |
> | ------- | ----- |
> | boolean | false |

#### • postition

> The current track time.
>
> | Type    | Value |
> | ------- | ----- |
> | boolean | false |

#### • queue

> The player's queue.
>
> | Type                      |
> | ------------------------- |
> | [Queue](../classes/queue) |

#### • queueRepeat

> Whether the player repeats after the last track.
>
> | Type    | Value |
> | ------- | ----- |
> | boolean | false |

#### • state

> The current state of the player.
>
> | Types                                                                |
> | -------------------------------------------------------------------- |
> | `CONNECTED` `CONNECTING` `DISCONNECTED` `DISCONNECTING` `DESTROYING` |

#### • textChannel

> The text channel which the player uses.
>
> | Type   | Value |
> | ------ | ----- |
> | string | null  |

#### • trackRepeat

> Whether the player repeats the track.
>
> | Type    | Value |
> | ------- | ----- |
> | boolean | false |

#### • voiceChannel

> The voice channel which the player uses.
>
> | Type   | Value |
> | ------ | ----- |
> | string | null  |

#### • voiceState

> Discord's voice state object.
>
> | Type                                 |
> | ------------------------------------ |
> | [VoiceState](../typedefs/voicestate) |

#### • volume

> The volume level of the player.
>
> | Type   |
> | ------ |
> | number |

### Methods

#### • connect()

> | Description                   | Returns |
> | ----------------------------- | ------- |
> | Connect to the voice channel. | `this`  |

#### • destroy()

> | Description          | Returns |
> | -------------------- | ------- |
> | Destroys the player. | `void`  |

#### • disconnect()

> | Description                        | Returns |
> | ---------------------------------- | ------- |
> | Disconnect from the voice channel. | `this`  |

#### • get()

> Get custom data.
>
> Type parameter `T`
>
> Returns: `T`
>
> | Parameter | Type   |
> | --------- | ------ |
> | key       | string |

#### • pause()

> Pauses the current track.
>
> Returns: `this`
>
> | Parameter | Type    |
> | --------- | ------- |
> | pause     | boolean |

#### • previous()

> | Description                   | Returns |
> | ----------------------------- | ------- |
> | Go back to the previous song. | `this`  |

#### • play()

> Plays the next track.
>
> Returns: `Promise<void>`

#### • play()

> Returns: `Promise<void>`
>
> | Parameter | Type                       | Description                |
> | --------- | -------------------------- | -------------------------- |
> | track     | [Track](../typedefs/track) | Plays the specified track. |

#### • play()

> Returns: `Promise<void>`
>
> | Parameter | Type                                   | Description                             |
> | --------- | -------------------------------------- | --------------------------------------- |
> | options   | [PlayOptions](../typedefs/playoptions) | Plays the next track with some options. |

#### • play()

> Plays the specified track with some options.
>
> Returns: `Promise<void>`
>
> | Parameter | Type                                   |
> | --------- | -------------------------------------- |
> | track     | [Track](../typedefs/track)             |
> | options   | [PlayOptions](../typedefs/playoptions) |

#### • restart()

> | Description                         | Returns |
> | ----------------------------------- | ------- |
> | Restarts the current playing track. | `void`  |

#### • search()

> Same as `Manager#search()` but a shortcut on the player itself.
>
> Returns: Promise<[SearchResult](../typedefs/searchresult)>
>
> | Parameter | Type    |
> | --------- | ------- |
> | query     | string  |
> | requester | unknown |

#### • seek()

> Seeks to the position in the current track.
>
> Returns: `this`
>
> | Parameter | Type   |
> | --------- | ------ |
> | position  | number |

#### • set()

> Set custom data.
>
> Returns: `void`
>
> | Parameter | Type    |
> | --------- | ------- |
> | key       | string  |
> | value     | unknown |

#### • setDynamicRepeat()

> Sets the queue to repeat and shuffles the queue after `x` amount of `ms`.
>
> Returns: `this`
>
> | Parameter | Type    |
> | --------- | ------- |
> | repeat    | boolean |
> | ms        | number  |

#### • setNowPlayingMessage()

> Sets the message of the currently playing track to delete once the track ends.
>
> Returns: `this`
>
> | Parameter | Type    |
> | --------- | ------- |
> | repeat    | boolean |
> | ms        | number  |

#### • setQueueRepeat()

> Sets the queue repeat.
>
> Returns: `this`
>
> | Parameter | Type    |
> | --------- | ------- |
> | repeat    | boolean |

#### • setTextChannel()

> Sets the player text channel.
>
> Returns: `this`
>
> | Parameter | Type   |
> | --------- | ------ |
> | channel   | string |

#### • setTrackRepeat()

> Sets the track to repeat.
>
> Returns: `this`
>
> | Parameter | Type    |
> | --------- | ------- |
> | repeat    | boolean |

#### • setVoiceChannel()

> Sets the player voice channel.
>
> Returns: `this`
>
> | Parameter | Type   |
> | --------- | ------ |
> | channel   | string |

#### • setVolume()

> Sets the player volume.
>
> Returns: `this`
>
> | Parameter | Type   |
> | --------- | ------ |
> | volume    | number |

#### • stop()

> | Description              | Returns |
> | ------------------------ | ------- |
> | Stops the current track. | `this`  |
