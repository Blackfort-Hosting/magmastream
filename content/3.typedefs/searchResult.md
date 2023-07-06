# SearchResult

exception
loadType
playlist
tracks

### Overview

| Properties  | Type                                     | Description                                      |
| ----------- | ---------------------------------------- | ------------------------------------------------ |
| `exception` | `{ message: string , severity: string }` | The exception when searching if one.             |
| `loadType`  | [LoadType](#loadtype)                    | The load type of the result.                     |
| `playlist`  | [PlaylistInfo](#playlistinfo)            | Playlist info if load type is `PLAYLIST_LOADED`. |
| `tracks`    | [Track](../typedefs/track)`[]`           | The array of tracks from the result.             |

### LoadType

> Value: `TRACK_LOADED` `PLAYLIST_LOADED` `SEARCH_RESULT` `LOAD_FAILED` `NO_MATCHES`

### PlaylistInfo

| Properties      | Type                       | Description                     |
| --------------- | -------------------------- | ------------------------------- |
| `duration`      | `number`                   | `The duration of the playlist.` |
| `name`          | `string`                   | `The playlist name.`            |
| `selectedTrack` | [Track](../typedefs/track) | `The playlist selected track.`  |
