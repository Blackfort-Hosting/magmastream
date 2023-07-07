# TrackUtils

## Overview

| Properties                           | Methods                                        |
| ------------------------------------ | ---------------------------------------------- |
| [trackPartial](#static-trackpartial) | [build](#static-build)                         |
|                                      | [buildUnresolved](#static-buildunresolved)     |
|                                      | [getClosestTrack](#static-getclosesttrack)     |
|                                      | [isTrack](#static-istrack)                     |
|                                      | [isUnresolvedTrack](#static-isunresolvedtrack) |
|                                      | [setTrackPartial](#static-settrackpartial)     |
|                                      | [validate](#static-validate)                   |

## Properties

#### • `static` trackPartial

> | Type               | Value |
> | ------------------ | ----- |
> | `string[]` or null | null  |

## Methods

#### • `static` build()

> Builds a Track from the raw data from Lavalink and a optional requester.
>
> Returns: [Track](../typedefs/track)
>
> | Parameter            | Type                               |
> | -------------------- | ---------------------------------- |
> | data                 | [TrackData](../typedefs/trackdata) |
> | `Optional` requester | unknown                            |

#### • `static` buildUnresolved()

> Builds a unresolved track before being played.
>
> Returns: [UnresolvedTrack](../typedefs/unresolvedtrack)
>
> | Parameter            | Type    |
> | -------------------- | ------- |
> | query                | string  |
> | `Optional` requester | unknown |

#### • `static` getClosestTrack()

> Finds the track that best matches the unresolved track.
>
> Returns: Promise<[Track](../typedefs/track)>
>
> | Parameter       | Type                                           |
> | --------------- | ---------------------------------------------- |
> | unresolvedTrack | [UnresolvedTrack](../typedefs/unresolvedtrack) |

#### • `static` isTrack()

> Checks if the provided argument is a valid Track.
>
> Returns: `boolean`
>
> | Parameter | Type    |
> | --------- | ------- |
> | track     | unknown |

#### • `static` isUnresolvedTrack()

> Checks if the provided argument is a valid UnresolvedTrack.
>
> Returns: `boolean`
>
> | Parameter | Type    |
> | --------- | ------- |
> | track     | unknown |

#### • `static` setTrackPartial()

> Returns: `void`
>
> | Parameter | Type       |
> | --------- | ---------- |
> | partial   | `string[]` |

#### • `static` validate()

> Checks if the provided argument is a valid Track or UnresolvedTrack, if provided an array then every element will be checked.
>
> Returns: `boolean`
>
> | Parameter       | Type                   |
> | --------------- | ---------------------- |
> | track or tracks | `string` or `string[]` |
