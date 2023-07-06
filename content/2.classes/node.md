## Manager

Magmastream's Manager, the ultimate command post for unleashing the power of Lavalink like a boss, guaranteed to make you go "Whoa!" like the most mind-blowing meme.

### Constructor

::code-group

::code-block{label="Node" code}

```js
new Magmastream.Node(options: NodeOptions)
```

## Properties

| Options         | Type      | Description                                                   |
| --------------- | :-------- | ------------------------------------------------------------- |
| `host`          | `string`  | The host for the node.                                        |
| `identifier`    | `string`  | The identifier for the node.                                  |
| `password`      | `string`  | The password for the node.                                    |
| `port`          | `number`  | The port for the node.                                        |
| `retryAmount`   | `number`  | How many tries connect to the node if connection failed.      |
| `retryDelay`    | `number`  | Timeout to retry connecting to the node if connection failed. |
| `resumeKey`     | `string`  | Secret key to resume sessions.                                |
| `resumeTimeout` | `number`  | How load to wait before resuming.                             |
| `secure`        | `boolean` | Whether the host uses SSL.                                    |

::
::

## Overview

| Properties              | Methods             |
| ----------------------- | :------------------ |
| [calls](#calls)         | [connect](#connect) |
| [manager](#manager)     | [destroy](#destroy) |
| [options](#options)     | [send](#send)       |
| [socket](#socket)       |                     |
| [stats](#stats)         |                     |
| [connected](#connected) |                     |

### Properties

#### • calls

> The amount of rest calls the node has made.
>
> | Type   | Value |
> | ------ | :---- |
> | number | 0     |

#### • manager

> The main hub for interacting with Lavalink.
>
> | Type                          |
> | ----------------------------- |
> | [Manager](../classes/manager) |

#### • options

> The object that must be created to connect to a Lavalink server.
>
> | Type                        |
> | --------------------------- |
> | [NodeOptions](#constructor) |

#### • socket

> The socket for the node.
>
> | Type              | Value |
> | ----------------- | ----- |
> | WebSocket or null | null  |

#### • stats

> The stats for the node.
>
> | Properties     | Type                                         | Description                                |
> | -------------- | -------------------------------------------- | ------------------------------------------ |
> | cpu            | [CPUStats](../typedefs/stats#cpustats)       | The cpu stats for the node.                |
> | frameStats     | [FrameStats](../typedefs/stats#framestats)   | The frame stats for the node.              |
> | memory         | [MemoryStats](../typedefs/stats#memorystats) | The memory stats for the node.             |
> | players        | number                                       | The amount of players on the node.         |
> | playingPlayers | number                                       | The amount of playing players on the node. |
> | uptime         | number                                       | The uptime for the node.                   |

#### • `get` connected

> Weather the node is connected.
>
> | Type    |
> | ------- |
> | boolean |

### Methods

#### • connect()

> | Description           | Returns |
> | --------------------- | ------- |
> | Connects to the Node. | `void`  |

#### • destroy()

> | Description                                          | Returns |
> | ---------------------------------------------------- | ------- |
> | Destroys the Node and all players connected with it. | `void`  |

#### • send()

> Sends data to the Node.
>
> Returns: `Promise<boolean>`
>
> | Parameter | Type    |
> | --------- | :------ |
> | data      | unknown |
