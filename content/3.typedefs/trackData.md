# TrackData

### Overview

| Properties   | Type                            | Description                                |
| ------------ | ------------------------------- | ------------------------------------------ |
| `encoded`    | `string`                        | The base64 encoded track.                  |
| `info`       | [TrackDataInfo](#trackdatainfo) | The detailed information of the track.     |
| `pluginInfo` | `object`                        | Additional track info provided by plugins. |

## TrackDataInfo

| Properties   | Type      |
| ------------ | --------- |
| `author`     | `string`  |
| `identifier` | `string`  |
| `isSeekable` | `boolean` |
| `isStream`   | `boolean` |
| `length`     | `number`  |
| `title`      | `string`  |
| `uri`        | `string`  |
| `artworkUrl` | `string`  |
| `sourceName` | `string`  |
