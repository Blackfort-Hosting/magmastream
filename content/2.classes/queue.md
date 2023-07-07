## Queue

## Overview

| Properties              | Methods             |
| ----------------------- | ------------------- |
| [current](#current)     | [add](#add)         |
| [duration](#duration)   | [clear](#clear)     |
| [size](#size)           | [remove](#remove)   |
| [previous](#previous)   | [shuffle](#shuffle) |
| [totalSize](#totalSize) |                     |

## Properties

#### • current

> The current track.
>
> | Type                                                                                 | Value |
> | ------------------------------------------------------------------------------------ | :---- |
> | [Track](../typedefs/track) or [UnresolvedTrack](../typedefs/unresolvedtrack) or null | null  |

#### • duration

> The total time of the queue.
>
> | Type   |
> | ------ |
> | number |

#### • size

> The size of tracks in the queue.
>
> | Type   |
> | ------ |
> | number |

#### • previous

> The past track.
>
> | Type   |
> | ------ |
> | number |

#### • totalSize

> The total size of tracks in the queue including the current track.
>
> | Type   |
> | ------ |
> | number |

## Methods

#### • add()

> Adds a track to the queue.
>
> Returns: `void`
>
> | Parameter         | type                       |
> | ----------------- | -------------------------- |
> | track             | [Track](../typedefs/track) |
> | `Optional` offset | number                     |

#### • clear()

> | Description       | Returns |
> | ----------------- | ------- |
> | Clears the queue. | void    |

#### • remove()

> Removes a track from the queue. Defaults to the first track, returning the removed track, **excluding** the `current` track.
>
> Returns: [`Track[]`](../typedefs/track)
>
> | Parameter           | type   |
> | ------------------- | ------ |
> | `Optional` position | number |

#### • remove()

> Removes an amount of tracks using a exclusive start and end exclusive index, returning the removed tracks, **excluding** the `current` track.
>
> Returns: [`Track`](../typedefs/track) | [`UnresolvedTrack[]`](../typedefs/unresolvedtrack)
>
> | Parameter | type   |
> | --------- | ------ |
> | start     | number |
> | end       | number |

#### • shuffle()

> | Description      | Returns |
> | ---------------- | ------- |
> | Mixes the queue. | void    |
